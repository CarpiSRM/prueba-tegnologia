
import { BotMessageSquare, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./contact-form";

export default function ContactSection() {
  const contactDetails = [
    { icon: <Phone className="h-5 w-5 text-accent" />, text: "+595 9XX XXX XXX (placeholder)" },
    { icon: <Mail className="h-5 w-5 text-accent" />, text: "contacto@tecnologia.com.py (placeholder)" },
    { icon: <MapPin className="h-5 w-5 text-accent" />, text: "Asunción, Paraguay (Operación 100% digital)" },
  ];

  return (
    <footer id="contacto" className="w-full bg-slate-900 text-slate-300 py-20 md:py-32 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <BotMessageSquare className="h-10 w-10 text-primary" />
              <div>
                <h2 className="text-3xl font-bold text-white font-headline">Tecnolog<span className="text-accent">IA</span></h2>
                <p className="text-primary-foreground/70">Llevamos tu negocio al siguiente nivel digital.</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md">
              ¿Listo para empezar? Envíanos un mensaje y uno de nuestros expertos se pondrá en contacto contigo para discutir cómo podemos ayudarte a alcanzar tus metas.
            </p>
            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-3">
                  {detail.icon}
                  <span className="text-primary-foreground/90">{detail.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
        <div className="border-t border-slate-700 mt-16 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} TecnologIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
