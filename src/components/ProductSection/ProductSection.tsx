import { useState } from "react";
import { Plus } from "lucide-react";
import Heading1 from "@/components/ui/Heading1";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TabValue = "mis" | "me" | "registration" | "aid" | "datahub";

interface Tab {
  label: string;
  value: TabValue;
}

interface TabContent {
  overview: string;
  keyFeatures: string;
  sharedFeatures: string;
  image: string; // Could also be a component or image URL
}

const tabs: Tab[] = [
  {
    label: "Management Information System (MIS)",
    value: "mis",
  },
  {
    label: "Monitoring & Evaluation (M&E) / MEAL System",
    value: "me",
  },
  {
    label: "Beneficiary Registration System",
    value: "registration",
  },
  {
    label: "Cash and Humanitarian Aid Distribution System",
    value: "aid",
  },
  {
    label: "DataHub",
    value: "datahub",
  },
];

const tabContent: Record<TabValue, TabContent> = {
  mis: {
    overview:
      "Comprehensive platform for integrating and analysing data from various humanitarian sources. It collects and analyses data from a wide range of tools...",
    keyFeatures:
      "Comprehensive platform for integrating and analysing data from various humanitarian sources. It collects and analyses data from a wide range of tools...",
    sharedFeatures:
      "Comprehensive platform for integrating and analysing data from various humanitarian sources. It collects and analyses data from a wide range of tools...",
    image: "bg-red-300",
  },
  me: {
    overview:
      "MEAL System ensures continuous monitoring, evaluation, accountability, and learning throughout project lifecycle.",
    keyFeatures:
      "Comprehensive platform for integrating and analysing data from various humanitarian sources. It collects and analyses data from a wide range of tools...",
    sharedFeatures:
      "Comprehensive platform for integrating and analysing data from various humanitarian sources. It collects and analyses data from a wide range of tools...",
    image: "bg-green-300",
  },
  registration: {
    overview:
      "Secure and efficient platform for registering beneficiaries, ensuring accurate data collection and easy retrieval.",
    keyFeatures:
      "Comprehensive platform for integrating and analysing data from various humanitarian sources. It collects and analyses data from a wide range of tools...",
    sharedFeatures:
      "Comprehensive platform for integrating and analysing data from various humanitarian sources. It collects and analyses data from a wide range of tools...",
    image: "bg-blue-300",
  },
  aid: {
    overview:
      "System for streamlined distribution of cash and humanitarian aid, including tracking and reporting features.",
    keyFeatures:
      "Comprehensive platform for integrating and analysing data from various humanitarian sources. It collects and analyses data from a wide range of tools...",
    sharedFeatures:
      "Comprehensive platform for integrating and analysing data from various humanitarian sources. It collects and analyses data from a wide range of tools...",
    image: "bg-yellow-300",
  },
  datahub: {
    overview:
      "Centralized data warehouse for storing, processing, and visualizing humanitarian information in real time.",
    keyFeatures:
      "Comprehensive platform for integrating and analysing data from various humanitarian sources. It collects and analyses data from a wide range of tools...",
    sharedFeatures:
      "Comprehensive platform for integrating and analysing data from various humanitarian sources. It collects and analyses data from a wide range of tools...",
    image: "bg-purple-300",
  },
};

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState<TabValue>("mis");

  return (
    <div className="py-[6rem]">
      <div className="container grid gap-[6rem]">
        <div>
          <Heading1
            title="Products"
            subtitle="Each platform simplifies a complex process and empowers people."
          />
        </div>

        <div className="flex flex-col items-center gap-[2rem]">
          <div>
            <ul className="mb-[2rem] flex flex-wrap items-center justify-center gap-[10px]">
              {tabs.map((item) => (
                <li key={item.value}>
                  <button
                    className={`inline-flex h-[4rem] min-w-[4.7rem] cursor-pointer items-center justify-center rounded-[2rem] px-[1.6rem] py-[1.2rem] text-[1.6rem] leading-[2.4rem] font-light transition-colors duration-200 ${
                      activeTab === item.value
                        ? "bg-[var(--primary-color)] text-white"
                        : "bg-[#eeede9] text-[#000000]"
                    }`}
                    onClick={() => setActiveTab(item.value)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid w-full grid-cols-2 gap-[4rem]">
            {/* Accordion Side */}
            <div>
              <Accordion defaultValue="item-1" type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="!border-b border-solid border-[#C9C9C9] pt-[2.8rem] pb-[3.2rem]"
                >
                  <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal text-[var(--primary-color)] !no-underline hover:text-[#000000] data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                    <span>Overview</span>
                    <Plus className="size-[2rem] transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                    <p>{tabContent[activeTab].overview}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="!border-b border-solid border-[#C9C9C9] pt-[2.8rem] pb-[3.2rem]"
                >
                  <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal text-[var(--primary-color)] !no-underline hover:text-[#000000] data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                    <span>Key Features</span>
                    <Plus className="size-[2rem] transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                    <p>{tabContent[activeTab].keyFeatures}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="!border-b border-solid border-[#C9C9C9] pt-[2.8rem] pb-[3.2rem]"
                >
                  <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal text-[var(--primary-color)] !no-underline hover:text-[#000000] data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                    <span>Shared Features</span>
                    <Plus className="size-[2rem] transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                    <p>{tabContent[activeTab].sharedFeatures}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Image Side */}
            <div className="flex items-start justify-center">
              <div
                className={`h-[33rem] w-full max-w-[55rem] overflow-hidden rounded-[1.2rem] ${tabContent[activeTab].image}`}
              >
                <p className="p-4 text-white">Image for {activeTab}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
