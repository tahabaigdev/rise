import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { ArrowRight } from "lucide-react";

declare module "swiper/css";

const CarouselSlider = () => {
  const leftSwiperRef = useRef<SwiperCore | null>(null);
  const rightSwiperRef = useRef<SwiperCore | null>(null);

  const handlePaginationClick = (index: number) => {
    leftSwiperRef.current?.slideTo(index);
    rightSwiperRef.current?.slideTo(index);
  };

  return (
    <div className="h-[50rem] w-full">
      <div className="flex h-full">
        {/* Left Slider */}
        <div className="w-[27rem]">
          <Swiper
            onSwiper={(swiper) => (leftSwiperRef.current = swiper)}
            className="mySwiper rounded-[1rem]"
            allowTouchMove={false}
            speed={800}
          >
            <SwiperSlide className="pr-[3.2rem]">
              {/* Slide 1 Content */}
              <div className="grid gap-[5rem]">
                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    130
                  </h5>
                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>

                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    130
                  </h5>
                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>

                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    130
                  </h5>
                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="pr-[3.2rem]">
              {/* Slide 1 Content */}
              <div className="grid gap-[5rem]">
                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    130
                  </h5>
                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>

                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    130
                  </h5>
                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>

                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    130
                  </h5>
                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="pr-[3.2rem]">
              {/* Slide 1 Content */}
              <div className="grid gap-[5rem]">
                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    130
                  </h5>
                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>

                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    130
                  </h5>
                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>

                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    130
                  </h5>
                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="pr-[3.2rem]">
              {/* Slide 1 Content */}
              <div className="grid gap-[5rem]">
                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    130
                  </h5>
                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>

                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    130
                  </h5>
                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>

                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    130
                  </h5>
                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Slider */}
        <Swiper
          onSwiper={(swiper) => (rightSwiperRef.current = swiper)}
          className="mySwiper w-full rounded-[1rem]"
          allowTouchMove={false}
          speed={800}
        >
          <SwiperSlide className="group relative overflow-hidden rounded-[1rem]">
            <div className="absolute inset-0 size-full bg-linear-[var(--gradient-1)]"></div>

            <div className="absolute inset-0 flex size-full flex-col justify-between p-[2.4rem]">
              <div className="flex items-center justify-between">
                <div className="size-[4rem] bg-amber-300"></div>
                <div className="size-[2rem] bg-amber-300"></div>
              </div>

              <div>
                <h4 className="relative top-[0rem] max-w-[46.8rem] text-[2.6rem] leading-[3.6rem] font-medium text-white transition-all duration-300 group-hover:top-[-1rem]">
                  See how Amazon simplified cross-border payments with Stripe
                </h4>

                <button className="relative bottom-[-10rem] flex text-[1.6rem] font-light text-white transition-all duration-300 group-hover:bottom-[0rem]">
                  <span>Read story</span>{" "}
                  <ArrowRight className="relative top-[8px] left-[.5rem] size-[1.2rem] stroke-3 transition-all duration-200" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="group relative overflow-hidden rounded-[1rem]">
            <div className="absolute inset-0 size-full bg-linear-[var(--gradient-1)]"></div>

            <div className="absolute inset-0 flex size-full flex-col justify-between p-[2.4rem]">
              <div className="flex items-center justify-between">
                <div className="size-[4rem] bg-amber-300"></div>
                <div className="size-[2rem] bg-amber-300"></div>
              </div>

              <div>
                <h4 className="relative top-[0rem] max-w-[46.8rem] text-[2.6rem] leading-[3.6rem] font-medium text-white transition-all duration-300 group-hover:top-[-1rem]">
                  See how Amazon simplified cross-border payments with Stripe
                </h4>

                <button className="relative bottom-[-10rem] flex text-[1.6rem] font-light text-white transition-all duration-300 group-hover:bottom-[0rem]">
                  <span>Read story</span>{" "}
                  <ArrowRight className="relative top-[8px] left-[.5rem] size-[1.2rem] stroke-3 transition-all duration-200" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="group relative overflow-hidden rounded-[1rem]">
            <div className="absolute inset-0 size-full bg-linear-[var(--gradient-1)]"></div>

            <div className="absolute inset-0 flex size-full flex-col justify-between p-[2.4rem]">
              <div className="flex items-center justify-between">
                <div className="size-[4rem] bg-amber-300"></div>
                <div className="size-[2rem] bg-amber-300"></div>
              </div>

              <div>
                <h4 className="relative top-[0rem] max-w-[46.8rem] text-[2.6rem] leading-[3.6rem] font-medium text-white transition-all duration-300 group-hover:top-[-1rem]">
                  See how Amazon simplified cross-border payments with Stripe
                </h4>

                <button className="relative bottom-[-10rem] flex text-[1.6rem] font-light text-white transition-all duration-300 group-hover:bottom-[0rem]">
                  <span>Read story</span>{" "}
                  <ArrowRight className="relative top-[8px] left-[.5rem] size-[1.2rem] stroke-3 transition-all duration-200" />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="group relative overflow-hidden rounded-[1rem]">
            <div className="absolute inset-0 size-full bg-linear-[var(--gradient-1)]"></div>

            <div className="absolute inset-0 flex size-full flex-col justify-between p-[2.4rem]">
              <div className="flex items-center justify-between">
                <div className="size-[4rem] bg-amber-300"></div>
                <div className="size-[2rem] bg-amber-300"></div>
              </div>

              <div>
                <h4 className="relative top-[0rem] max-w-[46.8rem] text-[2.6rem] leading-[3.6rem] font-medium text-white transition-all duration-300 group-hover:top-[-1rem]">
                  See how Amazon simplified cross-border payments with Stripe
                </h4>

                <button className="relative bottom-[-10rem] flex text-[1.6rem] font-light text-white transition-all duration-300 group-hover:bottom-[0rem]">
                  <span>Read story</span>{" "}
                  <ArrowRight className="relative top-[8px] left-[.5rem] size-[1.2rem] stroke-3 transition-all duration-200" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Custom Pagination */}
      <div className="mt-6 grid grid-cols-4">
        <button
          onClick={() => handlePaginationClick(0)}
          className="rounded-lg border border-gray-400 px-4 py-2 text-[1.6rem] hover:bg-gray-200"
        >
          Overview
        </button>
        <button
          onClick={() => handlePaginationClick(1)}
          className="rounded-lg border border-gray-400 px-4 py-2 text-[1.6rem] hover:bg-gray-200"
        >
          Insights
        </button>
        <button
          onClick={() => handlePaginationClick(2)}
          className="rounded-lg border border-gray-400 px-4 py-2 text-[1.6rem] hover:bg-gray-200"
        >
          Taha
        </button>
        <button
          onClick={() => handlePaginationClick(3)}
          className="rounded-lg border border-gray-400 px-4 py-2 text-[1.6rem] hover:bg-gray-200"
        >
          Ali
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
