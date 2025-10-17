import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const LocationSection = () => {
  const address = "Av. César Lattes, 400 - Qd. 100,Lt. 13 - Novo horizonte, Goiânia - GO, 74363-400";
  const googleMapsUrl = "https://maps.app.goo.gl/D1CVkV4nLDNo36qi8";

  return (
    <section id="localizacao" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossa Localização</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos em localização estratégica em Goiânia para melhor atendê-lo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-in fade-in slide-in-from-left-4">
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Telefone / WhatsApp</h3>
                  <a href="tel:62993226741" className="text-muted-foreground hover:text-primary transition-colors block mb-2">
                    📞 (62) 99322-6741
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=5562993226741&text=Ol%C3%A1%20%F0%9F%91%8B%21%20Vim%20pelo%20site%20da%20Brazil%20Baterias%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20baterias%20dispon%C3%ADveis.%20%E2%9A%A1%20Pode%20me%20ajudar%2C%20por%20favor%3F" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    💬 Conversar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Horário de Atendimento</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 13h</p>
                    <p className="text-destructive font-semibold">Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full" size="lg">
                  <MapPin className="h-5 w-5 mr-2" />
                  Ver rota no Google Maps
                </Button>
              </a>
            </div>

            <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-6 animate-in fade-in slide-in-from-left-4">
              <h3 className="font-semibold text-lg mb-2">💡 Dica</h3>
              <p className="text-muted-foreground">
                Estamos no Setor Novo Horizonte, com fácil acesso para toda Goiânia e região metropolitana.
              </p>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-4">
            <div className="rounded-lg overflow-hidden shadow-2xl border border-border h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.234567890123!2d-49.2876543!3d-16.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef123456789ab%3A0x1234567890abcdef!2sAv.%20C%C3%A9sar%20Lattes%2C%20400%20-%20Novo%20horizonte%2C%20Goi%C3%A2nia%20-%20GO%2C%2074363-400!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Brazil Baterias"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
