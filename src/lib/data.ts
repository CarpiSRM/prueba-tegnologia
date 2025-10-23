
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/contacto", label: "Contacto" },
];

const getImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(img => img.id === id);

export const webDevPackages = [
  {
    name: "Básico",
    price: "1.200.000 Gs.",
    features: [
      "Sitio web de hasta 3 páginas",
      "Diseño responsivo (móvil/escritorio)",
      "Formulario de contacto",
      "Integración con redes sociales",
    ],
    cta: "Elegir Básico"
  },
  {
    name: "Estándar",
    price: "1.700.000 Gs.",
    features: [
      "Todo en el paquete Básico",
      "Hasta 5 páginas",
      "Blog integrado",
      "Optimización SEO inicial",
    ],
    cta: "Elegir Estándar",
    popular: true,
  },
  {
    name: "Premium",
    price: "2.500.000 Gs.",
    features: [
      "Todo en el paquete Estándar",
      "Integración de e-commerce (hasta 10 productos)",
      "Diseño personalizado avanzado",
      "Soporte prioritario",
    ],
    cta: "Elegir Premium"
  },
];

export const maintenancePackage = {
    name: "Mantenimiento Mensual",
    price: "150.000 Gs./mes",
    features: [
      "Actualizaciones de seguridad",
      "Copias de seguridad mensuales",
      "Soporte técnico básico",
      "Pequeños cambios de contenido",
    ],
    cta: "Añadir Mantenimiento"
};

export const adsPackages = [
  {
    name: "Inicial",
    price: "300.000 Gs.",
    duration: "/ 15 días",
    features: [
      "Configuración de campaña",
      "Investigación de palabras clave",
      "1 grupo de anuncios",
      "Reporte básico de rendimiento",
    ],
    cta: "Empezar Ahora"
  },
  {
    name: "Emprendedor",
    price: "600.000 Gs.",
    duration: "/ 30 días",
    features: [
      "Todo en el paquete Inicial",
      "Hasta 3 grupos de anuncios",
      "Optimización semanal",
      "Reporte detallado",
    ],
    cta: "Crecer mi Negocio",
    popular: true,
  },
  {
    name: "Profesional",
    price: "1.000.000 Gs.",
    duration: "/ 45 días",
    features: [
      "Todo en el paquete Emprendedor",
      "Campañas en Red de Búsqueda y Display",
      "Pruebas A/B de anuncios",
      "Soporte y consultoría estratégica",
    ],
    cta: "Dominar el Mercado"
  },
];


export const portfolioItems = [
  {
    title: "MaferClean",
    description: "Sitio web para servicios profesionales de limpieza.",
    image: getImage('portfolio-1'),
    link: "https://maferclean.netlify.app/"
  },
  {
    title: "Estilo Guarani",
    description: "Tienda online de moda con inspiración local.",
    image: getImage('portfolio-2'),
    link: "https://estiloguarani.netlify.app/"
  },
  {
    title: "Baristas",
    description: "Página web para una cafetería moderna y acogedora.",
    image: getImage('portfolio-3'),
    link: "https://cafeteriabaristas.netlify.app/"
  },
  {
    title: "ElectroRios",
    description: "E-commerce de productos electrónicos y electrodomésticos.",
    image: getImage('portfolio-4'),
    link: "https://electrorios.netlify.app/"
  },
  {
    title: "Proyecto Cliente E",
    description: "Rediseño de sitio web para consultora profesional.",
    image: getImage('portfolio-5'),
    link: "#"
  },
  {
    title: "Proyecto Cliente F",
    description: "Portal de noticias y contenido digital.",
    image: getImage('portfolio-6'),
    link: "#"
  }
];

export const teamMembers = [
  "Geronimo Ariel Antonich Acosta",
  "Gustavo Ariel Antonich Acosta",
  "Bruno Sebastián Benítez Ortiz",
  "Fabrizzio Andrés Burgos Martínez",
  "Carlos Antonio Galeano Gómez",
  "Kevin Isaac Gómez Cuevas",
  "Edwin Nicolas Kräuer Dagogliano",
  "Rolando Gabriel León Fariña",
  "Pedro Sebastian Ríos Medina",
  "Julio Cesar Ybañez Gomez"
];
