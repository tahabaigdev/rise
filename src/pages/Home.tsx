import AboutSection from "../components/AboutSection/AboutSection";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import EnterpriseSection from "../components/EnterpriseSection/EnterpriseSection";
import GlobalSection from "../components/GlobalSection/GlobalSection";
import HeroSection from "../components/HeroSection/HeroSection";
import ModularSection from "../components/ModularSection/ModularSection";
import ProductSection from "../components/ProductSection/ProductSection";
import SolutionSection from "../components/SolutionSection/SolutionSection";
import TrustedSection from "../components/TrustedSection/TrustedSection";
import WhySection from "../components/WhySection/WhySection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <TrustedSection />
      <ProductSection />
      <SolutionSection />
      <WhySection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <ModularSection />
      <GlobalSection />
      <EnterpriseSection />
    </main>
  );
};

export default Home;
