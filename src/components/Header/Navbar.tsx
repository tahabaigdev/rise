import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FeaturesDropdown from "./FeaturesDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import ResourcesDropdown from "./ResourcesDropdown";

const navItems = [
  { label: "Features", hasDropdown: true, key: "features" },
  { label: "Solutions", hasDropdown: true, key: "solutions" },
  { label: "Enterprise", hasDropdown: false },
  { label: "Resources", hasDropdown: true, key: "resources" },
  { label: "Pricing", hasDropdown: false },
];

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleToggle = (key: string | undefined) => {
    if (!key) return;
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <nav>
      <ul className="flex items-center gap-[2rem]">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="relative"
            onMouseEnter={() =>
              item.hasDropdown && setActiveDropdown(item.key || item.label)
            }
            onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
          >
            {item.hasDropdown ? (
              <button
                onClick={() => handleToggle(item.key)}
                className="flex cursor-pointer gap-[.3rem] text-[1.5rem] font-normal"
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`relative top-[.7rem] size-[1.4rem] stroke-3 transition-transform duration-300 ${
                    activeDropdown === item.key ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            ) : (
              <a href="#" className="text-[1.5rem] font-normal hover:underline">
                {item.label}
              </a>
            )}

            {item.key === "features" && (
              <div
                className={`absolute top-full z-50 transition-all duration-300 ${
                  activeDropdown === "features"
                    ? "pointer-events-auto visible pt-[1.6rem] opacity-100"
                    : "pointer-events-none invisible pt-[0rem] opacity-0"
                }`}
              >
                <FeaturesDropdown />
              </div>
            )}

            {item.key === "solutions" && (
              <div
                className={`absolute top-full z-50 transition-all duration-300 ${
                  activeDropdown === "solutions"
                    ? "pointer-events-auto visible pt-[1.6rem] opacity-100"
                    : "pointer-events-none invisible pt-[0rem] opacity-0"
                }`}
              >
                <SolutionsDropdown />
              </div>
            )}

            {item.key === "resources" && (
              <div
                className={`absolute top-full left-[-18rem] z-50 transition-all duration-300 ${
                  activeDropdown === "resources"
                    ? "pointer-events-auto visible pt-[1.6rem] opacity-100"
                    : "pointer-events-none invisible pt-[0rem] opacity-0"
                }`}
              >
                <ResourcesDropdown />
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
