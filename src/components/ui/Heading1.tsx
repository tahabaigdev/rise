import React from "react";

// Define types for the component props
interface HeadingProps {
  title: string; // Title for the first heading (h5)
  subtitle: string; // Subtitle for the second heading (h2)
}

const Heading1: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-[.5rem] text-center">
        <h5 className="text-[2rem] leading-[1.6rem] font-medium text-[var(--primary-color)] uppercase">
          {title}
        </h5>

        <h2 className="max-w-[110rem] text-[2.8rem] leading-[4rem] font-light tracking-[-0.48px]">
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default Heading1;
