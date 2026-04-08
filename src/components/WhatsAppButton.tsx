import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5491100000000"; // Reemplazar con número real
const WHATSAPP_MESSAGE = "Hola! Me interesa consultar por el servicio de drones de MAPADRONE.";

export const getWhatsAppUrl = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || WHATSAPP_MESSAGE)}`;

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg transition-transform hover:scale-110 hover:bg-whatsapp-hover md:h-16 md:w-16"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-primary md:h-8 md:w-8" />
    </a>
  );
};

export default WhatsAppButton;
