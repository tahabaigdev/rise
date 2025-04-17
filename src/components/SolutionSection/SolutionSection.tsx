import { Flower2, HandHeart, Landmark, MountainSnow } from "lucide-react";
import Heading1 from "@/components/ui/Heading1";

const SolutionSection = () => {
  return (
    <section>
      <div className="container py-[6rem]">
        <div>
          <Heading1
            title="E.S.G. at RISE"
            subtitle="Engineering a sustainable future through responsible practices."
          />
        </div>

        <div className="mt-[8rem]">
          <div className="grid grid-cols-1 gap-[3.2rem] lg:grid-cols-2">
            <div className="shadow-shadow2 hover:shadow-shadow3 flex flex-col items-center gap-[1rem] border-b border-[var(--primary-color)] bg-[#FAF8F5] p-[2rem] pb-[4rem] transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da] md:flex-row">
              <div>
                <Flower2 className="size-[5rem] stroke-1 text-[var(--primary-color)]" />
              </div>

              <div className="flex flex-col gap-[.5rem] text-left">
                <h3 className="text-[2rem] leading-[3rem] font-normal tracking-[-0.36px]">
                  Our ESG Commitment
                </h3>

                <p className="max-w-[40rem] text-[1.4rem] leading-[2rem] font-light">
                  At RISE Engineering, we believe that true industrial
                  leadership requires balancing innovation with responsibility.
                </p>
              </div>
            </div>

            <div className="shadow-shadow2 hover:shadow-shadow3 flex flex-col items-center gap-[1rem] border-b border-[var(--primary-color)] bg-[#FAF8F5] p-[2rem] pb-[4rem] transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da] md:flex-row">
              <div>
                <MountainSnow className="size-[5rem] stroke-1 text-[var(--primary-color)]" />
              </div>

              <div className="flex flex-col gap-[.5rem] text-left">
                <h3 className="text-[2rem] leading-[3rem] font-normal tracking-[-0.36px]">
                  Protecting the Environment
                </h3>

                <p className="max-w-[40rem] text-[1.4rem] leading-[2rem] font-light">
                  We engineer sustainability into every solution. By pioneering
                  chrome-free coatings for heavy machinery components, we’ve
                  eliminated toxic runoff while maintaining performance.
                </p>
              </div>
            </div>

            <div className="shadow-shadow2 hover:shadow-shadow3 flex flex-col items-center gap-[1rem] border-b border-[var(--primary-color)] bg-[#FAF8F5] p-[2rem] pb-[4rem] transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da] md:flex-row">
              <div>
                <HandHeart className="size-[5rem] stroke-1 text-[var(--primary-color)]" />
              </div>

              <div className="flex flex-col gap-[.5rem] text-left">
                <h3 className="text-[2rem] leading-[3rem] font-normal tracking-[-0.36px]">
                  Empowering Communities
                </h3>

                <p className="max-w-[40rem] text-[1.4rem] leading-[2rem] font-light">
                  RISE operates on the principle that technology should uplift
                  people. We prioritize hiring locally and invest in STEM
                  apprenticeship programs to bridge the skills gap in
                  underserved areas.
                </p>
              </div>
            </div>

            <div className="shadow-shadow2 hover:shadow-shadow3 flex flex-col items-center gap-[1rem] border-b border-[var(--primary-color)] bg-[#FAF8F5] p-[2rem] pb-[4rem] transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da] md:flex-row">
              <div>
                <Landmark className="size-[5rem] stroke-1 text-[var(--primary-color)]" />
              </div>

              <div className="flex flex-col gap-[.5rem] text-left">
                <h3 className="text-[2rem] leading-[3rem] font-normal tracking-[-0.36px]">
                  Leading with Integrity
                </h3>

                <p className="max-w-[40rem] text-[1.4rem] leading-[2rem] font-light">
                  Transparency is non-negotiable. Our annual sustainability
                  reports detail carbon reductions, safety incidents, and
                  ethical procurement metrics—holding us accountable to
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
