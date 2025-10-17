import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carModel: "",
    neighborhood: "",
    message: "",
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Validação
  if (!formData.name || !formData.phone) {
    toast({
      title: "Campos obrigatórios",
      description: "Por favor, preencha nome e telefone.",
      variant: "destructive",
    });
    return;
  }

  // Número da loja com DDI (55 = Brasil)
  const phoneNumber = "5562993226741";

  // Monta a mensagem personalizada
  const message = `Olá! 👋 Vim pelo site da *Brazil Baterias* e gostaria de solicitar atendimento.

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Modelo:* ${formData.carModel || "Não informado"}
*Bairro:* ${formData.neighborhood || "Não informado"}
*Mensagem:* ${formData.message || "Nenhuma mensagem adicional"}`;

  // Cria o link do WhatsApp com o texto codificado
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Exibe toast de confirmação
  toast({
    title: "Solicitação enviada!",
    description: "Redirecionando para o WhatsApp...",
  });

  // Abre o WhatsApp com a conversa preenchida
  window.open(whatsappURL, "_blank");

  // Resetar o formulário
  setFormData({
    name: "",
    phone: "",
    carModel: "",
    neighborhood: "",
    message: "",
  });
};




  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Solicite sua bateria agora!</h2>
            <p className="text-lg text-muted-foreground">
              Peça agora e receba sua bateria em minutos! Preencha o formulário abaixo.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome completo *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(62) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="carModel" className="block text-sm font-medium mb-2">
                    Modelo do carro
                  </label>
                  <Input
                    id="carModel"
                    type="text"
                    placeholder="Ex: Fiat Palio 2015"
                    value={formData.carModel}
                    onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="neighborhood" className="block text-sm font-medium mb-2">
                    Bairro
                  </label>
                  <Input
                    id="neighborhood"
                    type="text"
                    placeholder="Seu bairro em Goiânia"
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem adicional
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Alguma informação adicional?"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg font-semibold">
                  💬 Solicitar atendimento imediato
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  * Campos obrigatórios. Ao enviar, você será redirecionado para o WhatsApp.
                </p>
              </div>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Ou entre em contato direto:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:62993226741">
                <Button variant="outline" size="lg" className="gap-2">
                  📞 (62) 99322-6741
                </Button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=5562993226741&text=Ol%C3%A1%20%F0%9F%91%8B%21%20Vim%20pelo%20site%20da%20Brazil%20Baterias%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20baterias%20dispon%C3%ADveis.%20%E2%9A%A1%20Pode%20me%20ajudar%2C%20por%20favor%3F" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  💬 WhatsApp Direto
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
