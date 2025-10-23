
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, ShieldCheck, Gem } from "lucide-react";

const problems = [
  { title: "Costos Elevados", description: "Agencias con precios inaccesibles para PYMEs." },
  { title: "Soporte Limitado", description: "Freelancers que desaparecen o plataformas sin ayuda personalizada." },
  { title: "Soluciones Genéricas", description: "Plataformas 'hazlo tú mismo' que no se adaptan a tu marca." },
];

const solutions = [
  { 
    icon: <Handshake className="h-8 w-8 text-accent" />,
    title: "Atención Personalizada",
    description: "Trabajamos contigo para entender tu negocio y crear una solución a tu medida."
  },
  { 
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: "Soporte Constante",
    description: "Estamos aquí para ayudarte a crecer, con soporte técnico y estratégico continuo."
  },
  { 
    icon: <Gem className="h-8 w-8 text-accent" />,
    title: "Precios Justos",
    description: "Ofrecemos calidad profesional a precios transparentes y accesibles para emprendedores."
  },
];

export default function WhyUsSection() {
  return (
    <section id="porque-elegirnos" className="w-full py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">La Solución Digital que tu PYME Necesita</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Entendemos los desafíos del mercado y hemos diseñado nuestros servicios para resolverlos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
            <div>
                <h3 className="text-2xl font-semibold mb-4 text-destructive">El Problema Común</h3>
                <div className="space-y-4">
                {problems.map((problem) => (
                    <Card key={problem.title} className="bg-destructive/5 border-destructive/20">
                    <CardHeader>
                        <CardTitle className="text-lg text-destructive">{problem.title}</CardTitle>
                        <CardContent className="p-0 pt-2">
                        <p className="text-muted-foreground">{problem.description}</p>
                        </CardContent>
                    </CardHeader>
                    </Card>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent">Nuestra Solución <span className="text-primary">TecnologIA</span></h3>
                <div className="space-y-4">
                    {solutions.map((solution) => (
                        <div key={solution.title} className="flex items-start gap-4">
                            <div className="bg-accent/10 p-3 rounded-full">{solution.icon}</div>
                            <div>
                                <h4 className="font-bold">{solution.title}</h4>
                                <p className="text-muted-foreground text-sm">{solution.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
