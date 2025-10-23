
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioItems } from "@/lib/data";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="w-full py-20 md:py-32 bg-background scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Portafolio de Proyectos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estos son algunos ejemplos de cómo hemos ayudado a negocios como el tuyo a tener éxito en línea.
              <br />
              <span className="text-sm">(Esta sección está diseñada para que puedas actualizarla fácilmente con tus nuevos proyectos.)</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {portfolioItems.map((item) => (
            <Card key={item.title} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2">
              {item.image && (
                <div className="aspect-video w-full overflow-hidden">
                    <Image
                    src={item.image.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={item.image.imageHint}
                    />
                </div>
              )}
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">Ver Sitio</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
