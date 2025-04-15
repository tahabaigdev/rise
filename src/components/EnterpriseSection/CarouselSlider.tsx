// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const CarouselSlider = () => {
  return (
    <div className="h-[50rem] w-full">
      <div className="flex h-full">
        {/* Left Slider */}
        <div className="w-[27rem]">
          <Swiper className="mySwiper rounded-[1rem]">
            <SwiperSlide className="pr-[3.2rem]">
              <div className="grid gap-[4.8rem]">
                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] leading-[3.2rem] font-medium tracking-[0.2px]">
                    130
                  </h5>

                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] font-light tracking-[0.2px] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>

                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] leading-[3.2rem] font-medium tracking-[0.2px]">
                    130
                  </h5>

                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] font-light tracking-[0.2px] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>

                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] leading-[3.2rem] font-medium tracking-[0.2px]">
                    130
                  </h5>

                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] font-light tracking-[0.2px] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="pr-[3.2rem]">
              <div className="grid gap-[4.8rem]">
                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] leading-[3.2rem] font-medium tracking-[0.2px]">
                    130
                  </h5>

                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] font-light tracking-[0.2px] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>

                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] leading-[3.2rem] font-medium tracking-[0.2px]">
                    130
                  </h5>

                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] font-light tracking-[0.2px] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>

                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] leading-[3.2rem] font-medium tracking-[0.2px]">
                    130
                  </h5>

                  <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] font-light tracking-[0.2px] text-[#425466]">
                    Countries in Logistics Network
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Slider */}
        <Swiper className="mySwiper rounded-[1rem]">
          <SwiperSlide className="rounded-[1rem] bg-pink-300">
            Slide 1
          </SwiperSlide>

          <SwiperSlide className="rounded-[1rem] bg-pink-300">
            Slide 1
          </SwiperSlide>
        </Swiper>
      </div>

      <div></div>
    </div>
  );
};

export default CarouselSlider;
