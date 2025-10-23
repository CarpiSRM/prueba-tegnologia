import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Navbar from '@/components/landing/navbar';
import FloatingSocials from '@/components/landing/floating-socials';

export const metadata: Metadata = {
  title: 'TecnologIA - Llevamos tu negocio al siguiente nivel digital',
  description: 'Agencia de desarrollo web y publicidad digital para PYMEs en Paraguay. Soluciones profesionales, accesibles y efectivas para potenciar tu crecimiento.',
  keywords: 'desarrollo web paraguay, publicidad digital paraguay, google ads, seo, pymes, emprendedores, marketing digital',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <div className="relative flex min-h-screen w-full flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <FloatingSocials />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
