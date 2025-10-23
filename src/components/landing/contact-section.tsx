
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./contact-form";

export default function ContactSection() {
  const contactDetails = [
    { icon: <Phone className="h-5 w-5 text-primary" />, text: "+595 9XX XXX XXX (placeholder)" },
    { icon: <Mail className="h-5 w-5 text-primary" />, text: "contacto@tecnologia.com.py (placeholder)" },
    { icon: <MapPin className="h-5 w-5 text-primary" />, text: "Asunción, Paraguay (Operación 100% digital)" },
  ];

  return (
    <section id="contacto" className="w-full bg-background text-foreground py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">Contacto</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    ¿Listo para empezar? Envíanos un mensaje y hablemos.
                </p>
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-foreground">Información de Contacto</h3>
            <p className="text-muted-foreground max-w-md">
              Puedes contactarnos a través de los siguientes medios o llenando el formulario. Uno de nuestros expertos se pondrá en contacto contigo para discutir cómo podemos ayudarte a alcanzar tus metas.
            </p>
            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-3">
                  {detail.icon}
                  <span className="text-muted-foreground">{detail.text}</span>
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
