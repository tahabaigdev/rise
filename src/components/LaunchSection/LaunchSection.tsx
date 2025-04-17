import { Bookmark, ChevronRight } from "lucide-react";
import fireProofing from "../../assets/images/fire-proofing.jpg";
import inspectionTesting from "../../assets/images/inspection-testing.jpg";
import protectiveCoating from "../../assets/images/protective-coating.jpg";

const LaunchSection = () => {
  return (
    <section>
      <div className="container py-[6rem]">
        <div className="flex max-w-[81rem] flex-col items-start gap-[2.4rem] pr-[12rem] pl-[1.6rem]">
          <h5 className="text-[1.8rem] leading-[2.8rem] font-medium tracking-[0.2px] text-[var(--primary-color)]">
            Assosiate Services
          </h5>
          <h3 className="text-[3.8rem] leading-[4.8rem] font-medium tracking-[-0.2px]">
            Specialized Industrial Solutions Through Strategic Alliances
          </h3>
          <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
            Through our network of trusted associates, we extend our service
            portfolio to include specialized solutions critical to industrial
            performance and compliance. These services encompass protective
            coating applications, advanced fireproofing systems, and
            comprehensive inspection and testing protocols. Each offering is
            delivered by certified professionals using industry-approved
            methodologies, ensuring long-term durability, regulatory compliance,
            and operational safety across your assets and infrastructure.
          </p>
        </div>

        <div className="mt-[6.4rem] grid grid-cols-3 gap-[3.2rem] px-[1.6rem]">
          <div className="group shadow-01 flex h-[50rem] flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]">
            <div className="h-full overflow-hidden rounded-[.4rem] bg-[pink] transition-all duration-200">
              <img
                src={protectiveCoating}
                alt="Image"
                className="size-full object-cover"
              />
            </div>

            <div className="flex h-[23.8rem] flex-col gap-[.8rem] p-[1.6rem] transition-all duration-300 group-hover:h-[28rem]">
              <div className="inline-flex w-max items-center gap-[1.2rem] rounded-[.4rem] bg-[#F8F9FB] px-[1.6rem] py-[1rem] text-[1.2rem] leading-[1.5rem] font-normal">
                <Bookmark className="size-[2rem]" />
                <span>Services</span>
              </div>

              <div className="flex flex-col items-start gap-[1.2rem]">
                <h4 className="text-[2.6rem] leading-[3.6rem] font-medium">
                  Protective Coating
                </h4>

                <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
                  Industrial-grade coatings engineered to prevent corrosion,
                  abrasion, and chemical damage, extending the life of critical
                  assets.
                </p>

                <a
                  href="{href}"
                  className={`inline-flex justify-center rounded-[1.65rem] bg-[transparent] pt-[.3rem] pb-[.6rem] text-[1.5rem] font-normal text-[var(--primary-color)]`}
                >
                  <span>Learn about rise</span>

                  <ChevronRight className="relative top-[6px] left-[.3rem] size-[1.5rem] stroke-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="group shadow-01 flex h-[50rem] flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]">
            <div className="h-full overflow-hidden rounded-[.4rem] bg-[pink] transition-all duration-200">
              <img
                src={fireProofing}
                alt="Image"
                className="size-full object-cover"
              />
            </div>
            <div className="flex h-[23.8rem] flex-col gap-[.8rem] p-[1.6rem] transition-all duration-300 group-hover:h-[28rem]">
              <div className="inline-flex w-max items-center gap-[1.2rem] rounded-[.4rem] bg-[#F8F9FB] px-[1.6rem] py-[1rem] text-[1.2rem] leading-[1.5rem] font-normal">
                <Bookmark className="size-[2rem]" />
                <span>Services</span>
              </div>

              <div className="flex flex-col items-start gap-[1.2rem]">
                <h4 className="text-[2.6rem] leading-[3.6rem] font-medium">
                  Fire-Proofing
                </h4>

                <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
                  Specialized fire-resistant systems designed to protect
                  structural components from extreme heat and flame exposure.
                </p>

                <a
                  href="{href}"
                  className={`inline-flex justify-center rounded-[1.65rem] bg-[transparent] pt-[.3rem] pb-[.6rem] text-[1.5rem] font-normal text-[var(--primary-color)]`}
                >
                  <span>Learn about rise</span>

                  <ChevronRight className="relative top-[6px] left-[.3rem] size-[1.5rem] stroke-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="group shadow-01 flex h-[50rem] flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]">
            <div className="h-full overflow-hidden rounded-[.4rem] bg-[pink] transition-all duration-200">
              <img
                src={inspectionTesting}
                alt="Image"
                className="size-full object-cover"
              />
            </div>

            <div className="flex h-[23.8rem] flex-col gap-[.8rem] p-[1.6rem] transition-all duration-300 group-hover:h-[28rem]">
              <div className="inline-flex w-max items-center gap-[1.2rem] rounded-[.4rem] bg-[#F8F9FB] px-[1.6rem] py-[1rem] text-[1.2rem] leading-[1.5rem] font-normal">
                <Bookmark className="size-[2rem]" />
                <span>Services</span>
              </div>

              <div className="flex flex-col items-start gap-[1.2rem]">
                <h4 className="text-[2.6rem] leading-[3.6rem] font-medium">
                  Inspection & Testing
                </h4>

                <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
                  Non-destructive and destructive testing services to evaluate
                  material integrity, system performance.
                </p>

                <a
                  href="{href}"
                  className={`inline-flex justify-center rounded-[1.65rem] bg-[transparent] pt-[.3rem] pb-[.6rem] text-[1.5rem] font-normal text-[var(--primary-color)]`}
                >
                  <span>Learn about rise</span>

                  <ChevronRight className="relative top-[6px] left-[.3rem] size-[1.5rem] stroke-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchSection;
