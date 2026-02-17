export function generateWhatsAppLink(
  phoneNumber: string, // ej: "+5491123456789" o "5491123456789" (internacional, sin espacios ni guiones)
  product: {
    title: string;
    description?: string;
    fichaTecnica?: string; // URL de la ficha técnica
    category?: string;
    id?: string;
    // puedes agregar más campos si quieres (ej: price, referencia, etc.)
  },
  extraMessage?: string, // opcional: texto adicional personalizado
): string {
  // Limpiamos el número (quitamos +, espacios, guiones, paréntesis, etc.)
  const cleanPhone = phoneNumber.replace(/[^\d]/g, "");

  // Construimos el mensaje ordenado y legible
  let message = `¡Hola! Estoy interesado/a en el siguiente producto:\n\n`;

  message += `**Producto:** ${product.title}\n`;

  // if (product.category) {
  //   message += `**Categoría:** ${product.category}\n`;
  // }

  if (product.description) {
    message += `**Descripción:** ${product.description}\n`;
  }

  // if (product.id) {
  //   message += `**Referencia/Código:** ${product.id}\n`;
  // }

  if (product.fichaTecnica) {
    message += `\n**Ficha técnica:** ${product.fichaTecnica}\n`;
  }

  if (extraMessage) {
    message += `\n${extraMessage}\n`;
  }

  message += `\nQuedo atento/a a su respuesta. ¡Gracias!`;

  // Codificamos el mensaje para URL (espacios → %20, saltos → %0A, etc.)
  const encodedMessage = encodeURIComponent(message);

  // Link final (formato oficial recomendado por WhatsApp)
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
