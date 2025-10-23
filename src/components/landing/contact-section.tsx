
import { BotMessageSquare, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./contact-form";

export default function ContactSection() {
  const contactDetails = [
    { icon: <Phone className="h-5 w-5 text-accent" />, text: "+595 9XX XXX XXX (placeholder)" },
    { icon: <Mail className="h-5 w-5 text-accent" />, text: "contacto@tecnologia.com.py (placeholder)" },
    { icon: <MapPin className="h-5 w-5 text-accent" />, text: "Asunción, Paraguay (Operación 100% digital)" },
  ];

  return (
    <section id="contacto" className="w-full bg-slate-900 text-slate-300 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-white">Contacto</h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    ¿Listo para empezar? Envíanos un mensaje y hablemos.
                </p>
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-primary-foreground/70 max-w-md">
              Envíanos un mensaje y uno de nuestros expertos se pondrá en contacto contigo para discutir cómo podemos ayudarte a alcanzar tus metas.
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
      </div>
    </section>
  );
}
