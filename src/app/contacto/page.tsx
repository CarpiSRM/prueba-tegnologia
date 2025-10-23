
import ContactSection from "@/components/landing/contact-section";

export default function ContactoPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const selectedPlan = searchParams?.plan;

  return (
    <div className="bg-background">
      <ContactSection selectedPlan={typeof selectedPlan === 'string' ? selectedPlan : undefined} />
    </div>
  );
}
