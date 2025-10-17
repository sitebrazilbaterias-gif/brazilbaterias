import { Zap, Award, Clock, CreditCard, Wrench, MapPin } from "lucide-react";
import technicianImage from "@/assets/tecnico-instalacao.webp";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instalação Imediata no Local",
      description: "Nossos técnicos instalam sua bateria no local, sem complicação.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Marcas Premium",
      description: "Heliar, Moura, Cargo, Kondor e KF - as melhores do mercado.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Atendimento Rápido",
      description: "Resolvemos seu problema em minutos, sem você ficar parado.",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Pagamento Facilitado",
      description: "Aceitamos todas as formas de pagamento para sua comodidade.",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Testes Elétricos Gratuitos",
      description: "Diagnóstico completo do sistema elétrico sem custos.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Localização Estratégica",
      description: "Fácil acesso em Goiânia para atender você rapidamente.",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que escolher a Brazil Baterias?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos especialistas em baterias automotivas com anos de experiência e compromisso com a excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-4">
            <img
              src={technicianImage}
              alt="Técnico da Brazil Baterias instalando bateria"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-3xl font-bold mb-4">Profissionais Qualificados</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Nossa equipe é treinada e certificada para oferecer o melhor atendimento. Cada instalação é feita com
              cuidado e precisão, garantindo a segurança e durabilidade do seu sistema elétrico.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Experiência Comprovada</h4>
                  <p className="text-muted-foreground">Anos de experiência no mercado automotivo de Goiânia.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Atendimento Humanizado</h4>
                  <p className="text-muted-foreground">Tratamos cada cliente com respeito e atenção.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Garantia de Qualidade</h4>
                  <p className="text-muted-foreground">Todas as baterias com garantia do fabricante.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
