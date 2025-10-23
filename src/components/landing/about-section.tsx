
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Rocket, Eye } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="quienes-somos" className="w-full py-20 md:py-32 bg-white scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Quiénes Somos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nacimos para cerrar la brecha digital que la pandemia evidenció en las PYMEs de Paraguay, ofreciendo soluciones accesibles para conectar negocios tradicionales con el mundo digital de forma simple y asequible.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 md:gap-12 lg:max-w-none mt-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Empoderar a pequeñas empresas con desarrollo web accesible, diseños modernos y calidad profesional garantizada.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary scale-105 bg-background">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Propósito Principal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Conectar negocios tradicionales con el mundo digital de forma simple y asequible, democratizando el acceso tecnológico para potenciar el crecimiento local.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ser la empresa líder en Paraguay en la transformación digital de PYMEs, siendo un referente de innovación, calidad y confianza.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
