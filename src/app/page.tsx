import HeroSection from "@/components/sections/hero-section";
import ZeroBoilerplateSection from "@/components/sections/zero-boilerplate-section";
import WhyTinyAgentSection from "@/components/sections/why-tinyagent-section";
import InstallationSection from "@/components/sections/installation-section";
import ExamplesSection from "@/components/sections/examples-section";
import FooterSection from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-jet-black text-electric-white font-mono">
      <HeroSection />
      <ZeroBoilerplateSection />
      <WhyTinyAgentSection />
      <InstallationSection />
      <ExamplesSection />
      <FooterSection />
    </main>
  );
}