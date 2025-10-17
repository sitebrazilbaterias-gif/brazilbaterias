import { Shield, CheckCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMoura from "@/assets/logo-moura.png";

const MouraPartnershipSection = () => {
  const whatsappNumber = "5562993226741";

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
              <Award className="h-6 w-6 text-primary" />
              <span className="text-primary font-bold text-lg">Parceria Oficial</span>
            </div>
            <div className="flex justify-center mb-8">
              <img src={logoMoura} alt="Logo Moura" className="h-32 md:h-48 w-auto object-contain" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Somos Revendedora Oficial <span className="text-primary">MOURA</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As baterias mais vendidas do Brasil. Produtos originais com qualidade garantida e suporte completo da marca líder do mercado automotivo brasileiro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Qualidade Garantida</h3>
              <p className="text-muted-foreground">
                Produtos originais de fábrica com garantia de até 24 meses e suporte oficial Moura.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Linha Completa</h3>
              <p className="text-muted-foreground">
                Trabalhamos com todas as linhas Moura: automotivas, com estoque sempre disponível.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Moura Fácil</h3>
              <p className="text-muted-foreground">
                Conte com entrega rápida e assistência completa em parceria com o programa Moura Fácil.
              </p>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground p-10 rounded-2xl shadow-2xl text-center animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              A confiança de uma marca com mais de 60 anos de tradição
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-3xl mx-auto">
              Somos revendedor oficial de Baterias Moura, garantindo produtos originais, garantia de fábrica e o melhor suporte técnico para o seu veículo.
            </p>
            <a href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre as Baterias Moura.`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 h-14">
                💬 Consulte Baterias Moura Agora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MouraPartnershipSection;
