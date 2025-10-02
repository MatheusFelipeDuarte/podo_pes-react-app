import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  MessageCircle, 
  MapPin, 
  Phone,
  BookOpen,
  Target,
  Eye,
  Heart
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-accent-soft text-accent">
              <Heart className="w-4 h-4 mr-2" />
              Nossos Pilares
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Missão, Visão e
              <span className="text-primary"> Valores</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-soft border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecer excelência em podologia, com foco em cuidado humanizado e soluções especializadas, 
                  promovendo a saúde e o bem-estar dos pés de nossos pacientes, especialmente aqueles com 
                  condições crônicas como o pé diabético.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-soft border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser a clínica de podologia de referência na região, com saúde ao alcance de todos, 
                  reconhecida pela capacitação em pé diabético, pela qualidade técnica e pelo atendimento 
                  acolhedor, contribuindo para uma melhor qualidade de vida dos nossos pacientes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-soft border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Valores</h3>
                <div className="text-left space-y-2">
                  <p className="text-sm text-muted-foreground">• Cuidado Humanizado</p>
                  <p className="text-sm text-muted-foreground">• Excelência Técnica</p>
                  <p className="text-sm text-muted-foreground">• Ética Profissional</p>
                  <p className="text-sm text-muted-foreground">• Educação em Saúde</p>
                  <p className="text-sm text-muted-foreground">• Inovação Constante</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/** Blog Preview (temporariamente desativado)
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog da Saúde
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Artigos sobre
              <span className="text-primary"> Saúde dos Pés</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dicas, cuidados e informações importantes para manter seus pés sempre saudáveis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            ...
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                Ver Todos os Artigos
              </Link>
            </Button>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Pronto para Cuidar da Saúde dos Seus Pés?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Agende sua consulta com Dayane Camarinha e experimente o cuidado especializado 
              que seus pés merecem. Atendimento humanizado e tecnologia avançada.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
              <Button variant="secondary" size="lg" className="w-full bg-white text-primary hover:bg-white/90" asChild>
                <a href="https://wa.me/5511947578967" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 94757-8967</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Mogi das Cruzes, SP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;