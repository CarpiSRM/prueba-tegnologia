
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-message-circle"
    >
      <path d="M7.9 20.6a9 9 0 1 0-9-9" />
      <path d="M12 18h.01" />
    </svg>
  );
}


export default function FloatingSocials() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61582558119246",
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
    },
    {
      href: "https://instagram.com",
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
    },
    {
      href: "https://wa.me/595986722902",
      icon: <WhatsAppIcon />,
      label: "WhatsApp 1",
    },
    {
      href: "https://wa.me/595975402061",
      icon: <WhatsAppIcon />,
      label: "WhatsApp 2",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {socialLinks.map((social) => (
        <Button
          key={social.label}
          asChild
          variant="outline"
          size="icon"
          className="rounded-full bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
        >
          <Link href={social.href} target="_blank" aria-label={social.label}>
            {social.icon}
          </Link>
        </Button>
      ))}
    </div>
  );
}
