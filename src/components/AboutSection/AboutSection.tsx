import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutSection = () => {
  return (
    <section className="bg-[var(--secondary-color)]">
      <div className="container grid grid-cols-1 items-center gap-[4rem] py-[6rem] lg:grid-cols-2 lg:items-start">
        <div className="flex items-start justify-center">
          <div className="h-[33rem] w-full max-w-[55rem] overflow-hidden rounded-[1.2rem] bg-amber-300"></div>
        </div>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div>
            <h5 className="text-[2rem] leading-[1.6rem] font-medium text-white uppercase">
              About Us
            </h5>

            <h2 className="text-[2.8rem] leading-[4rem] font-light tracking-[-0.48px] text-white">
              We specialize in innovative digital solutions
            </h2>
          </div>

          <p className="my-[3rem] max-w-full text-[1.8rem] leading-[3rem] font-light text-white">
            RadixTech partners with nonprofits to support decision making in
            addressing their most critical challenges and unlocking growth and
            overseas aid worker jobs opportunities. We understand the unique
            decision-making processes and challenges faced by nonprofit
            organizations. Beyond just generating ideas, we focus on designing
            strategic solutions and implementing decisive actions that drive
            meaningful impact.
          </p>

          <Accordion className="w-full" type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal text-white !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>What We Do</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light text-white">
                <p>
                  We provide data-driven solutions that empower organizations to
                  make informed decisions in humanitarian aid and development.
                  We simplifying data for effective aid and humanitarian action.
                  Making complex data easier to understand and use, enabling aid
                  workers and humanitarian organizations to make more informed,
                  timely decisions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal text-white !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>Who We Are</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light text-white">
                <p>
                  We provide data-driven solutions that empower organizations to
                  make informed decisions in humanitarian aid and development.
                  We simplifying data for effective aid and humanitarian action.
                  Making complex data easier to understand and use, enabling aid
                  workers and humanitarian organizations to make more informed,
                  timely decisions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal text-white !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>What We Think</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light text-white">
                <p>
                  We provide data-driven solutions that empower organizations to
                  make informed decisions in humanitarian aid and development.
                  We simplifying data for effective aid and humanitarian action.
                  Making complex data easier to understand and use, enabling aid
                  workers and humanitarian organizations to make more informed,
                  timely decisions.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
