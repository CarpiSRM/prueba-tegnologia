import Link from "next/link";
import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-accent text-accent-foreground py-8">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Cpu className="h-8 w-8 text-white" />
          <div>
            <h2 className="text-xl font-bold text-background font-headline">Tecnolog<span className="text-white">IA</span></h2>
            <p className="text-accent-foreground/80 text-sm">Llevamos tu negocio al siguiente nivel digital.</p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm text-accent-foreground/70">&copy; {new Date().getFullYear()} TecnologIA. Todos los derechos reservados.</p>
          <Link href="/contacto" className="text-sm text-white hover:underline">
            Ponerse en contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
