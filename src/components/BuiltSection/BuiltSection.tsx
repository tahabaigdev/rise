import {
  ArrowUpDown,
  BookMarked,
  ChevronRight,
  FolderKanban,
  MonitorCheck,
} from "lucide-react";
import optimizePerformance from "../../assets/images/optimize-performance.jpg";
import turnByProducts from "../../assets/images/turn-byproducts.jpg";
import futureProof from "../../assets/images/future-proof.jpg";
import stopHidden from "../../assets/images/stop-hidden.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this

const BuiltSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <section className="bg-[#EFECEB]">
      <div className="container pt-[6rem] pb-[6rem] lg:pb-[20rem]">
        <div className="flex max-w-[81rem] flex-col items-center gap-[1.8rem] px-[2rem] text-center sm:gap-[2.4rem] md:items-start md:px-[0rem] md:pr-[12rem] md:pl-[1.6rem] md:text-left">
          <h5
            data-aos="fade-left"
            className="text-[1.8rem] leading-[2.8rem] font-medium tracking-[0.2px] text-[var(--primary-color)]"
          >
            Built for growth
          </h5>

          <h3
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-[3.8rem] leading-[4.8rem] font-medium tracking-[-0.2px]"
          >
            Driving Industrial Sustainability
          </h3>

          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]"
          >
            RISE Engineering delivers cutting-edge solutions that reduce
            environmental impact while maximizing operational performance. We
            help clients meet evolving regulations and achieve long-term
            efficiency goals.
          </p>
        </div>

        <div className="mx-auto mt-[6.4rem] grid max-w-[102.4rem] grid-cols-1 gap-[3.2rem] px-[1.6rem] md:grid-cols-2">
          <div className="relative grid grid-cols-1 gap-[3.2rem] lg:top-[10rem]">
            <div
              data-aos="fade-up"
              className="group shadow-01 flex h-[55rem] flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]"
            >
              <div className="h-full overflow-hidden rounded-[.4rem] bg-[pink] transition-all duration-200">
                <img
                  src={optimizePerformance}
                  alt="Image"
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-[.8rem] p-[3.2rem] transition-all duration-300 lg:h-[23rem] lg:group-hover:h-[26rem]">
                <div className="inline-flex w-max items-center gap-[1.2rem] rounded-[.4rem] bg-[#F8F9FB] px-[1.6rem] py-[1rem] text-[1.2rem] leading-[1.5rem] font-normal">
                  <ArrowUpDown className="size-[2rem]" />
                  <span>Peak Operational Efficiency</span>
                </div>

                <div className="flex flex-col items-start gap-[1.2rem]">
                  <h4 className="text-[2.2rem] leading-[3.6rem] font-medium">
                    Optimize Performance, Reduce Footprint
                  </h4>

                  <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
                    Maximize equipment performance while reducing emissions. Our
                    precision tuning cuts fuel use by 25% and extends asset
                    lifespans.
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

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group shadow-01 flex h-[55rem] flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]"
            >
              <div className="h-full overflow-hidden rounded-[.4rem] bg-[pink] transition-all duration-200">
                <img
                  src={stopHidden}
                  alt="Image"
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-[.8rem] p-[3.2rem] transition-all duration-300 lg:h-[23rem] lg:group-hover:h-[26rem]">
                <div className="inline-flex w-max items-center gap-[1.2rem] rounded-[.4rem] bg-[#F8F9FB] px-[1.6rem] py-[1rem] text-[1.2rem] leading-[1.5rem] font-normal">
                  <MonitorCheck className="size-[2rem]" />
                  <span>Emissions Monitoring & Control</span>
                </div>

                <div className="flex flex-col items-start gap-[1.2rem]">
                  <h4 className="text-[2.2rem] leading-[3.6rem] font-medium">
                    Stop Hidden Leaks, Protect Your Output
                  </h4>

                  <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
                    Detect and fix leaks before they waste resources. Real-time
                    monitoring prevents methane slip and regulatory fines.
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

          <div className="grid grid-cols-1 gap-[3.2rem]">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="group shadow-01 flex h-[55rem] flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]"
            >
              <div className="h-full overflow-hidden rounded-[.4rem] bg-[pink] transition-all duration-200">
                <img
                  src={futureProof}
                  alt="Image"
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-[.8rem] p-[3.2rem] transition-all duration-300 lg:h-[23rem] lg:group-hover:h-[26rem]">
                <div className="inline-flex w-max items-center gap-[1.2rem] rounded-[.4rem] bg-[#F8F9FB] px-[1.6rem] py-[1rem] text-[1.2rem] leading-[1.5rem] font-normal">
                  <BookMarked className="size-[2rem]" />
                  <span>Clean Technology Integration</span>
                </div>

                <div className="flex flex-col items-start gap-[1.2rem]">
                  <h4 className="text-[2.2rem] leading-[3.6rem] font-medium">
                    Future-Proof Your Energy Mix
                  </h4>

                  <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
                    Future-proof your machinery for clean fuel transitions. We
                    retrofit turbines for H₂ blends without downtime.
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

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="group shadow-01 flex h-[55rem] flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]"
            >
              <div className="h-full overflow-hidden rounded-[.4rem] bg-[pink] transition-all duration-200">
                <img
                  src={turnByProducts}
                  alt="Image"
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-[.8rem] p-[3.2rem] transition-all duration-300 lg:h-[23rem] lg:group-hover:h-[26rem]">
                <div className="inline-flex w-max items-center gap-[1.2rem] rounded-[.4rem] bg-[#F8F9FB] px-[1.6rem] py-[1rem] text-[1.2rem] leading-[1.5rem] font-normal">
                  <FolderKanban className="size-[2rem]" />
                  <span>Waste-to-Value Innovations</span>
                </div>

                <div className="flex flex-col items-start gap-[1.2rem]">
                  <h4 className="text-[2.2rem] leading-[3.6rem] font-medium">
                    Turn Byproducts Into Assets
                  </h4>

                  <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
                    Transforms industrial waste streams into energy sources. Our
                    heat recovery systems for compressors
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
      </div>
    </section>
  );
};

export default BuiltSection;
