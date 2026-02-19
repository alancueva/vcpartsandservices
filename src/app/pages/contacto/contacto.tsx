"use client";
import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react";
import TextAreaField from "@/components/ux/textarea";
import InputField from "@/components/ux/Input";

// Colores basados en el esquema corporativo (vinotinto/rojo oscuro)
const ACCENT_COLOR = "bg-red-700";
const ACCENT_TEXT = "text-red-700";
const HOVER_COLOR = "hover:bg-red-800";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

// Tipos para el estado de envío
type Status = "idle" | "loading" | "success" | "error";

// Duración en milisegundos para que el mensaje de estado desaparezca
const MESSAGE_DURATION = 5000;

/**
 * Componente para mostrar mensajes de estado (éxito, error, carga).
 */
const StatusMessage: React.FC<{ status: Status; message: string }> = ({
  status,
  message,
}) => {
  if (!message || status === "idle") return null;

  const baseClasses =
    "p-3 rounded-lg text-sm mb-4 font-semibold flex items-center";
  let icon: React.ReactElement;
  let finalClasses: string;

  switch (status) {
    case "loading":
      icon = <Loader2 className="h-5 w-5 mr-2 animate-spin" />;
      finalClasses = "bg-red-100 text-red-700";
      break;
    case "success":
      icon = (
        <svg
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      );
      finalClasses = "bg-green-100 text-green-700";
      break;
    case "error":
      icon = (
        <svg
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
      finalClasses = "bg-red-100 text-red-700";
      break;
    default:
      return null;
  }

  return (
    <div className={`${baseClasses} ${finalClasses}`}>
      {icon}
      {message}
    </div>
  );
};

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  // Función para limpiar el mensaje de estado después del temporizador
  const clearMessage = useCallback(() => {
    setMessage("");
    setStatus("idle");
  }, []);

  // Maneja el cambio en todos los inputs (text y textarea)
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      if (onlyNums.length <= 9) {
        setFormData((prev) => ({ ...prev, [name]: onlyNums }));
      }
      return;
    }

    if (name === "company") {
      const onlySpanishUpper = value
        .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, "")
        .toUpperCase();

      setFormData((prev) => ({ ...prev, [name]: onlySpanishUpper }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Función simulada de envío de formulario, fuertemente tipada para el evento.
   */
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      clearMessage();

      // Validación básica
      if (!formData.name || !formData.email || !formData.message) {
        setMessage(
          "Por favor, rellene los campos obligatorios (Nombre, Correo, Mensaje).",
        );
        setStatus("error");

        setTimeout(clearMessage, MESSAGE_DURATION);
        return;
      }

      // Validación de longitud del teléfono (opcional, si quieres que sea exactamente 9)
      if (formData.phone && formData.phone.length !== 9) {
        setMessage("El teléfono debe tener exactamente 9 dígitos.");
        setStatus("error");
        setTimeout(clearMessage, MESSAGE_DURATION);
        return;
      }

      // Validación de formato de correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setMessage("El correo electrónico no es válido.");
        setStatus("error");
        setTimeout(clearMessage, MESSAGE_DURATION);
        return;
      }

      setStatus("loading");
      setMessage("Enviando mensaje...");

      try {
        const response = await fetch(
          "https://vcpartsandservices.com/api/send-mail.php",
          {
            // Ajusta esta URL
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );
        // if (!response.ok) {
        //   const errorData = await response.json();
        //   throw new Error(errorData.error || "Error en el servidor");
        // }

        // const result = await response.json();
        const result = await response
          .json()
          .catch(() => ({ success: false, error: "Error de respuesta" }));

        if (result.success) {
          setStatus("success");
          setMessage(
            "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
          );
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
        } else {
          throw new Error(result.error || "Error desconocido");
        }
      } catch (error) {
        setStatus("error");
        setMessage(
          error instanceof Error
            ? error.message
            : "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
        );
        //console.error("Error de envío:", error);
      }

      // Ocultar el mensaje después de 5 segundos, ya sea éxito o error
      setTimeout(clearMessage, MESSAGE_DURATION);
    },
    [formData, clearMessage],
  );

  return (
    <section className="py-20 md:py-32 bg-gray-50 font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* TÍTULO PRINCIPAL */}
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Comuníquese
            <span className={`italic font-serif ${ACCENT_TEXT} ml-2`}>
              con nosotros
            </span>
          </h2>
          {/* Línea de acento vinotinto */}
          <div
            className={`w-12 h-1 ${ACCENT_COLOR} mx-auto rounded-full mt-2`}
          ></div>
        </header>

        {/* CONTENIDO (2 Columnas: Info + Formulario) */}
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* COLUMNA IZQUIERDA: INFORMACIÓN DE CONTACTO (Sólida y profesional) */}
          <div
            className={`lg:w-1/3 p-8 md:p-12 ${ACCENT_COLOR} text-white flex flex-col justify-between`}
          >
            <div className="space-y-8">
              <h3 className="text-3xl font-bold leading-tight border-b border-white border-opacity-30 pb-4 mb-4">
                Hablemos de su proyecto
              </h3>
              <p className="text-gray-200">
                Estamos listos para asistirle con soluciones de precisión,
                equipos y consumibles. Contáctenos para una cotización o
                asesoría técnica.
              </p>

              {/* Detalles de Contacto */}
              <div className="space-y-6">
                <a
                  href="tel:+51960785273"
                  className="flex items-center text-lg hover:text-gray-300 transition duration-200"
                >
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>+51 960 785 273</span>
                </a>
                <a
                  href="mailto:info@vcpartsandservices.com"
                  className="flex items-center text-lg hover:text-gray-300 transition duration-200"
                >
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>info@vcpartsandservices.com</span>
                </a>
                <div className="flex items-start text-lg">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Urb. San Rafael J4-16 Nuevo Chimbote</span>
                </div>
              </div>
            </div>

            {/* Pequeño CTA al final */}
            <div className="mt-10 pt-6 border-t border-white border-opacity-30">
              <p className="text-sm text-gray-300">
                *Todos los campos con asterisco son obligatorios.
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO DE CONTACTO (Minimalista y limpio) */}
          {/* COLUMNA DERECHA: FORMULARIO DE CONTACTO */}
          <div className="lg:w-2/3 p-8 md:p-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">
              Envíenos un mensaje
            </h3>

            <StatusMessage status={status} message={message} />

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Nombre y Apellido"
                  name="name"
                  required={true}
                  value={formData.name}
                  onChange={handleChange} // Cast temporal
                />
                <InputField
                  label="Correo"
                  name="email"
                  type="email"
                  required={true}
                  value={formData.email}
                  onChange={handleChange} // Cast temporal
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Teléfono"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <InputField
                  label="Empresa"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <TextAreaField
                label="Su mensaje"
                name="message"
                required={true}
                value={formData.message}
                onChange={handleChange}
              />

              {/* Botón de Envío */}
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent
                                            text-base font-medium rounded-xl shadow-lg text-white
                                            ${ACCENT_COLOR} ${HOVER_COLOR} transition duration-300 ease-in-out
                                            transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-red-300 disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
