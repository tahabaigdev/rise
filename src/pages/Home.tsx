import BuiltSection from "@/components/BuiltSection/BuiltSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import EnterpriseSection from "@/components/EnterpriseSection/EnterpriseSection";
import ModularSection from "@/components/ModularSection/ModularSection";
import SolutionSection from "@/components/SolutionSection/SolutionSection";
import TrustedSection from "@/components/TrustedSection/TrustedSection";
import WhySection from "@/components/WhySection/WhySection";
import LaunchSection from "@/components/LaunchSection/LaunchSection";
import ReadySection from "@/components/ReadySection/ReadySection";
import HeroSection from "@/components/HeroSection/HeroSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <TrustedSection />
      <SolutionSection />
      <WhySection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <ModularSection />
      {/* <GlobalSection /> */}
      <EnterpriseSection />
      <BuiltSection />
      <LaunchSection />
      <ReadySection />
    </main>
  );
};

export default Home;
