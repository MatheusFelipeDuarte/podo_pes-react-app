import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import clinicHero from "@/assets/hero-clinic.jpg";

const ClinicFeatures = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-soft border-b border-border/40" id="sobre-clinica">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              Descubra a melhor clínica de podologia em Mogi das Cruzes para cuidar dos seus pés.
            </h2>

            <div>
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
                  <ChevronDown className="w-5 h-5" />
                  <span>AGENDAR TRATAMENTO</span>
                </a>
              </Button>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-foreground/90 leading-relaxed pt-2">
              <p>
                Encontre na clínica <strong>Espaço Pés</strong> em Mogi das Cruzes a profissional Podóloga <strong>Dayane Camarinha</strong>, especializada em podologia para pés diabéticos pela Universidade Facuminas.
              </p>
              <p>
                Cuide da saúde dos seus pés com excelência, biossegurança hospitalar e cuidado humanizado.
              </p>
              <p className="font-bold text-foreground">
                Agende sua consulta agora!
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-strong border-4 border-white w-full max-w-[480px] aspect-[4/3] relative">
              <img
                src={clinicHero}
                alt="Espaço Pés - Podologia Especializada em Mogi das Cruzes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <p className="font-bold text-base">Espaço Pés - Mogi das Cruzes</p>
                <p className="text-xs text-white/90">Atendimento personalizado com hora marcada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicFeatures;
