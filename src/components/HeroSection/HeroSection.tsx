import React from "react";
import grid from "../../assets/images/grid.svg";
import CtaButton from "@/components/ui/CtaButton";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white px-[2rem] xl:px-[0rem]">
      <img
        src={grid}
        alt="Background Grid"
        className="absolute top-0 left-1/2 -translate-x-1/2"
      />

      <div className="relative z-[1] container py-[4rem] sm:py-[6rem]">
        <div className="grid grid-cols-1 items-center gap-[4rem] sm:gap-[8rem] lg:grid-cols-2">
          <div className="lg:max-w-auto mx-auto flex max-w-[70rem] flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <h1 className="text-[2.2rem] leading-[3.2rem] font-normal sm:text-[4rem] sm:leading-[5rem] sm:tracking-[-2px]">
              Built by and for Humanitarian Aid Workers and Development
              Practitioners!
            </h1>

            <p className="mt-[2rem] mb-[4rem] text-[1.4rem] leading-[2.4rem] font-light sm:text-[1.6rem] sm:leading-[3.2rem]">
              RadixTech combines effective aid, humanitarian action, and
              technology expertise to deliver platforms and services
              specifically designed for impactful humanitarian and global
              movement-wide work.{" "}
              <span className="bg-[#FEF7BD]">
                With extensive experience in humanitarian response and
                sustainable development projects,
              </span>{" "}
              we understand the unique needs, operational challenges, and
              complex environments in which nonprofits and aid organizations
              operate.
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

          <div className="flex justify-center lg:justify-end">
            <div className="relative size-[35rem] overflow-hidden rounded-[1.2rem] bg-amber-100 sm:size-[50rem]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
