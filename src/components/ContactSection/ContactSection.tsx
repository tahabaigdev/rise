import ContactForm from "./ContactForm";
import CtaButton from "../ui/CtaButton";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <section className="bg-[#3A53A1]">
      <div className="overflow-x-hidden">
        <div className="container py-[1rem]">
          <div className="relative z-[1] grid grid-cols-2 gap-[4rem] overflow-hidden rounded-[1.2rem] p-[4rem]">
            <div data-aos="fade-up">
              <ContactForm />
            </div>

            <div className="mt-[2rem] flex flex-col items-start justify-end text-left text-white">
              <h3
                data-aos="fade-right"
                className="text-left text-[5rem] leading-[6rem] font-medium"
              >
                Let’s Build Something Reliable
              </h3>

              <p
                data-aos="fade-right"
                className="mt-[1rem] mb-[2rem] text-[1.8rem] leading-[3.24rem] font-light"
              >
                Whether you’re looking for expert consultation, a custom
                solution, or long-term partnership — we’re here to help. Reach
                out to connect with our team of engineering professionals.
              </p>

              <div data-aos="fade-right">
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
      </div>
    </section>
  );
};

export default ContactSection;
