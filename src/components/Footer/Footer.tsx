import Logo from "../../assets/images/logo.webp";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const productsItem = [
  "Pricing",
  "Atlas",
  "Billing",
  "Capital",
  "Checkout",
  "Climate",
  "Connect",
  "Data Pipeline",
  "Elements",
  "Financial Connections",
  "Identity",
  "Invoicing",
  "Issuing",
  "Link",
  "Payments",
  "Payment Links",
  "Payouts",
  "Radar",
  "Revenue Recognition",
  "Sigma",
  "Tax",
  "Terminal",
  "Treasury",
];

const Footer = () => {
  return (
    <footer>
      <div className="container py-[10rem]">
        <div className="relative grid grid-cols-4">
          <div className="flex flex-col gap-[1rem]">
            <a href="" className="inline-flex max-w-[7rem]">
              <img
                src={Logo}
                alt="Brand Logo"
                className="size-full object-cover"
              />
            </a>

            <LanguageSelector />
          </div>
          <div className="flex flex-col gap-[1rem]">
            <h5 className="text-[1.4rem] font-normal tracking-[0.2px]">
              Products & Pricing
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
              Products & Pricing
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
              Products & Pricing
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
        </div>

        <p className="mt-[4rem] text-[1.4rem] font-light">© 2025 RISE, Eng.</p>
      </div>
    </footer>
  );
};

export default Footer;
