import { Contact, UserRound } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="container py-[6rem]">
        <div className="relative z-[1] grid grid-cols-2 items-end gap-[4rem] overflow-hidden rounded-[1.2rem] p-[4rem]">
          <div className="absolute bottom-0 left-0 z-[-1] h-full w-full rounded-[1.2rem] bg-[var(--primary-color)]" />

          <div>
            <div className="mt-[2rem] flex flex-col items-start text-left">
              <h3 className="text-[3rem] leading-[4rem] font-light tracking-[-0.64px] text-white">
                Schedule a Conversation
              </h3>

              <p className="mt-[1rem] mb-[2rem] text-[1.8rem] leading-[3.24rem] font-light text-white">
                Schedule a conversation with one of our experienced consultants.
                Tell us about the workflows you’re trying to improve, for a
                tailored demonstration or answers to your questions about
                RadixTech.
              </p>

              <div className="flex justify-start">
                <a
                  href="mailto:info@RadixTech.org"
                  className="inline-flex justify-center rounded-[1.65rem] bg-black px-[1.6rem] pt-[.3rem] pb-[.6rem] text-[1.5rem] font-normal text-white transition-all duration-200 hover:bg-white hover:text-black"
                >
                  <span>Talk to an Expert</span>

                  <Contact className="relative top-[6px] left-[.4rem] size-[1.5rem] transition-all duration-200" />
                </a>
              </div>
            </div>

            <div className="mt-[2rem] flex flex-col items-start text-left">
              <h3 className="text-left text-[3rem] leading-[4rem] font-light tracking-[-0.64px] text-white">
                We’d love to hear from you
              </h3>

              <p className="mt-[1rem] mb-[2rem] text-[1.8rem] leading-[3.24rem] font-light text-white">
                Learn how we can solve data issues for your organization, with
                our tech platforms and services specially designed for
                humanitarian and development work.
              </p>

              <div className="flex justify-start">
                <a
                  href="mailto:info@RadixTech.org"
                  className="inline-flex justify-center rounded-[1.65rem] bg-white px-[1.6rem] pt-[.3rem] pb-[.6rem] text-[1.5rem] font-normal text-black transition-all duration-200 hover:bg-black hover:text-white"
                >
                  <span>Get in Touch</span>

                  <UserRound className="relative top-[6px] left-[.4rem] size-[1.5rem] transition-all duration-200" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
