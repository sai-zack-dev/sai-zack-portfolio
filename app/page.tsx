import ContactInfo from "@/components/sections/home/contact-info";
import HeroSection from "@/components/sections/home/hero-section";
import TechStack from "@/components/sections/home/tech-stack";
import TopProjects from "@/components/sections/home/top-projects";
import WorkExp from "@/components/sections/home/work-exp";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <TopProjects />
      <WorkExp />
      <ContactInfo />
    </>
  );
}
