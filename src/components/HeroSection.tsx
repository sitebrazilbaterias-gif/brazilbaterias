import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-fachada.jpg";

const HeroSection = () => {
  const whatsappNumber = "5562993226741";
  const phoneNumber = "62993226741";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Brazil Baterias - Fachada da Loja" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Sua bateria nova entregue e instalada em minutos!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Atendimento rápido, marcas líderes e garantia de até 24 meses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="https://api.whatsapp.com/send?phone=5562993226741&text=Ol%C3%A1%20%F0%9F%91%8B%21%20Vim%20pelo%20site%20da%20Brazil%20Baterias%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20baterias%20dispon%C3%ADveis.%20%E2%9A%A1%20Pode%20me%20ajudar%2C%20por%20favor%3F" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button size="lg" className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                💬 Fale Conosco via WhatsApp e Receba em Minutos
              </Button>
            </a>
            <a href={`tel:${phoneNumber}`} className="flex-1">
              <Button size="lg" variant="outline" className="w-full h-14 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white shadow-lg">
                <Phone className="h-5 w-5 mr-2" />
                (62) 99322-6741
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm md:text-base">Instalação Imediata</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm md:text-base">Marcas Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm md:text-base">Garantia Estendida</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
