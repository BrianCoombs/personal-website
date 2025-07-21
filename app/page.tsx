import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
}
