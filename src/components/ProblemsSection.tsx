import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import chamarizImage from "@/assets/chamariz.jpg";

const ProblemsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white" id="problemas">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Calos e calosidades
              </h2>
              <div className="w-16 h-0.5 bg-primary"></div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Tratamentos eficazes para remover calos e calosidades, proporcionando alívio imediato e prevenção contra a formação futura desses problemas.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Micoses de unha
              </h2>
              <div className="w-16 h-0.5 bg-primary"></div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Terapias antifúngicas, incluindo aplicação de antifúngicos e remoção da unha afetada, se necessário, para garantir o crescimento de uma unha saudável.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Unhas encravadas
              </h2>
              <div className="w-16 h-0.5 bg-primary"></div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Técnicas especializadas de corte e remoção das partes problemáticas, proporcionando alívio e orientações para evitar recidivas.
              </p>
            </div>
          </div>

          <div className="text-center space-y-6 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Não sofra com nada disso
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-strong border border-border w-full max-w-[340px] aspect-[4/5]">
              <img
                src={chamarizImage}
                alt="Cuidados de podologia no Espaço Pés"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug max-w-xs">
              Cuide de quem te sustenta o dia inteiro.
            </h2>

            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-6 rounded-md shadow-soft hover:scale-105 transition-smooth w-full max-w-[280px]"
              asChild
            >
              <a
                href="https://wa.me/5511947578967?text=Ol%C3%A1,%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <span>ENTRAR EM CONTATO</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Fascite plantar
              </h2>
              <div className="w-16 h-0.5 bg-primary"></div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Uso de órteses e palmilhas especiais, além de orientações sobre exercícios e mudanças no estilo de vida para reduzir a dor e melhorar a função do pé.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Joanetes
              </h2>
              <div className="w-16 h-0.5 bg-primary"></div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Almofadas protetoras, dispositivos ortopédicos e calçados adequados, aliviando a dor e melhorando a mobilidade.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Pé diabético
              </h2>
              <div className="w-16 h-0.5 bg-primary"></div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Oferecendo educação, tratamento de feridas, prescrição de calçados adequados e orientações sobre autocuidado, garantindo a saúde e prevenindo complicações futuras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
