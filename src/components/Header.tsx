import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-brasil-baterias.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const whatsappNumber = "5562993226741";
  const phoneNumber = "62993226741";

  return (
    <header
      className={`relative w-full transition-all duration-300 ${
        isScrolled ? "bg-[#284835]/95 backdrop-blur-md shadow-md text-white" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("inicio")}>
            <img src={logo} alt="Brazil Baterias" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection("marcas")} className="text-foreground hover:text-primary transition-colors font-medium">
              Marcas
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </button>
            <button onClick={() => scrollToSection("localizacao")} className="text-foreground hover:text-primary transition-colors font-medium">
              Localização
            </button>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${phoneNumber}`}>
              <Button variant="outline" size="sm" className="gap-2 text-black border-black hover:bg-gray-100">
                <Phone className="h-4 w-4" />
                (62) 99322-6741
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5562993226741&text=Ol%C3%A1%20%F0%9F%91%8B%21%20Vim%20pelo%20site%20da%20Brazil%20Baterias%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20baterias%20dispon%C3%ADveis.%20%E2%9A%A1%20Pode%20me%20ajudar%2C%20por%20favor%3F" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                💬 WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("inicio")} className="text-left py-2 hover:text-primary transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection("servicos")} className="text-left py-2 hover:text-primary transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection("marcas")} className="text-left py-2 hover:text-primary transition-colors">
                Marcas
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-left py-2 hover:text-primary transition-colors">
                Contato
              </button>
              <button onClick={() => scrollToSection("localizacao")} className="text-left py-2 hover:text-primary transition-colors">
                Localização
              </button>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <a href={`tel:${phoneNumber}`}>
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    (62) 99322-6741
                  </Button>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5562993226741&text=Ol%C3%A1%20%F0%9F%91%8B%21%20Vim%20pelo%20site%20da%20Brazil%20Baterias%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20baterias%20dispon%C3%ADveis.%20%E2%9A%A1%20Pode%20me%20ajudar%2C%20por%20favor%3F" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                    💬 Fale pelo WhatsApp
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
