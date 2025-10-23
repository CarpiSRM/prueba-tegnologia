
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function FloatingSocials() {
  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
    },
    {
      href: "https://instagram.com",
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
    },
    {
      href: "https://linkedin.com",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
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
