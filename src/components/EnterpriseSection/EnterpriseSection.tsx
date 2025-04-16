import CtaButton from "@/components/ui/CtaButton";
import CarouselSlider from "./CarouselSlider";

const EnterpriseSection = () => {
  return (
    <section>
      <div className="container py-[6rem]">
        <div className="flex max-w-[81rem] flex-col items-start gap-[2.4rem] pr-[12rem] pl-[1.6rem]">
          <h5 className="text-[1.8rem] leading-[2.8rem] font-medium tracking-[0.2px] text-[var(--primary-color)]">
            Enterprise reinvention
          </h5>
          <h3 className="text-[3.8rem] leading-[4.8rem] font-medium tracking-[-0.2px]">
            The backbone for global commerce
          </h3>
          <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
            Stripe makes moving money as easy and programmable as moving data.
            Our teams are based in offices around the world and we process
            hundreds of billions of dollars each year for ambitious businesses
            of all sizes.
          </p>

          <CtaButton
            text="Explore Rise for Enterprises"
            bgColor="bg-[var(--primary-color)]"
            textColor="text-white"
            href=""
          />
        </div>

        <div className="mt-[6rem]">
          <CarouselSlider />
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
