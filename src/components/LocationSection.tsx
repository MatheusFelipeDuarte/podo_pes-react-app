import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white" id="contato">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-medium border border-border min-h-[380px] h-full flex flex-col">
            <iframe
              src="https://maps.google.com/maps?q=Rua%20Doutor%20Ricardo%20Vilela%2C%201400%20-%20Centro%2C%20Mogi%20das%20Cruzes%20-%20SP&t=m&z=16&output=embed&iwloc=near"
              title="R. Dr. Ricardo Vilela, 1400 - Sala 5 - Centro, Mogi das Cruzes - SP"
              aria-label="R. Dr. Ricardo Vilela, 1400 - Sala 5 - Centro, Mogi das Cruzes - SP"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
            ></iframe>
          </div>

          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Entre em Contato conosco
              </h3>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
                Comece a cuidar dos seus pés hoje!
              </h2>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">
                Nos visite
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                R. Dr. Ricardo Vilela, 1400 – Sala 5 – Centro, Mogi das Cruzes – SP, 08780-060
              </p>
              <p className="text-muted-foreground text-sm sm:text-base font-medium">
                Temos estacionamento próprio no local. (Ao lado do Haha House Comedy)
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">
                Envie uma mensagem
              </h3>
              <p className="text-lg font-bold text-foreground">
                <a
                  href="https://wa.me/5511947578967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  (11) 94757-8967
                </a>
              </p>
            </div>

            <div className="pt-2">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-6 rounded-md shadow-soft hover:scale-105 transition-smooth w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/5511947578967?text=Ol%C3%A1,%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Entrar em contato</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
