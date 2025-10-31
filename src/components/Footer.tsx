import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-brasil-baterias.jpg";
// Adicione estas duas linhas para importar os SVGs
import whatsappIcon from "@/assets/whatsapp svg.svg"; 
import instagramIcon from "@/assets/insta svg.svg";

const Footer = () => {
  const whatsappNumber = "5562993226741";
  const instagramUrl = "https://www.instagram.com/brazilbaterias";
  const googleMapsUrl = "https://maps.app.goo.gl/D1CVkV4nLDNo36qi8";

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <img src={logo} alt="Brazil Baterias" className="h-24 w-auto mb-4 " />
            <p className="text-primary-foreground/80 mb-4">
              Energia e confiança para o seu carro, sempre que você precisar.
            </p>
            <div className="flex gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5562993226741&text=Ol%C3%A1%20%F0%9F%91%8B%21%20Vim%20pelo%20site%20da%20Brazil%20Baterias%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20baterias%20dispon%C3%ADveis.%20%E2%9A%A1%20Pode%20me%20ajudar%2C%20por%20favor%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="WhatsApp"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
               
                <img src={instagramIcon} alt="Instagram" className="h-5 w-5" />
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="tel:62993226741" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-5 w-5" />
                <span>(62) 99322-6741</span>
              </a>
              <a href="https://api.whatsapp.com/send?phone=5562993226741&text=Ol%C3%A1%20%F0%9F%91%8B%21%20Vim%20pelo%20site%20da%20Brazil%20Baterias%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20baterias%20dispon%C3%ADveis.%20%E2%9A%A1%20Pode%20me%20ajudar%2C%20por%20favor%3F" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:contato@brazilbaterias.com.br" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="h-5 w-5" />
                <span>brazilbaterias@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 13h (depois, Delivery Exclusivo via WhatsApp)</p>
              <p>Domingo: Fechado (mas com Delivery Exclusivo via WhatsApp)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Brazil Baterias. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Av. César Lattes, 400 - Qd. 100,Lt. 13 - Novo horizonte, Goiânia - GO, 74363-400
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
