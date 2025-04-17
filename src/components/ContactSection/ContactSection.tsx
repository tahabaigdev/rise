import ContactForm from "./ContactForm";
import CtaButton from "../ui/CtaButton";

const ContactSection = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="container py-[6rem]">
        <div className="relative z-[1] grid grid-cols-2 gap-[4rem] overflow-hidden rounded-[1.2rem] p-[4rem]">
          <div>
            <ContactForm />
          </div>

          <div className="mt-[2rem] flex flex-col items-start text-left">
            <h3 className="text-left text-[5rem] leading-[6rem] font-medium">
              Let’s Build Something Reliable
            </h3>

            <p className="mt-[1rem] mb-[2rem] text-[1.8rem] leading-[3.24rem] font-light">
              Whether you’re looking for expert consultation, a custom solution,
              or long-term partnership — we’re here to help. Reach out to
              connect with our team of engineering professionals.
            </p>

            <CtaButton
              text="Explore"
              bgColor="bg-[var(--primary-color)]"
              textColor="text-white"
              href=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
