import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram,
  Heart,
  ShieldCheck,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-espacopes.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="bg-white p-2 rounded-xl inline-block max-w-[160px]">
              <img src={logo} alt="Espaço Pés" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Clínica de podologia especializada em saúde dos pés e pé diabético em Mogi das Cruzes. Atendimento particular com cuidado humanizado por Dayane Camarinha.
            </p>
            <div>
              <a 
                href="https://www.instagram.com/espacopes.podologia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-smooth"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@espacopes.podologia</span>
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">Tratamentos</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#servicos" className="hover:text-primary transition-smooth">Podologia Completa</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-smooth">Unhas Encravadas</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-smooth">Desbaste de Calos</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-smooth">Pé Diabético Especializado</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-smooth">Laserterapia Podológica</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-smooth">Tratamento com Órteses</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-smooth">Reflexologia Podal</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-primary transition-smooth">Início</a></li>
              <li><a href="#problemas" className="hover:text-primary transition-smooth">Problemas que Tratamos</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-smooth">Nossos Serviços</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-smooth">Sobre a Especialista</a></li>
              <li><a href="#resultados" className="hover:text-primary transition-smooth">Casos de Sucesso</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-smooth">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-primary transition-smooth">Perguntas Frequentes</a></li>
              <li><a href="#contato" className="hover:text-primary transition-smooth">Localização e Contato</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">Contato & Local</h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>R. Dr. Ricardo Vilela, 1400 - Sala 5 - Centro, Mogi das Cruzes - SP</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="https://wa.me/5511947578967" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  (11) 94757-8967
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>espaco.pes2025@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Seg à Sex: 08:00 às 18:00</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="grid sm:grid-cols-3 gap-4 mb-8 text-center text-xs text-white/70">
          <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Biossegurança e esterilização hospitalar</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5">
            <Award className="w-4 h-4 text-accent" />
            <span>Certificação em Pé Diabético (Facuminas)</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5">
            <Heart className="w-4 h-4 text-pink-400" />
            <span>Atendimento acolhedor e particular</span>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-white/60 text-xs gap-3">
          <p>© {new Date().getFullYear()} Espaço Pés - Dayane Camarinha Podologia. Todos os direitos reservados.</p>
          <p>Mogi das Cruzes - SP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;