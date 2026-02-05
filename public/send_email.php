<?php
// ==================== CONFIGURACIÓN ====================
//alancuevat@gmail.com
// info@vcpartsandservices.com
$destinatario = "alancuevat@gmail.com";        // Cambia solo este correo
$asunto       = "Nuevo mensaje desde el sitio web - VC Parts";

// Para evitar que te marquen como spam (muy importante)
$remitente    = "no-reply@" . $_SERVER['SERVER_NAME'];   // Ej: no-reply@tudominio.com

// ==================== SEGURIDAD BÁSICA ====================
// Permitir solo desde tu dominio (evita que usen tu PHP desde otros sitios)
$dominio_permitido = "vcpartsandservices.com"; // Cambia por tu dominio real (sin https:// ni www)
if (
    !isset($_SERVER['HTTP_ORIGIN']) ||
    parse_url($_SERVER['HTTP_ORIGIN'], PHP_URL_HOST) !== $dominio_permitido
) {
    // Opcional: puedes permitir también localhost en desarrollo
    if (
        strpos($_SERVER['HTTP_ORIGIN'], 'localhost') === false &&
        strpos($_SERVER['HTTP_ORIGIN'], '127.0.0.1') === false
    ) {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => 'Origen no permitido']);
        exit;
    }
}

// Solo aceptar POST + JSON
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Método no permitido']);
    exit;
}

header('Content-Type: application/json');

// Leer JSON enviado desde React
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'error' => 'Datos no recibidos o formato inválido']);
    exit;
}

// ==================== VALIDACIÓN ====================
$requeridos = ['name', 'email', 'message'];
foreach ($requeridos as $campo) {
    if (empty(trim($data[$campo]))) {
        echo json_encode(['success' => false, 'error' => "El campo $campo es obligatorio"]);
        exit;
    }
}

if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Correo electrónico inválido']);
    exit;
}

// Sanitizar datos (evita inyección en el correo)
$name    = substr(trim(strip_tags($data['name'])), 0, 100);
$email   = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone   = substr(trim(strip_tags($data['phone'] ?? '')), 0, 30);
$company = substr(trim(strip_tags($data['company'] ?? '')), 0, 100);
$message = substr(trim(strip_tags($data['message'])), 0, 2000);

// ==================== CUERPO DEL CORREO (bonito y organizado) ====================
$cuerpo = "═══ NUEVO MENSAJE DE CONTACTO ═══\n\n";
$cuerpo .= "Fecha y hora: " . date('d/m/Y H:i:s') . "\n";
$cuerpo .= "IP del visitante: " . ($_SERVER['REMOTE_ADDR'] ?? 'Desconocida') . "\n\n";
$cuerpo .= "Nombre y Apellido: $name\n";
$cuerpo .= "Correo electrónico: $email\n";
$cuerpo .= "Teléfono: " . ($phone ?: 'No proporcionado') . "\n";
$cuerpo .= "Empresa: " . ($company ?: 'No proporcionada') . "\n\n";
$cuerpo .= "Mensaje:\n────────────────────────────────────\n";
$cuerpo .= wordwrap($message, 70) . "\n";
$cuerpo .= "\n────────────────────────────────────\n";
$cuerpo .= "Enviado desde el formulario de vcpartsandservices.com";

// ==================== CABECERAS (anti-spam) ====================
$headers  = "From: Sitio Web <$remitente>\r\n";
$headers .= "Reply-To: $name <$email>r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// ==================== ENVÍO ====================
if (mail($destinatario, $asunto, $cuerpo, $headers)) {
    echo json_encode(['success' => true]);
} else {
    // En muchos hostings compartidos mail() devuelve false pero el correo sí se envió
    // Por eso muchos hacemos un "siempre éxito" si no hay error fatal
    // Pero para ser honestos:
    echo json_encode(['success' => false, 'error' => 'Error del servidor de correo. Intenta más tarde.']);
}
