import { Facebook, Linkedin } from "lucide-react";
import Logo from "../../assets/images/logo.png";

const productsItem = [
  "Contact",
  "Software Support",
  "Incident Report",
  "Resources",
  "RISE Patents",
  "Events",
  "Alumni",
  "Glossary",
];

const productsItem2 = [
  "Careers",
  "Newsroom",
  "Investor Relations",
  "Other Industries",
  "Governance",
];

const Footer = () => {
  return (
    <footer className="bg-[#EFECEB]">
      <div className="container py-[10rem]">
        <div className="relative grid grid-cols-4">
          <div className="flex flex-col gap-[2rem]">
            <a href="" className="inline-flex max-w-[18rem]">
              <img
                src={Logo}
                alt="Brand Logo"
                className="size-full object-cover"
              />
            </a>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h5 className="text-[1.4rem] font-normal tracking-[0.2px]">
              Helpful Links
            </h5>

            <ul className="">
              {productsItem.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[1.4rem] font-light transition-all duration-200 hover:opacity-70"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h5 className="text-[1.4rem] font-normal tracking-[0.2px]">
              About RISE
            </h5>

            <ul className="">
              {productsItem2.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[1.4rem] font-light transition-all duration-200 hover:opacity-70"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h5 className="text-[1.4rem] font-normal tracking-[0.2px]">
              Follow us
            </h5>

            <ul className="flex items-center gap-[2rem]">
              <li className="cursor-pointer">
                <Facebook className="fill-black stroke-1" />
              </li>

              <li className="cursor-pointer">
                <Linkedin className="fill-black stroke-1" />
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-[4rem] text-[1.4rem] font-light">© 2025 RISE, Eng.</p>
      </div>
    </footer>
  );
};

export default Footer;
