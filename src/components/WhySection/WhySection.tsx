import { useState } from "react";
import Heading1 from "@/components/ui/Heading1";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this

// Tab definition
type Tab = {
  label: string;
  value: string;
};

// Accordion item definition
type AccordionItemData = {
  title: string;
  content: string;
};

// Tabs
const tabs: Tab[] = [
  { label: "Vision", value: "Vision" },
  { label: "Mission", value: "Mission" },
];

// Accordion data per tab
const accordionData: Record<string, AccordionItemData[]> = {
  Vision: [
    {
      title: "Engineering the Future",
      content:
        "We envision a future where industrial systems are not only reliable but smarter, safer, and more sustainable. Our goal is to lead innovation that powers progress across every sector we serve.",
    },
    {
      title: "Global Standards, Local Impact",
      content:
        "We aim to set global benchmarks in quality and reliability, while delivering solutions that are deeply grounded in the needs of local industries and communities.",
    },
    {
      title: " Sustainable Progress",
      content:
        "Our vision includes a strong focus on long-term sustainability — from minimizing downtime to optimizing energy efficiency and building solutions that stand the test of time.",
    },
  ],
  Mission: [
    {
      title: "Reliability Without Compromise",
      content:
        "We’re committed to engineering excellence that minimizes risk and maximizes uptime. Every solution we build reflects our dedication to reliability, efficiency, and long-term value.",
    },
    {
      title: "Partnership at Every Step",
      content:
        "We don’t just deliver projects — we build lasting relationships. From planning to execution and support, we collaborate closely with our clients to ensure total alignment and satisfaction.",
    },
  ],
};

const WhySection = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].value);

  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <section className="bg-[#F7F7F7]">
      <div className="container px-[2rem] py-[6rem] md:px-[0rem]">
        <div data-aos="fade-up">
          <Heading1
            title="Who We Are"
            subtitle="Engineering solutions with precision, purpose, and reliability."
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto mt-[4rem] max-w-[84rem]"
        >
          {/* Tabs */}
          <ul className="flex items-center justify-center gap-[2rem] border-b border-solid border-[#C9C9C9]">
            {tabs.map((item) => (
              <li key={item.value}>
                <button
                  onClick={() => setActiveTab(item.value)}
                  className={`${
                    activeTab === item.value
                      ? "border-b-[4px] border-[var(--primary-color)]"
                      : "border-b-[4px] border-transparent"
                  } inline-flex px-[2.4rem] py-[1.6rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-[-0.08px]`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Accordion */}
          <Accordion defaultValue="item-0" type="single" collapsible>
            {accordionData[activeTab]?.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="!border-b border-solid border-[#C9C9C9] pt-[2.8rem] pb-[3.2rem]"
              >
                <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal text-[var(--primary-color)] !no-underline hover:text-[#000000] data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                  <span>{item.title}</span>
                  <Plus className="size-[2rem] transition-transform duration-300" />
                </AccordionTrigger>
                <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                  <p>{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
