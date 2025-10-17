import interiorKF from "@/assets/interior-baterias-kf.webp";
import interiorKondor from "@/assets/interior-baterias-kondor.webp";

const BrandsSection = () => {
  const brands = [
    { name: "Heliar", warranty: "24 meses" },
    { name: "Moura", warranty: "24 meses" },
    { name: "Cargo", warranty: "18 meses" },
    { name: "Kondor", warranty: "12 meses" },
    { name: "KF", warranty: "12 meses" },
  ];

  return (
    <section id="marcas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Marcas de Confiança</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos apenas com as melhores marcas do mercado automotivo brasileiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden shadow-xl animate-in fade-in slide-in-from-left-4">
            <img src={interiorKF} alt="Baterias KF em estoque" className="w-full h-80 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl animate-in fade-in slide-in-from-right-4">
            <img src={interiorKondor} alt="Baterias Kondor e outras marcas em estoque" className="w-full h-80 object-cover" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-2 text-primary">{brand.name}</h3>
              <p className="text-sm text-muted-foreground">Garantia de</p>
              <p className="text-lg font-semibold">{brand.warranty}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center animate-in fade-in slide-in-from-bottom-4">
          <h3 className="text-2xl font-bold mb-4">Estoque Sempre Atualizado</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mantemos um estoque amplo e diversificado para atender todas as marcas e modelos de veículos. Se não
            tivermos em estoque, conseguimos rapidamente!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
