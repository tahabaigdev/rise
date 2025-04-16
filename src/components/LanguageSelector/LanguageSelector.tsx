import { Navigation } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Flag from "react-world-flags";

// Define the types
interface Country {
  name: string;
  code: string;
  languages: string[];
}

const countries: Country[] = [
  { name: "Australia", code: "AU", languages: ["English"] },
  { name: "Austria", code: "AT", languages: ["Deutsch", "English"] },
  {
    name: "Belgium",
    code: "BE",
    languages: ["Nederlands", "Français", "Deutsch", "English"],
  },
  { name: "Brazil", code: "BR", languages: ["Português", "English"] },
  { name: "Bulgaria", code: "BG", languages: ["English"] },
  { name: "Canada", code: "CA", languages: ["English", "Français"] },
  { name: "Croatia", code: "HR", languages: ["English", "Italiano"] },
  { name: "Cyprus", code: "CY", languages: ["English"] },
  { name: "Czech Republic", code: "CZ", languages: ["English"] },
  { name: "Denmark", code: "DK", languages: ["English"] },
  { name: "Estonia", code: "EE", languages: ["English"] },
  { name: "Finland", code: "FI", languages: ["English", "Svenska"] },
  { name: "France", code: "FR", languages: ["Français", "English"] },
  { name: "Germany", code: "DE", languages: ["Deutsch", "English"] },
  { name: "Gibraltar", code: "GI", languages: ["English"] },
  { name: "Greece", code: "GR", languages: ["English"] },
  { name: "Hong Kong", code: "HK", languages: ["English", "简体中文"] },
  { name: "Hungary", code: "HU", languages: ["English"] },
  { name: "India", code: "IN", languages: ["English"] },
  { name: "Ireland", code: "IE", languages: ["English"] },
  { name: "Italy", code: "IT", languages: ["Italiano", "English"] },
  { name: "Japan", code: "JP", languages: ["日本語", "English"] },
  { name: "Latvia", code: "LV", languages: ["English"] },
  { name: "Liechtenstein", code: "LI", languages: ["Deutsch", "English"] },
  { name: "Lithuania", code: "LT", languages: ["English"] },
  {
    name: "Luxembourg",
    code: "LU",
    languages: ["Français", "Deutsch", "English"],
  },
  { name: "Malaysia", code: "MY", languages: ["English", "简体中文"] },
  { name: "Malta", code: "MT", languages: ["English"] },
  { name: "Mexico", code: "MX", languages: ["Español", "English"] },
  { name: "Netherlands", code: "NL", languages: ["Nederlands", "English"] },
  { name: "New Zealand", code: "NZ", languages: ["English"] },
  { name: "Norway", code: "NO", languages: ["English"] },
  { name: "Poland", code: "PL", languages: ["English"] },
  { name: "Portugal", code: "PT", languages: ["Português", "English"] },
  { name: "Romania", code: "RO", languages: ["English"] },
  { name: "Singapore", code: "SG", languages: ["English", "简体中文"] },
  { name: "Slovakia", code: "SK", languages: ["English"] },
  { name: "Slovenia", code: "SI", languages: ["English", "Italiano"] },
  { name: "Spain", code: "ES", languages: ["Español", "English"] },
  { name: "Sweden", code: "SE", languages: ["Svenska", "English"] },
  {
    name: "Switzerland",
    code: "CH",
    languages: ["Deutsch", "Français", "Italiano", "English"],
  },
  { name: "Thailand", code: "TH", languages: ["ไทย", "English"] },
  { name: "United Arab Emirates", code: "AE", languages: ["English"] },
  { name: "United Kingdom", code: "GB", languages: ["English"] },
  {
    name: "United States",
    code: "US",
    languages: ["English", "Español", "简体中文"],
  },
];

const LanguageSelector: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // New state to hold selected country and language
  const [selectedCountry, setSelectedCountry] = useState<Country | null>({
    name: "United Kingdom",
    code: "GB",
    languages: ["English"],
  });
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  const toggleCountryList = () => setOpen((prev) => !prev);

  const handleLanguageClick = (country: Country, language: string) => {
    setSelectedCountry(country);
    setSelectedLanguage(language);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <button
        onClick={toggleCountryList}
        className="inline-flex w-max cursor-pointer justify-center rounded-[1.65rem] text-[1.5rem] font-light transition-all duration-200 hover:opacity-90"
      >
        <Navigation className="relative top-[6px] right-[.6rem] size-[1.5rem] fill-black transition-all duration-200" />
        <span>
          {selectedCountry?.name} ({selectedLanguage})
        </span>
      </button>

      <div
        className={`shadow-01 absolute left-0 z-[1] w-full rounded-[8px] bg-[#F6F9FC] py-[1.6rem] transition-all duration-300 ${
          open
            ? "visible top-[-88%] opacity-100"
            : "invisible top-[-85%] opacity-0"
        }`}
      >
        <div className="grid grid-cols-4 gap-y-[.8rem]">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex items-center gap-[1rem] px-[1.6rem]"
            >
              <Flag code={country.code} className="w-[2.1rem]" />

              <div>
                <div className="text-[1.5rem] font-light capitalize">
                  {country.name}
                </div>
                <div className="flex items-center gap-[.5rem]">
                  {country.languages.map((lang, idx) => (
                    <button
                      key={idx}
                      className="cursor-pointer text-[1.2rem] leading-[1.6rem] font-light text-gray-600 capitalize transition-all duration-200 hover:text-black"
                      onClick={() => handleLanguageClick(country, lang)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
