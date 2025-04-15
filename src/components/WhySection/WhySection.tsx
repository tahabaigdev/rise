import { useState } from "react";
import Heading1 from "../ui/Heading1";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Plus } from "lucide-react";

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
  { label: "Why RadixTech", value: "Why RadixTech" },
  { label: "Our Partners", value: "Our Partners" },
  { label: "Technology Expertise", value: "Technology Expertise" },
];

// Accordion data per tab
const accordionData: Record<string, AccordionItemData[]> = {
  "Why RadixTech": [
    {
      title: "Contextual Understanding",
      content:
        "We have a deep understanding of the humanitarian and development sectors' ways of working. Our products are designed to connect a diverse range of users, enabling them to align efforts through a unified decision-making wheel.",
    },
    {
      title: "Collaborative Design",
      content:
        "We co-create products with users through a participatory process that ensures the platforms reflect real needs and operational realities.",
    },
    {
      title: "Collaborative Design",
      content:
        "We co-create products with users through a participatory process that ensures the platforms reflect real needs and operational realities.",
    },
  ],
  "Our Partners": [
    {
      title: "Trusted by Leading Orgs",
      content:
        "Our partners include NGOs, UN agencies, and government bodies who trust our systems to power their data and decision-making workflows.",
    },
    {
      title: "Long-Term Collaboration",
      content:
        "We build long-lasting relationships that grow with our partners’ evolving needs and challenges.",
    },
  ],
  "Technology Expertise": [
    {
      title: "Modern Tech Stack",
      content:
        "Our platforms are built with the latest tech including React, Node.js, PostgreSQL, GraphQL, and more.",
    },
    {
      title: "Cloud Native & Secure",
      content:
        "Security and scalability are baked in, with cloud-native deployments using industry best practices.",
    },
  ],
};

const WhySection = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].value);

  return (
    <section>
      <div className="container py-[6rem]">
        <Heading1
          title="Why RISE"
          subtitle="Each platform simplifies a complex process and empowers people."
        />

        <div className="mx-auto mt-[4rem] max-w-[84rem]">
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
