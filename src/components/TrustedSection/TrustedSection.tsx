import React from "react";
import Marquee from "react-fast-marquee";
import clientLogo1 from "../../assets/images/partner-logo-1.png";
import clientLogo2 from "../../assets/images/partner-logo-2.png";
import clientLogo3 from "../../assets/images/partner-logo-3.png";
import clientLogo4 from "../../assets/images/partner-logo-4.png";
import clientLogo5 from "../../assets/images/partner-logo-5.png";
import clientLogo6 from "../../assets/images/partner-logo-6.png";
import Heading1 from "../ui/Heading1";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this

// Define type for the array of image imports
const marqueeItems: string[] = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
];

const TrustedSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <section className="flex flex-col items-center gap-[6rem] overflow-hidden py-[3rem]">
      <div data-aos="fade-up" className="max-w-[108rem] text-center">
        <Heading1
          title=" Trusted by Industry Leaders"
          subtitle=" We’re proud to partner with organizations that set the standard in
          their fields."
        />
      </div>

      <div data-aos="fade-up" className="w-full">
        <div className="marquee-sec">
          <Marquee speed={70} gradient={false} pauseOnHover={true}>
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="mx-[2rem]">
                <img
                  src={item}
                  alt={`Client logo ${idx + 1}`}
                  className="max-w-[15rem]"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
