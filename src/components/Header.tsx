import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-espacopes.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className="bg-gradient-soft border-b border-primary/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-muted-foreground gap-2">
            <a
              href="https://wa.me/5511947578967"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-smooth cursor-pointer"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground hover:text-primary transition-smooth">(11) 94757-8967</span>
            </a>
            <a
              href="https://maps.google.com/?q=Rua+Senador+Dantas,+484+-+Centro,+Mogi+das+Cruzes+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 hover:text-primary transition-smooth cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Rua Senador Dantas, 484 (Sala 6) - Casarão Maestro Berti, Mogi das Cruzes</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>Seg à Sex: 8h às 18h</span>
              <span>Sabado: 9h às 17h</span>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-soft sticky top-0 z-40 transition-slow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link to="/" className="flex items-center space-x-3 transition-smooth hover:opacity-90">
              <img src={logo} alt="Espaço Pés Podologia" className="h-16 md:h-20 w-auto object-contain" />
            </Link>

            <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold">
              <Link to="/" className="text-foreground hover:text-primary transition-smooth">
                Início
              </Link>
              <a href={isHomePage ? "#problemas" : "/#problemas"} className="text-foreground hover:text-primary transition-smooth">
                Problemas
              </a>
              <a href={isHomePage ? "#servicos" : "/#servicos"} className="text-foreground hover:text-primary transition-smooth">
                Serviços
              </a>
              <a href={isHomePage ? "#sobre-dayane" : "/sobre-dayane"} className="text-foreground hover:text-primary transition-smooth">
                Sobre Dayane
              </a>
              <a href={isHomePage ? "#resultados" : "/#resultados"} className="text-foreground hover:text-primary transition-smooth">
                Resultados
              </a>
              <a href={isHomePage ? "#depoimentos" : "/#depoimentos"} className="text-foreground hover:text-primary transition-smooth">
                Depoimentos
              </a>
              <a href={isHomePage ? "#faq" : "/#faq"} className="text-foreground hover:text-primary transition-smooth">
                FAQ
              </a>
              <a href={isHomePage ? "#contato" : "/#contato"} className="text-foreground hover:text-primary transition-smooth">
                Contato
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold shadow-soft transition-smooth"
                asChild
              >
                <a
                  href="https://wa.me/5511947578967?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20atendimento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Agendar Consulta</span>
                </a>
              </Button>
            </div>

            <button
              className="lg:hidden p-2 transition-smooth hover:bg-muted rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-medium">
            <nav className="container mx-auto px-4 py-4 space-y-3 font-medium">
              <Link
                to="/"
                className="block text-foreground hover:text-primary transition-smooth py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <a
                href={isHomePage ? "#problemas" : "/#problemas"}
                className="block text-foreground hover:text-primary transition-smooth py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Problemas Comuns
              </a>
              <a
                href={isHomePage ? "#servicos" : "/#servicos"}
                className="block text-foreground hover:text-primary transition-smooth py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href={isHomePage ? "#sobre-dayane" : "/sobre-dayane"}
                className="block text-foreground hover:text-primary transition-smooth py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Dayane
              </a>
              <a
                href={isHomePage ? "#resultados" : "/#resultados"}
                className="block text-foreground hover:text-primary transition-smooth py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Resultados
              </a>
              <a
                href={isHomePage ? "#depoimentos" : "/#depoimentos"}
                className="block text-foreground hover:text-primary transition-smooth py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a
                href={isHomePage ? "#faq" : "/#faq"}
                className="block text-foreground hover:text-primary transition-smooth py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href={isHomePage ? "#contato" : "/#contato"}
                className="block text-foreground hover:text-primary transition-smooth py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato & Localização
              </a>
              <div className="pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5" asChild>
                  <a href="https://wa.me/5511947578967" target="_blank" rel="noopener noreferrer">
                    Agendar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;