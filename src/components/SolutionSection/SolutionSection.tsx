import { CloudCog } from "lucide-react";
import Heading1 from "../ui/Heading1";

const solutionsData = [
  {
    icon: CloudCog,
    title: "Simple",
    subTitle:
      "We simplify user experiences to make data-driven decision-making easier for all users",
  },

  {
    icon: CloudCog,
    title: "GDPR Ready",
    subTitle:
      "With GDPR-compliant security protocols, RadixTech ensures strong governance, protecting your data and privacy.",
  },

  {
    icon: CloudCog,
    title: "Intelligent",
    subTitle:
      "Our platform adapts to your organization's needs, leveraging data intelligence for optimized performance.",
  },

  {
    icon: CloudCog,
    title: "Seamless Integrations",
    subTitle:
      "RadixTech integrates with critical systems, such as MEAL, HR, Finance, and Supply Chain tools, to streamline workflows.",
  },
];

const SolutionSection = () => {
  return (
    <section>
      <div className="container py-[6rem]">
        <div>
          <Heading1
            title="Solutions"
            subtitle="Each platform simplifies a complex process and empowers people."
          />
        </div>

        <div className="mt-[8rem]">
          <div className="grid grid-cols-1 gap-[3.2rem] lg:grid-cols-2">
            {solutionsData.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="shadow-shadow2 hover:shadow-shadow3 flex flex-col items-center gap-[1rem] border-b border-[var(--primary-color)] bg-[#FAF8F5] p-[2rem] pb-[4rem] transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da] md:flex-row"
                >
                  <div>
                    <item.icon className="size-[5rem] stroke-1 text-[var(--primary-color)]" />
                  </div>

                  <div className="flex flex-col gap-[.5rem] text-left">
                    <h3 className="text-[2rem] leading-[3rem] font-normal tracking-[-0.36px]">
                      {item.title}
                    </h3>

                    <p className="max-w-[40rem] text-[1.4rem] leading-[3rem] font-light">
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
