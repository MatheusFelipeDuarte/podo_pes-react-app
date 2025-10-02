import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-espacopes.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-soft border-b border-primary/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>(11) 94757-8967</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Mogi das Cruzes, SP</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>Seg-Sex: 8h-18h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Espaço Pés Logo" className="h-20 md:h-24 w-auto" />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-smooth">
                Início
              </Link>
              <Link to="/servicos" className="text-foreground hover:text-primary transition-smooth">
                Serviços
              </Link>
              <Link to="/sobre-dayane" className="text-foreground hover:text-primary transition-smooth">
                Sobre Dayane
              </Link>
              <Link to="/blog" className="text-foreground hover:text-primary transition-smooth">
                Blog
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="appointment" 
                size="lg"
                asChild
              >
                <a href="https://wa.me/5511947578967" target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/servicos" 
                className="block text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/sobre-dayane" 
                className="block text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Dayane
              </Link>
              <Link 
                to="/blog" 
                className="block text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Button variant="appointment" className="w-full mt-4" asChild>
                <a href="https://wa.me/5511947578967" target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;