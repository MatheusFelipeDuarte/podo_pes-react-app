import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Heart, 
  Baby, 
  Users, 
  Zap, 
  ShieldCheck,
  Microscope,
  HandHeart,
  Link as LinkIcon
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Podoprofilaxia",
      description: "Cuidados preventivos e tratamento completo dos pés, incluindo corte de unhas, remoção de calosidades e cuidados com a pele.",
      badge: "Essencial",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Pé Diabético",
      description: "Especialização certificada pela Facuminas. Cuidados especiais para prevenção e tratamento de complicações em pacientes diabéticos.",
      badge: "Especialidade",
      color: "accent"
    },
    {
      icon: Baby,
      title: "Podopediatria",
      description: "Cuidados especializados para os pés das crianças, tratando problemas específicos da infância com técnicas adequadas.",
      badge: "Infantil",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Podogeriatria",
      description: "Atendimento especializado para idosos, focando nas necessidades específicas da terceira idade com cuidado humanizado.",
      badge: "Idosos",
      color: "primary"
    },
    {
      icon: Microscope,
      title: "Tratamento de Onicomicose",
      description: "Diagnóstico e tratamento de micose nas unhas com técnicas avançadas e acompanhamento especializado.",
      badge: "Especializado",
      color: "accent"
    },
    {
      icon: Zap,
      title: "Laserterapia",
      description: "Tecnologia avançada para tratamento de diversos problemas podológicos, proporcionando alívio e cicatrização.",
      badge: "Tecnologia",
      color: "secondary"
    },
    {
      icon: ShieldCheck,
      title: "Alta Frequência",
      description: "Técnica terapêutica para tratamento de infecções e estimulação da cicatrização tecidual.",
      badge: "Avançado",
      color: "primary"
    },
    {
      icon: HandHeart,
      title: "Reflexologia",
      description: "Terapia complementar que trabalha pontos reflexos nos pés para promover bem-estar e equilíbrio.",
      badge: "Terapêutico",
      color: "accent"
    },
    {
      icon: LinkIcon,
      title: "Órteses Ungueais",
      description: "Dispositivos especializados para correção de problemas ungueais, incluindo unhas encravadas.",
      badge: "Correção",
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-soft border-primary/20 text-primary';
      case 'secondary':
        return 'bg-secondary-soft border-secondary/20 text-secondary';
      case 'accent':
        return 'bg-accent-soft border-accent/20 text-accent';
      default:
        return 'bg-primary-soft border-primary/20 text-primary';
    }
  };

  return (
    <section id="tratamentos" className="py-16 lg:py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Anchor alias for Podologia Especializada */}
        <span id="podologia-especializada" className="block -mt-24 pt-24" aria-hidden="true"></span>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Stethoscope className="w-4 h-4 mr-2" />
            Serviços Especializados
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tratamentos
            <span className="text-primary"> Especializados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços podológicos com tecnologia avançada 
            e cuidado humanizado para todas as idades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                id={service.title
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/\p{Diacritic}/gu, '')
                  .replace(/\s+/g, '-')
                  .replace(/[^a-z0-9-]/g, '')}
                className="bg-white shadow-soft hover:shadow-medium transition-smooth border-0 group scroll-mt-24"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(service.color)}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className={getColorClasses(service.color)}>
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Outros Tratamentos Disponíveis
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-6">
              <div className="text-muted-foreground">• Tratamento de Rachaduras</div>
              <div className="text-muted-foreground">• Fissuras Plantares</div>
              <div className="text-muted-foreground">• Verruga Plantar</div>
              <div className="text-muted-foreground">• Tratamento de Infecções</div>
              <div className="text-muted-foreground">• Onicofose</div>
              <div className="text-muted-foreground">• Pé de Atleta</div>
              <div className="text-muted-foreground">• Ortoniquía</div>
              <div className="text-muted-foreground">• Exame Micológico</div>
              <div className="text-muted-foreground">• Eletrocautério</div>
            </div>
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/servicos">
                Ver Todos os Serviços
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;