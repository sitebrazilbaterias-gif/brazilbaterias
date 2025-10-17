import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "Setor Bueno, Goiânia",
      rating: 5,
      text: "Atendimento excepcional! Bateria do meu carro pifou e em menos de 30 minutos já estava com bateria nova instalada. Recomendo!",
    },
    {
      name: "Maria Santos",
      location: "Setor Oeste, Goiânia",
      rating: 5,
      text: "Preço justo e atendimento rápido. O técnico foi muito atencioso e explicou tudo sobre a bateria. Muito satisfeita!",
    },
    {
      name: "João Oliveira",
      location: "Jardim Goiás, Goiânia",
      rating: 5,
      text: "Melhor lugar para comprar bateria em Goiânia! Produtos de qualidade e equipe profissional. Já indiquei para vários amigos.",
    },
    {
      name: "Ana Paula",
      location: "Setor Marista, Goiânia",
      rating: 5,
      text: "Adorei o atendimento! Fui muito bem tratada e o serviço foi feito com muita agilidade. Com certeza voltarei quando precisar.",
    },
    {
      name: "Roberto Costa",
      location: "Centro, Goiânia",
      rating: 5,
      text: "Excelente custo-benefício! A bateria veio com garantia e o pessoal é muito honesto. Confiança total na Brazil Baterias.",
    },
    {
      name: "Patrícia Lima",
      location: "Setor Aeroporto, Goiânia",
      rating: 5,
      text: "Atendimento nota 10! Precisava urgente e eles me atenderam super rápido. Instalaram no mesmo dia. Muito obrigada!",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Veja o que nossos clientes dizem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Centenas de clientes satisfeitos em Goiânia e região confiam na Brazil Baterias.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-xl font-semibold">5.0 estrelas</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">&quot;{testimonial.text}&quot;</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
