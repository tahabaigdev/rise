import CtaButton from "@/components/ui/CtaButton";
import CarouselSlider from "./CarouselSlider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this

const EnterpriseSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <section className="bg-[#F7F7F7]">
      <div className="container py-[6rem]">
        <div className="flex max-w-[81rem] flex-col items-start gap-[2.4rem] pr-[12rem] pl-[1.6rem]">
          <h5
            data-aos="fade-left"
            className="text-[1.8rem] leading-[2.8rem] font-medium tracking-[0.2px] text-[var(--primary-color)]"
          >
            Global Specialist
          </h5>

          <h3
            data-aos="fade-left"
            className="text-[3.8rem] leading-[4.8rem] font-medium tracking-[-0.2px] capitalize"
          >
            Engines & Compressors: Industrial Power, Engineered to Perfection
          </h3>

          <p
            data-aos="fade-left"
            className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]"
          >
            We combine OEM expertise with cutting-edge innovation to deliver
            unmatched reliability, efficiency, and performance - from routine
            maintenance to complex system upgrades.
          </p>

          <div data-aos="fade-left">
            <CtaButton
              text="Explore RISE"
              bgColor="bg-[var(--primary-color)]"
              textColor="text-white"
              href=""
            />
          </div>
        </div>

        <div data-aos="fade-up" className="mt-[6rem]">
          <CarouselSlider />
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
