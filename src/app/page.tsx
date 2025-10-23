import HeroSection from "@/components/landing/hero-section";
import AboutSection from "@/components/landing/about-section";
import ServicesSection from "@/components/landing/services-section";
import WhyUsSection from "@/components/landing/why-us-section";
import PortfolioSection from "@/components/landing/portfolio-section";
import TeamSection from "@/components/landing/team-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <TeamSection />
    </>
  );
}
