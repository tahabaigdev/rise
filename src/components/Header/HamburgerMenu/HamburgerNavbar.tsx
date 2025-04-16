import { Building, ChevronRight } from "lucide-react";

type HamburgerNavbarProps = {
  activePopup: "products" | "solutions" | null;
  setActivePopup: React.Dispatch<
    React.SetStateAction<"products" | "solutions" | null>
  >;
};

const productPopupData = [
  {
    id: 0,
    link: "",
    text: "Enterprises",
  },
  {
    id: 1,
    link: "",
    text: "Enterprises",
  },
  {
    id: 2,
    link: "",
    text: "Enterprises",
  },
  {
    id: 3,
    link: "",
    text: "Enterprises",
  },
  {
    id: 4,
    link: "",
    text: "Enterprises",
  },
  {
    id: 5,
    link: "",
    text: "Enterprises",
  },

  {
    id: 6,
    link: "",
    text: "Enterprises",
  },
  {
    id: 7,
    link: "",
    text: "Enterprises",
  },
  {
    id: 8,
    link: "",
    text: "Enterprises",
  },
  {
    id: 9,
    link: "",
    text: "Enterprises",
  },
  {
    id: 10,
    link: "",
    text: "Enterprises",
  },
  {
    id: 11,
    link: "",
    text: "Enterprises",
  },
];

const HamburgerNavbar: React.FC<HamburgerNavbarProps> = ({
  activePopup,
  setActivePopup,
}) => {
  return (
    <ul className="mx-[1.6rem] my-[2rem]">
      <li className="border-b-[2px] border-dashed border-[#e4e4e4]">
        <button
          onClick={() => setActivePopup("products")}
          className="flex w-full cursor-pointer items-center justify-between py-[2rem] text-[1.8rem] font-medium tracking-[0.2px] text-[var(--secondary-color)] transition-all duration-200 hover:opacity-50"
        >
          <span>Products</span>
          <ChevronRight />
        </button>

        {/* Products Popup */}
        <div
          className={`absolute top-0 flex size-full flex-col gap-[.4rem] overflow-y-auto bg-[#F6F9FB] transition-all duration-300 ${activePopup === "products" ? "pointer-events-auto visible left-0 opacity-100" : "pointer-events-none invisible left-full opacity-0"}`}
        >
          <div className="bg-white px-[1.6rem] py-[2.4rem]">
            <h5 className="text-[1.3rem] font-normal text-[var(--secondary-color)] uppercase">
              By Taha
            </h5>

            <ul className="flex flex-col gap-[2.4rem] py-[1.2rem]">
              {productPopupData.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="group flex items-center gap-[1rem] text-[1.6rem] font-normal"
                  >
                    <Building className="size-[1.6rem] opacity-60 transition-all duration-200 group-hover:opacity-100" />{" "}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>

      <li className="border-b-[2px] border-dashed border-[#e4e4e4]">
        <button
          onClick={() => setActivePopup("solutions")}
          className="flex w-full cursor-pointer items-center justify-between py-[2rem] text-[1.8rem] font-medium tracking-[0.2px] text-[var(--secondary-color)] transition-all duration-200 hover:opacity-50"
        >
          <span>Solutions</span>
          <ChevronRight />
        </button>

        {/* Solutions Popup */}
        <div
          className={`absolute top-0 flex size-full flex-col gap-[.4rem] overflow-y-auto bg-[#F6F9FB] transition-all duration-300 ${activePopup === "solutions" ? "pointer-events-auto visible left-0 opacity-100" : "pointer-events-none invisible left-full opacity-0"}`}
        >
          <div className="bg-white px-[1.6rem] py-[2.4rem]">
            <h5 className="text-[1.3rem] font-normal text-[var(--secondary-color)] uppercase">
              By Stage
            </h5>

            <ul className="flex flex-col gap-[2.4rem] py-[1.2rem]">
              {productPopupData.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="group flex items-center gap-[1rem] text-[1.6rem] font-normal"
                  >
                    <Building className="size-[1.6rem] opacity-60 transition-all duration-200 group-hover:opacity-100" />{" "}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>

      <li className="border-b-[2px] border-dashed border-[#e4e4e4]">
        <a
          href=""
          className="flex w-full items-center justify-between py-[2rem] text-[1.8rem] font-medium tracking-[0.2px] text-[var(--secondary-color)] transition-all duration-200 hover:opacity-50"
        >
          Pricing
        </a>
      </li>
    </ul>
  );
};

export default HamburgerNavbar;
