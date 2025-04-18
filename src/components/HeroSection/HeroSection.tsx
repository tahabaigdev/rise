import React from "react";
import GlobeComponent from "./GlobeComponent";
import CtaButton from "../ui/CtaButton";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white px-[2rem] pb-[4rem] sm:px-[4rem]">
      <div
        style={{ height: "calc(100vh - 115px)" }}
        className="ppx relative overflow-hidden rounded-[1.5rem] bg-[#3A53A1]"
      >
        <div className="absolute z-[10] flex size-full flex-col items-center justify-center px-[2rem] text-center md:items-start md:pl-[4rem] md:text-left">
          <h1 className="max-w-[70rem] text-[2.2rem] leading-[3rem] font-medium text-white uppercase sm:text-[4rem] sm:leading-[5rem]">
            The Best Never Settle. <br /> We Don’t Either.™
          </h1>

          <p className="mt-[2rem] mb-[4rem] max-w-[60rem] text-[1.6rem] leading-[2.3rem] font-light text-white sm:text-[1.9rem] sm:leading-[3rem]">
            We deliver robust, long-lasting engineering solutions tailored to
            your industrial needs. Our team is trusted across sectors for
            dependable execution, proactive maintenance, and unmatched support.
            When performance matters most, count on us.
          </p>

          <div className="flex items-center gap-[1rem]">
            <CtaButton
              text="Explore"
              bgColor="bg-[var(--primary-color)]"
              textColor="text-white"
              href=""
            />

            <CtaButton
              text="Get in Touch"
              bgColor="bg-[var(--secondary-color)]"
              textColor="text-white"
              href=""
            />
          </div>
        </div>

        <div className="absolute top-0 z-[9] hidden md:right-[-40%] md:block lg:right-[-35%]">
          <GlobeComponent />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
