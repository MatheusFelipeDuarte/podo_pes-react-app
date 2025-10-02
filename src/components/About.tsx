import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Heart, Stethoscope } from "lucide-react";
import dayanePortrait2 from "@/assets/dayane-portrait-2.jpg";

const About = () => {
  const qualifications = [
    "Podóloga formada em 2022",
    "Especialização em Pé Diabético - Universidade Facuminas",
    "Formação em Nutrição",
    "Capacitação em Laserterapia",
    "Especialização em Alta Frequência",
    "Curso de Eletrocautério",
    "Formação em Órteses Ungueais",
    "Certificação em Reflexologia",
    "Especialização em Podopediatria",
    "Capacitação em Podogeriatria",
    "Curso de Micologia Avançada"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={dayanePortrait2}
                alt="Dayane Camarinha - Podóloga especialista em pé diabético, nutricionista"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating qualification card */}
            <Card className="absolute -bottom-6 -right-6 bg-white shadow-medium border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Podóloga</p>
                    <p className="text-sm text-muted-foreground">& Nutricionista</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-secondary-soft text-secondary">
                <Heart className="w-4 h-4 mr-2" />
                Cuidado Humanizado
              </Badge>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Conheça 
                <span className="text-primary"> Dayane Camarinha</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Podóloga por formação desde 2022, possuo diversos cursos extracurriculares que me capacitam 
                a oferecer o melhor cuidado para seus pés. Especializada em pé diabético pela Universidade 
                Facuminas, também sou formada em Nutrição, proporcionando um cuidado integrado e completo.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Formações e Especializações
              </h3>
              
              <div className="grid gap-3">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-accent-soft rounded-lg hover:bg-accent/10 transition-smooth">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-soft p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Missão Profissional</h4>
                  <p className="text-muted-foreground">
                    Oferecer excelência em podologia com foco em cuidado humanizado e soluções 
                    especializadas, promovendo a saúde e o bem-estar dos pés, especialmente para 
                    pacientes com condições crônicas como o pé diabético.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="default" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://wa.me/5511947578967" target="_blank" rel="noopener noreferrer">
                Agendar Consulta com Dayane
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;