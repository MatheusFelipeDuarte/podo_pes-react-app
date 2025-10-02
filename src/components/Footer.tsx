import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand and mission */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Espaço Pés</h3>
              <p className="text-sm text-white/70">Podologia, Especialização e Saúde</p>
            </div>
            <p className="text-white/80 leading-relaxed">
              Cuidado especializado para seus pés com Dayane Camarinha, nutricionista e podóloga 
              certificada em pé diabético pela Universidade Facuminas.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/10"
                asChild
              >
                <a href="https://www.instagram.com/espacopes.podologia" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-white/80">(11) 94757-8967</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-white/80">espaco.pes2025@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <div className="text-white/80">
                  <p>Rua Doutor Ricardo Vilela, 1400 - Sala 5</p>
                  <p className="text-sm">Mogi das Cruzes, SP</p>
                  <p className="text-sm">(Ao lado do Haha House Comedy)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <div className="text-white/80">
                  <p>Seg-Sex: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white transition-smooth">
                Início
              </Link>
              <Link to="/servicos" className="block text-white/80 hover:text-white transition-smooth">
                Serviços
              </Link>
              <Link to="/sobre-dayane" className="block text-white/80 hover:text-white transition-smooth">
                Sobre Dayane
              </Link>
              <Link to="/blog" className="block text-white/80 hover:text-white transition-smooth">
                Blog
              </Link>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Values section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
            <h5 className="font-semibold mb-1">Cuidado Humanizado</h5>
            <p className="text-sm text-white/70">Cada paciente é único e merece atenção personalizada</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <Heart className="w-8 h-8 text-secondary mx-auto mb-2" />
            <h5 className="font-semibold mb-1">Excelência Técnica</h5>
            <p className="text-sm text-white/70">Tecnologias avançadas e técnicas especializadas</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
            <h5 className="font-semibold mb-1">Ética Profissional</h5>
            <p className="text-sm text-white/70">Transparência e responsabilidade em cada atendimento</p>
          </div>
        </div>

        <Separator className="bg-white/20 mb-6" />

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p>© 2024 Espaço Pés - Podologia, Especialização e Saúde. Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvido com ❤️ para cuidar da saúde dos seus pés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;