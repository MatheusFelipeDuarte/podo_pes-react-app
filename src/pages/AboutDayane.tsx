import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Heart, 
  Target,
  Users,
  BookOpen,
  Briefcase
} from "lucide-react";
import dayanePortrait2 from "@/assets/dayane-portrait-2.jpg";

const AboutDayane = () => {
  const formacoes = [
    "Pós-graduada em Podologia - Facuminas",
    "Pós-graduação em Enfermagem em Dermatologia e Tratamento de Feridas",
    "Pós-graduação em Diabetes e Complicações Crônicas",
    "Graduação em Tecnologia em Podologia - Unicesumar",
    "Técnico em Nutrição e Dietética - Faculdade e Colégio Paschoal Dantas"
  ];

  const cursosExtracurriculares = [
    "Curso de Alta Frequência",
    "Curso de Ozonioterapia",
    "Curso de Micologia",
    "Curso de Podologia Continuada",
    "Curso de Podogeriatria",
    "Curso de Eletrocautério para Verruga",
    "Órteses Ungueais"
  ];

  const areasAtuacao = [
    "Podologia",
    "Pé Diabético",
    "Podogeriatria",
    "Micologia",
    "Feridas",
    "Podopediatria",
    "Tratamento de Infecções"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-primary-soft text-primary">
                <Heart className="w-4 h-4 mr-2" />
                Sobre a Profissional
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Dayane de Campos Brito
                <span className="text-primary"> Camarinha</span>
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-strong">
                  <img 
                    src={dayanePortrait2}
                    alt="Dayane Camarinha - Podóloga especialista"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <Card className="mt-6 bg-white shadow-medium border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Clínica Espaço Pés</p>
                        <p className="text-sm text-muted-foreground">Empresária, Proprietária, Nutricionista e Podóloga</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Rua Doutor Ricardo Vilela, 1400 - Sala 5<br />
                      Mogi das Cruzes, SP<br />
                      (Ao lado do Haha House Comedy)
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-white shadow-soft border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Apresentação
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Olá, me chamo Dayane, sou podóloga e recentemente abri uma clínica. Sou formada pela universidade 
                      Unicesumar e pós-graduada em podologia pela universidade Facuminas, com ênfase em pé diabético.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Possuo diversos cursos extracurriculares e atualmente estou fazendo uma pós-graduação em Diabetes 
                      e Complicações Crônicas e Enfermagem em Dermatologia e Tratamento de Feridas. Também sou técnica 
                      em Nutrição e Dietética pela faculdade e colégio Paschoal Dantas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-soft shadow-soft border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Especialização Destacada</h4>
                        <p className="text-muted-foreground">
                          Capacitada em Pé Diabético pela Universidade Facuminas, oferecendo tratamento 
                          especializado e humanizado para pacientes com diabetes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formação Acadêmica */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Formação
                <span className="text-primary"> Acadêmica</span>
              </h2>
            </div>

            <Card className="bg-gradient-soft shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Títulos e Graduações</h3>
                </div>
                <div className="space-y-4">
                  {formacoes.map((formacao, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-foreground">{formacao}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-soft border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Formação Complementar</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {cursosExtracurriculares.map((curso, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-accent-soft rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-foreground text-sm">{curso}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-16 lg:py-24 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Áreas de
                <span className="text-primary"> Atuação</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {areasAtuacao.map((area, index) => (
                <Card key={index} className="bg-white shadow-soft hover:shadow-medium transition-smooth border-0 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{area}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white shadow-soft border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Atividades Profissionais</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Atendimento especializado em podologia clínica e estética, com foco em podologia para diabéticos, 
                  geriatria e tratamento de feridas, tratamento de infecção e micose. Utilização de técnicas avançadas 
                  como laserterapia.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Na Clínica Espaço Pés, oferecemos atendimento qualificado em podologia, combinando expertise 
                  profissional com equipamentos modernos e cuidado humanizado para cada paciente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Missão e Quem Somos */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-hero text-white shadow-strong border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Missão</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    Nossa missão é oferecer o melhor atendimento para nossos pacientes com tratamento qualificados, 
                    específicos e humanizado para trazer conforto e bem-estar a cada paciente.
                  </p>
                  <p className="text-white/90 leading-relaxed mt-4">
                    Trazer ensino de qualidade para alunos universitários, técnicos e capacitação profissional para 
                    profissionais que necessitam de aperfeiçoamento, tudo com a maior responsabilidade, segurança, 
                    tecnologia e ética profissional.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-soft shadow-soft border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Quem Somos</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Nós somos uma clínica de Podologia, Especialização e Saúde. Com foco em atendimento e ensino 
                    qualificado para os pés. Com profissionais especializados e capacitados para desenvolver tratamentos 
                    específicos e qualificados na podologia clínica.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    A saúde dos pés é fundamental para o bem-estar geral, e muitas vezes não damos a atenção necessária 
                    a essa parte do corpo. No Espaço Pés, você encontra profissionais especializados em podologia, prontos 
                    para cuidar dos seus pés com carinho e expertise.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-white shadow-soft border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Agende sua Consulta
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Agendar uma consulta pode prevenir problemas futuros, como calosidades, unhas encravadas e infecções. 
                  Além disso, é uma ótima oportunidade para relaxar e dar aos seus pés o cuidado que eles merecem.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="https://wa.me/5511947578967" target="_blank" rel="noopener noreferrer">
                    Entre em Contato
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutDayane;
