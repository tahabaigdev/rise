// components/ScrollGallery.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import construction from "../../assets/images/construction.jpg";
import consultancy from "../../assets/images/consultancy.jpg";
import engineering from "../../assets/images/engineering.jpg";
import fieldServices from "../../assets/images/field-services.jpg";

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
              Services
            </h5>

            <h3 className="text-[5.6rem] leading-[6.8rem] font-medium tracking-[-1.12px] text-[var(--secondary-color)] uppercase">
              FIELD SERVICES
            </h3>

            <ul className="flex list-inside list-disc flex-col gap-[1rem] text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
              <li>Operations & Maintenance</li>
              <li>Preventive Maintenance</li>
              <li>Corrective Maintenance</li>
              <li>Troubleshooting</li>
              <li>Overhauling</li>
              <li>Restaging, Retrofits & Reconfigurations</li>
            </ul>
          </div>

          <div className="flex h-screen flex-col gap-[3.2rem] pr-[6.4rem] pl-[1.6rem]">
            <h5 className="text-[1.8rem] leading-[2.8rem] font-medium tracking-[0.2px] text-[var(--primary-color)]">
              Services
            </h5>

            <h3 className="text-[5.6rem] leading-[6.8rem] font-medium tracking-[-1.12px] text-[var(--secondary-color)] uppercase">
              CONSULTANCY
            </h3>

            <ul className="flex list-inside list-disc flex-col gap-[1rem] text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
              <li>Commissioning and Startup Support</li>
              <li>Root Cause Analysis – 3rd Party</li>
              <li>Reciprocating Compressors Technical Training</li>
              <li>Comprehensive Asset Management</li>
            </ul>
          </div>

          <div className="flex h-screen flex-col gap-[3.2rem] pr-[6.4rem] pl-[1.6rem]">
            <h5 className="text-[1.8rem] leading-[2.8rem] font-medium tracking-[0.2px] text-[var(--primary-color)]">
              Services
            </h5>

            <h3 className="text-[5.6rem] leading-[6.8rem] font-medium tracking-[-1.12px] text-[var(--secondary-color)] uppercase">
              Contruction
            </h3>

            <ul className="flex list-inside list-disc flex-col gap-[1rem] text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
              <li>Equipment Installation</li>
              <li>Mech. and I&E Works</li>
            </ul>
          </div>

          <div className="flex h-screen flex-col gap-[3.2rem] pr-[6.4rem] pl-[1.6rem]">
            <h5 className="text-[1.8rem] leading-[2.8rem] font-medium tracking-[0.2px] text-[var(--primary-color)]">
              Services
            </h5>

            <h3 className="text-[5.6rem] leading-[6.8rem] font-medium tracking-[-1.12px] text-[var(--secondary-color)] uppercase">
              Engineering
            </h3>

            <ul className="flex list-inside list-disc flex-col gap-[1rem] text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
              <li>Application and Package Engineering</li>
              <li>Design Review</li>
              <li>As Built</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="right sticky top-0 flex h-screen w-1/2 flex-col">
          <div className="photos relative top-[5rem] mx-auto h-[50rem] w-full">
            <div className="photo absolute h-full w-full bg-red-600">
              <img
                src={fieldServices}
                alt="Image"
                className="size-full object-cover"
              />
            </div>
            <div className="photo absolute h-full w-full bg-red-600">
              <img
                src={consultancy}
                alt="Image"
                className="size-full object-cover"
              />
            </div>
            <div className="photo absolute h-full w-full bg-red-600">
              <img
                src={construction}
                alt="Image"
                className="size-full object-cover"
              />
            </div>
            <div className="photo absolute h-full w-full bg-red-600">
              <img
                src={engineering}
                alt="Image"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
