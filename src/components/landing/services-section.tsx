
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Star } from "lucide-react";
import { webDevPackages, adsPackages, maintenancePackage } from "@/lib/data";
import Link from "next/link";

const PackageCard = ({ pkg, popular, children }: { pkg: any, popular?: boolean, children?: React.ReactNode }) => (
  <Card className={`flex flex-col ${popular ? 'border-accent border-2 shadow-accent/20' : ''}`}>
    <CardHeader>
      {popular && <div className="text-accent font-bold flex items-center gap-1"><Star className="w-4 h-4 fill-accent" /> Popular</div>}
      <CardTitle>{pkg.name}</CardTitle>
      <CardDescription className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
        {pkg.duration && <span className="text-muted-foreground">{pkg.duration}</span>}
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-2">
        {pkg.features.map((feature: string) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      {children}
    </CardContent>
    <CardFooter>
      <Button asChild className={`w-full ${popular ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}>
        <Link href="/contacto">{pkg.cta}</Link>
      </Button>
    </CardFooter>
  </Card>
);

export default function ServicesSection() {
  return (
    <section id="servicios" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Nuestros Servicios</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Soluciones a medida para que tu negocio destaque en el mundo digital. Elige el plan que mejor se adapte a tus necesidades.
            </p>
          </div>
        </div>

        <Tabs defaultValue="desarrollo" className="mt-12 w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="desarrollo">Desarrollo Web</TabsTrigger>
            <TabsTrigger value="publicidad">Publicidad Digital</TabsTrigger>
          </TabsList>
          
          <TabsContent value="desarrollo" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {webDevPackages.map(pkg => <PackageCard key={pkg.name} pkg={pkg} popular={pkg.popular} />)}
            </div>
             <div className="mt-8 flex justify-center">
                <Card className="w-full max-w-lg border-dashed">
                    <CardHeader>
                        <CardTitle className="text-lg">Opcional: Mantenimiento Web</CardTitle>
                        <CardDescription>
                           <span className="text-2xl font-bold text-foreground">{maintenancePackage.price}</span> - Asegura que tu sitio esté siempre actualizado y seguro.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm">
                            {maintenancePackage.features.map((feature: string) => (
                                <li key={feature} className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                         <Button asChild variant="outline" className="w-full">
                            <Link href="/contacto">{maintenancePackage.cta}</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
          </TabsContent>

          <TabsContent value="publicidad" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {adsPackages.map(pkg => <PackageCard key={pkg.name} pkg={pkg} popular={pkg.popular} />)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
