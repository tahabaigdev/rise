import { ChevronRight, ContactRound, Navigation } from "lucide-react";
import CtaButton from "../ui/CtaButton";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this

const ReadySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <section>
      <div className="container py-[6rem]">
        <div className="grid grid-cols-2">
          <div
            data-aos="fade-up"
            className="flex flex-col items-start gap-[2.4rem] pr-[11.2rem] pl-[1.6rem]"
          >
            <h4 className="text-[2.4rem] leading-[3.2rem] font-medium tracking-[0.1px] capitalize">
              Ready to optimize your operations?
            </h4>

            <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
              Get immediate access to our engineering solutions or request a
              custom consultation.
            </p>

            <div className="flex items-center gap-[1.6rem]">
              <CtaButton
                text="Start now"
                bgColor="bg-[var(--primary-color)]"
                textColor="text-white"
                href=""
              />

              <a
                href=""
                className={`group inline-flex justify-center rounded-[1.65rem] bg-[transparent] pt-[.3rem] pb-[.6rem] text-[1.5rem] font-normal text-[var(--primary-color)] transition-all duration-200 hover:opacity-90`}
              >
                <span>Contact Sales</span>

                <ChevronRight className="relative top-[6px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-col items-start gap-[.8rem] pr-[3.2rem] pl-[1.6rem]"
            >
              <div className="mb-[.8rem] flex size-[4rem] items-center">
                <Navigation className="size-[2.8rem]" />
              </div>

              <div className="flex flex-col">
                <h5 className="text-[1.5rem] font-medium tracking-[0.2px]">
                  Head Office
                </h5>

                <p className="text-[1.5rem] font-light tracking-[0.2px] text-[#425466]">
                  +92 21 3515 7092
                </p>
              </div>

              <div className="flex flex-col">
                <h5 className="text-[1.5rem] font-medium tracking-[0.2px]">
                  Email
                </h5>

                <p className="text-[1.5rem] font-light tracking-[0.2px] text-[#425466]">
                  Enquiries@risengineering.org
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col items-start gap-[.8rem] pr-[3.2rem] pl-[1.6rem]"
            >
              <div className="mb-[.8rem] flex size-[4rem] items-center">
                <ContactRound className="size-[2.8rem]" />
              </div>

              <h5 className="text-[1.5rem] font-medium tracking-[0.2px]">
                Corporate Address
              </h5>

              <p className="text-[1.5rem] font-light tracking-[0.2px] text-[#425466]">
                Suite 303, Lane 10, Phase 6 Bukhari Commercial Area Defence
                Housing Authority, Karachi Sindh 75500, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
