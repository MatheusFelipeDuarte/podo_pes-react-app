import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Stethoscope, 
  Heart, 
  Baby, 
  Users, 
  Zap, 
  ShieldCheck,
  Microscope,
  HandHeart,
  Link as LinkIcon,
  Scissors,
  TestTube,
  AlertCircle,
  Calendar,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Stethoscope,
      title: "Podoprofilaxia",
      description: "Cuidados preventivos e tratamento completo dos pés, incluindo corte de unhas especializado, remoção de calosidades e cuidados com a pele. Essencial para manutenção da saúde podológica.",
      duration: "1h",
      benefits: [
        "Corte e modelagem de unhas",
        "Remoção de calosidades",
        "Hidratação profunda",
        "Avaliação completa dos pés"
      ]
    },
    {
      icon: Heart,
      title: "Pé Diabético",
      description: "Especialização certificada pela Universidade Facuminas. Cuidados especiais para prevenção e tratamento de complicações em pacientes diabéticos, com protocolo específico e acompanhamento contínuo.",
  duration: "1h",
      price: "Consultar",
      benefits: [
        "Avaliação vascular e neurológica",
        "Protocolo específico para diabéticos",
        "Orientações de autocuidado",
        "Acompanhamento especializado"
      ]
    },
    {
      icon: Baby,
      title: "Podopediatria",
      description: "Cuidados especializados para os pés das crianças, tratando problemas específicos da infância com técnicas adequadas e ambiente acolhedor para os pequenos.",
  duration: "1h",
      price: "A partir de R$ 60",
      benefits: [
        "Técnicas específicas para crianças",
        "Ambiente lúdico e acolhedor",
        "Orientação aos pais",
        "Prevenção de problemas futuros"
      ]
    },
    {
      icon: Users,
      title: "Podogeriatria",
      description: "Atendimento especializado para idosos, focando nas necessidades específicas da terceira idade com cuidado humanizado e atenção às limitações de mobilidade.",
  duration: "1h",
      price: "A partir de R$ 90",
      benefits: [
        "Cuidado adaptado às limitações",
        "Atenção à mobilidade reduzida", 
        "Prevenção de quedas",
        "Conforto e bem-estar"
      ]
    },
    {
      icon: Microscope,
      title: "Tratamento de Onicomicose",
      description: "Diagnóstico preciso e tratamento especializado de micose nas unhas com técnicas avançadas, laserterapia e acompanhamento até a cura completa.",
  duration: "1h",
      price: "A partir de R$ 120",
      benefits: [
        "Diagnóstico preciso",
        "Tratamento com laser",
        "Acompanhamento até a cura",
        "Orientações preventivas"
      ]
    },
    {
      icon: Zap,
      title: "Laserterapia",
      description: "Tecnologia avançada para tratamento de diversos problemas podológicos, proporcionando alívio da dor, estimulação da cicatrização e tratamento de infecções.",
  duration: "1h",
      price: "A partir de R$ 100",
      benefits: [
        "Tecnologia de ponta",
        "Tratamento indolor",
        "Estimula cicatrização",
        "Resultados rápidos"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Scissors,
      title: "Tratamento de Rachaduras e Fissuras Plantares",
      description: "Tratamento especializado para rachaduras e fissuras nos pés, incluindo hidratação profunda e técnicas de cicatrização."
    },
    {
      icon: AlertCircle,
      title: "Verruga Plantar",
      description: "Remoção segura de verrugas plantares com técnicas modernas, incluindo eletrocautério e laserterapia."
    },
    {
      icon: ShieldCheck,
      title: "Tratamento de Infecções",
      description: "Diagnóstico e tratamento de infecções podológicas com alta frequência e protocolos específicos."
    },
    {
      icon: HandHeart,
      title: "Reflexologia",
      description: "Terapia complementar que trabalha pontos reflexos nos pés para promover bem-estar e equilíbrio do organismo."
    },
    {
      icon: Microscope,
      title: "Tratamento de Onicofose",
      description: "Tratamento especializado para calos ungueais (onicofose) com técnicas específicas e orientações preventivas."
    },
    {
      icon: TestTube,
      title: "Pé de Atleta",
      description: "Tratamento completo para micose interdigital (pé de atleta) com antifúngicos e orientações de higiene."
    },
    {
      icon: LinkIcon,
      title: "Ortoniquía",
      description: "Correção de unhas com crescimento inadequado através de técnicas específicas e órteses ungueais."
    },
    {
      icon: TestTube,
      title: "Coleta de Exame Micológico",
      description: "Coleta especializada de material para exame laboratorial com diagnóstico preciso de micoses."
    },
    {
      icon: Zap,
      title: "Eletrocautério",
      description: "Técnica precisa para remoção de lesões com equipamento de alta qualidade e segurança."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Stethoscope className="w-4 h-4 mr-2" />
              Serviços Especializados
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tratamentos Completos para
              <span className="text-primary"> Saúde dos Pés</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Com Dayane Camarinha, você tem acesso aos mais avançados tratamentos podológicos, 
              combinando tecnologia de ponta com cuidado humanizado e expertise comprovada.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
            Principais Especialidades
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-white shadow-soft hover:shadow-medium transition-smooth border-0">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-semibold text-foreground mb-2">
                          {service.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="bg-primary-soft text-primary border-primary/20">
                          {service.duration}
                        </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Separator className="mb-4" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Benefícios inclusos:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            Outros Tratamentos Disponíveis
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Ampla gama de serviços complementares para cuidado completo dos seus pés
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-white shadow-soft hover:shadow-medium transition-smooth border-0 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-smooth">
                        <IconComponent className="w-6 h-6 text-accent group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-smooth">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Pronto para Agendar sua Consulta?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato conosco e agende sua avaliação com Dayane Camarinha. 
              Cuidado especializado que seus pés merecem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="px-8 bg-white text-primary hover:bg-white/90" asChild>
                <a href="https://wa.me/5511947578967" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;