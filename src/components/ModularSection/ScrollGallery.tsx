// components/ScrollGallery.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollGallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        animation: animation,
        scrub: true,
        markers: false,
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={galleryRef}>
      <div className="gallery flex">
        {/* Left Column */}
        <div className="left w-1/2">
          <div className="flex h-screen flex-col gap-[3.2rem] pr-[6.4rem] pl-[1.6rem]">
            <h5 className="text-[1.8rem] leading-[2.8rem] font-medium tracking-[0.2px] text-[var(--primary-color)]">
              Modular Solutions
            </h5>

            <h3 className="text-[5.6rem] leading-[6.8rem] font-medium tracking-[-1.12px] text-[var(--secondary-color)]">
              A fully integrated suite of financial and payments products
            </h3>

            <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
              Reduce costs, grow revenue, and run your business more efficiently
              on a fully integrated platform. Use Stripe to handle all of your
              payments-related needs, manage revenue operations, and launch (or
              invent) new business models.
            </p>
          </div>

          <div className="flex h-screen flex-col gap-[3.2rem] pr-[6.4rem] pl-[1.6rem]">
            <h5 className="text-[1.8rem] leading-[2.8rem] font-medium tracking-[0.2px] text-[var(--primary-color)]">
              Modular Solutions
            </h5>

            <h3 className="text-[5.6rem] leading-[6.8rem] font-medium tracking-[-1.12px] text-[var(--secondary-color)]">
              A fully integrated suite of financial and payments products
            </h3>

            <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
              Reduce costs, grow revenue, and run your business more efficiently
              on a fully integrated platform. Use Stripe to handle all of your
              payments-related needs, manage revenue operations, and launch (or
              invent) new business models.
            </p>
          </div>

          <div className="flex h-screen flex-col gap-[3.2rem] pr-[6.4rem] pl-[1.6rem]">
            <h5 className="text-[1.8rem] leading-[2.8rem] font-medium tracking-[0.2px] text-[var(--primary-color)]">
              Modular Solutions
            </h5>

            <h3 className="text-[5.6rem] leading-[6.8rem] font-medium tracking-[-1.12px] text-[var(--secondary-color)]">
              A fully integrated suite of financial and payments products
            </h3>

            <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
              Reduce costs, grow revenue, and run your business more efficiently
              on a fully integrated platform. Use Stripe to handle all of your
              payments-related needs, manage revenue operations, and launch (or
              invent) new business models.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="right sticky top-0 flex h-screen w-1/2 flex-col">
          <div className="photos relative top-[5rem] mx-auto h-[50rem] w-full">
            <div className="photo absolute h-full w-full bg-red-600" />
            <div className="photo absolute h-full w-full bg-green-600" />
            <div className="photo absolute h-full w-full bg-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
