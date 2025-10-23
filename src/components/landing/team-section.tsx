
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";
import { Leaf, TrendingUp, HeartHandshake, Users } from "lucide-react";

const commitments = [
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: "Impulsamos la Economía Local",
    description: "Cada proyecto que realizamos es un paso más para fortalecer el ecosistema de PYMEs en Paraguay."
  },
  {
    icon: <Leaf className="h-6 w-6 text-green-500" />,
    title: "Compromiso Verde",
    description: "Nuestra operación es 100% digital, minimizando nuestra huella de carbono y promoviendo prácticas sostenibles."
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-accent" />,
    title: "Tecnología con Propósito",
    description: "Creemos en un futuro donde la tecnología es una herramienta de crecimiento e inclusión para todos."
  }
];

export default function TeamSection() {
  return (
    <section id="equipo" className="w-full py-20 md:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Nuestro Compromiso y Equipo</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Más que una agencia, somos un equipo de profesionales apasionados por la tecnología y el éxito de nuestros clientes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {commitments.map((item) => (
            <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-4 mb-2">
                    {item.icon}
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
            <Card className="w-full max-w-4xl shadow-lg bg-background">
                <CardHeader className="text-center">
                    <div className="mx-auto rounded-full bg-primary/10 p-4 w-fit mb-2">
                        <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">El Equipo Detrás de TecnologIA</CardTitle>
                    <CardContent className="pt-4">
                        <p className="text-muted-foreground">Un colectivo de talento, dedicación y visión.</p>
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 text-left">
                            {teamMembers.map(name => (
                                <p key={name} className="text-muted-foreground text-sm">{name}</p>
                            ))}
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
        </div>

      </div>
    </section>
  );
}
