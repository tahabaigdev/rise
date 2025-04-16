import React from "react";
import Marquee from "react-fast-marquee";
import clientLogo1 from "../../assets/images/client-logo-1.webp";
import clientLogo2 from "../../assets/images/client-logo-2.webp";
import clientLogo3 from "../../assets/images/client-logo-3.webp";
import clientLogo4 from "../../assets/images/client-logo-4.webp";

// Define type for the array of image imports
const marqueeItems: string[] = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
];

const TrustedSection: React.FC = () => {
  return (
    <div className="overflow-hidden bg-[var(--secondary-color)] py-[3rem]">
      <div className="container flex flex-row items-center gap-[4rem]">
        <div className="w-[19.3rem]">
          <h4 className="text-left text-[2rem] leading-[3rem] font-normal text-white">
            Trusted by worldwide clients
          </h4>
        </div>

        <div className="w-[100.7rem]">
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
      </div>
    </div>
  );
};

export default TrustedSection;
