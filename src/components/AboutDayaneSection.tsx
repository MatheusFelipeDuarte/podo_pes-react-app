import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart, Award, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import sobreDayaneImg from "@/assets/sobre-dayane.jpeg";

const AboutDayaneSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-border/40" id="sobre-dayane">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-strong border border-border/60 max-w-[460px] w-full bg-white">
              <img
                src={sobreDayaneImg}
                alt="Trajetória Profissional - Dayane Camarinha"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-left order-1 lg:order-2">
            <Badge variant="secondary" className="bg-primary-soft text-primary font-semibold px-3 py-1 text-xs">
              <Heart className="w-3.5 h-3.5 mr-1.5 fill-primary" />
              Sobre a Especialista
            </Badge>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              Dayane Camarinha
            </h2>

            <p className="text-lg font-medium text-primary italic">
              "Cuidar dos pés também é cuidar de histórias."
            </p>

            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Com uma trajetória pautada pela qualificação contínua e dedicação à saúde podológica, Dayane alia formação técnica em Nutrição à graduação em Podologia pela UniCesumar, proporcionando um cuidado preventivo, completo e integrado.
              </p>
              <p>
                Especialista pós-graduada em Podologia com ênfase em Pé Diabético pela Facuminas, atua no tratamento de afecções complexas, feridas e lesões dermatológicas. Possui sólida prática clínica e já ministrou aulas como docente convidada em cursos de aperfeiçoamento.
              </p>
              <p>
                Fundadora da Clínica Espaço Pés em Mogi das Cruzes, dedica sua atuação a oferecer diagnósticos criteriosos, protocolos modernos e atendimento acolhedor com rigorosa biossegurança.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-foreground bg-primary-soft/40 p-3 rounded-xl border border-primary/20">
                <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                <span>Graduação e Pós-Graduação</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-foreground bg-primary-soft/40 p-3 rounded-xl border border-primary/20">
                <Award className="w-4 h-4 text-primary shrink-0" />
                <span>Capacitada em Pé Diabético</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-6 rounded-md shadow-soft hover:scale-105 transition-smooth w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/5511947578967?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dayane."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Agendar com Dayane</span>
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold py-6 rounded-md transition-smooth"
                asChild
              >
                <Link to="/sobre-dayane">
                  Ver Perfil Completo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDayaneSection;

