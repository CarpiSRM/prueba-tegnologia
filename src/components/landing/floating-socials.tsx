
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="lucide lucide-whatsapp"
    >
      <path d="M16.5 13.5c-0.3-0.1-1.6-0.8-1.9-0.9s-0.5-0.1-0.7 0.1-0.7 0.9-0.9 1.1-0.3 0.2-0.6 0.1c-0.3-0.1-1.1-0.4-2.1-1.3s-1.5-2-1.7-2.3c-0.2-0.3 0-0.5 0.1-0.6s0.3-0.3 0.4-0.5c0.1-0.1 0.2-0.3 0.3-0.4s0.1-0.2 0-0.4c-0.1-0.2-0.7-1.7-0.9-2.3-0.2-0.6-0.5-0.5-0.7-0.5h-0.6c-0.2 0-0.6 0.1-0.9 0.4s-1.1 1.1-1.1 2.6 1.1 3 1.3 3.2c0.2 0.2 2.2 3.4 5.3 4.7 0.7 0.3 1.3 0.5 1.7 0.6 0.7 0.2 1.4 0.2 1.9 0.1 0.6-0.1 1.6-0.7 1.9-1.3s0.3-1.1 0.2-1.3c-0.1-0.2-0.3-0.3-0.6-0.4z" />
      <path d="M21.5 12.5c0-5-4-9-9-9s-9 4-9 9 4 9 9 9h.5l.5.5-1 3 3-1 .5.5h.5c5 0 9-4 9-9z" />
    </svg>
  );
}


export default function FloatingSocials() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61582558119246",
      icon: <Facebook className="h-6 w-6" />,
      label: "Facebook",
      className: "bg-[#1877F2] hover:bg-[#1877F2]/90 text-white",
    },
    {
      href: "https://www.instagram.com/tecnologiamarketin/",
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      className: "bg-[#E4405F] hover:bg-[#E4405F]/90 text-white",
    },
    {
      href: "https://wa.me/595986722902",
      icon: <WhatsAppIcon />,
      label: "WhatsApp 1",
      className: "bg-[#25D366] hover:bg-[#25D366]/90 text-white",
    },
    {
      href: "https://wa.me/595975402061",
      icon: <WhatsAppIcon />,
      label: "WhatsApp 2",
      className: "bg-[#25D366] hover:bg-[#25D366]/90 text-white",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {socialLinks.map((social) => (
        <Button
          key={social.label}
          asChild
          variant="default"
          size="icon"
          className={cn("rounded-full shadow-lg", social.className)}
        >
          <Link href={social.href} target="_blank" aria-label={social.label}>
            {social.icon}
          </Link>
        </Button>
      ))}
    </div>
  );
}
