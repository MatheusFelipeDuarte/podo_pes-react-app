import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import dayanePortrait from "@/assets/dayane-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-soft py-12 lg:py-20 border-b border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-wide">
              Espaço Pés
            </h2>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.15]">
              A solução em <br />
              <span className="text-primary">Mogi das Cruzes</span> para <br />
              os seus problemas de pés
            </h1>

            <div className="space-y-1 text-base sm:text-lg text-foreground/90 font-medium">
              <p className="font-bold text-foreground">
                Cuidando dos seus Pés há mais de 9 anos!
              </p>
              <p>
                Cuide de quem <strong className="text-primary font-bold">te sustenta o dia inteiro!</strong>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/90 border border-border shadow-soft max-w-lg">
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                Consulta particular, garantindo um cuidado diferenciado.{" "}
                <strong className="text-accent font-bold">Não aceitamos convênios!</strong>
              </p>
            </div>

            <div className="pt-2">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-base sm:text-lg px-8 py-6 rounded-md shadow-medium hover:scale-105 transition-smooth w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/5511947578967?text=Ol%C3%A1,%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6 fill-white" />
                  <span>AGENDAR TRATAMENTO</span>
                </a>
              </Button>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-muted-foreground flex flex-wrap gap-4">
              <span>✓ Dayane Camarinha</span>
              <span>✓ Capacitada em Pé Diabético (Facuminas)</span>
              <span>✓ Técnica em Nutrição e Dietética</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] rounded-3xl overflow-hidden shadow-strong border-4 border-white bg-white">
              <img
                src={dayanePortrait}
                alt="Dayane Camarinha Podóloga em Mogi das Cruzes"
                className="w-full h-auto object-cover max-h-[540px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <p className="font-bold text-lg drop-shadow">Dayane Camarinha</p>
                <p className="text-xs text-white/90 drop-shadow">Podóloga & Nutricionista</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;