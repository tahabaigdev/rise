const GlobalSection = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-[var(--secondary-color)]">
      <div className="absolute top-0 right-[-35%] z-[9] opacity-70">
        {/* <GlobeComponent /> */}
      </div>

      <div className="pointer-events-none relative top-1/2 z-[10] container -translate-y-1/2">
        <div className="flex max-w-[54rem] flex-col gap-[2.4rem] pr-[12rem] pl-[1.6rem]">
          <h5 className="text-[1.8rem] leading-[2.8rem] font-medium tracking-[0.2px] text-[var(--primary-color)]">
            Global scale
          </h5>
          <h3 className="text-[3.8rem] leading-[4.8rem] font-medium tracking-[-0.2px] text-white">
            The backbone for global commerce
          </h3>
          <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#ADBDCC]">
            Stripe makes moving money as easy and programmable as moving data.
            Our teams are based in offices around the world and we process
            hundreds of billions of dollars each year for ambitious businesses
            of all sizes.
          </p>
        </div>

        <div className="mt-[6rem] grid grid-cols-4">
          <div className="flex flex-col gap-[.8rem] pr-[3.2rem] pl-[1.6rem]">
            <h4 className="text-[2.2rem] font-medium text-white">500M+</h4>

            <p className="text-[1.6rem] font-light text-[#ADBDCC]">
              API requests per day, peaking at 13,000 requests a second.
            </p>
          </div>

          <div className="flex flex-col gap-[.8rem] pr-[3.2rem] pl-[1.6rem]">
            <h4 className="text-[2.2rem] font-medium text-white">500M+</h4>

            <p className="text-[1.6rem] font-light text-[#ADBDCC]">
              API requests per day, peaking at 13,000 requests a second.
            </p>
          </div>

          <div className="flex flex-col gap-[.8rem] pr-[3.2rem] pl-[1.6rem]">
            <h4 className="text-[2.2rem] font-medium text-white">500M+</h4>

            <p className="text-[1.6rem] font-light text-[#ADBDCC]">
              API requests per day, peaking at 13,000 requests a second.
            </p>
          </div>

          <div className="flex flex-col gap-[.8rem] pr-[3.2rem] pl-[1.6rem]">
            <h4 className="text-[2.2rem] font-medium text-white">500M+</h4>

            <p className="text-[1.6rem] font-light text-[#ADBDCC]">
              API requests per day, peaking at 13,000 requests a second.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
