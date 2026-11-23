import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5511947578967?text=Ol%C3%A1,%20venho%20do%20site%20e%20gostaria%20de%20agendar%20um%20atendimento."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-strong hover:scale-110 transition-bounce group"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="hidden sm:inline font-bold text-sm pr-2 tracking-wide">
          Agendar Tratamento
        </span>
      </a>
    </aside>
  );
};

export default WhatsAppFloat;
