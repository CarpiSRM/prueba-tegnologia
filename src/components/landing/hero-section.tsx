
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SeoTool from "@/components/ai/seo-tool";

export default function HeroSection() {
  return (
    <section id="inicio" className="w-full py-20 md:py-32 bg-background scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                Tecnolog<span className="text-accent">IA</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
                Llevamos tu negocio al siguiente nivel digital.
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Tu socio digital en Paraguay. Cerramos la brecha digital para PYMEs con soluciones web y de marketing profesionales, accesibles y efectivas.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-transform hover:scale-105">
                <Link href="#servicios">Conoce nuestros servicios</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary/10 shadow-lg transition-transform hover:scale-105">
                <Link href="#portafolio">Ver portafolio</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
             <SeoTool />
          </div>
        </div>
      </div>
    </section>
  );
}
