import { MoveRight } from "lucide-react";

const departments = [
  "Engineering",
  "IT",
  "Customer Service",
  "Sales",
  "Project Management",
  "Marketing",
  "Human Resources",
  "Security",
];

const features = [
  { label: "Task Management", value: "task" },
  { label: "Scale", value: "scale" },
  { label: "Engagement", value: "engagement" },
  { label: "Trust", value: "trust" },
];

const FeaturesDropdown = () => {
  return (
    <div className="shadow-01 flex overflow-hidden rounded-[8px] bg-white">
      <div className="grid min-w-[59rem] grid-cols-3 gap-[1.6rem] p-[1.6rem]">
        {/* By Department */}
        <div className="flex flex-col gap-[1.6rem]">
          <h4 className="text-[1.4rem] font-medium tracking-[0.8px] uppercase">
            By Department
          </h4>
          <ul className="flex flex-col gap-[1.6rem]">
            {departments.map((dept) => (
              <li key={dept}>
                <a
                  href="#"
                  className="text-[1.5rem] font-light hover:text-[var(--primary-color)] hover:underline"
                >
                  {dept}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* By Industry */}
        <div className="flex flex-col gap-[1.6rem]">
          <h4 className="text-[1.4rem] font-medium tracking-[0.8px] uppercase">
            By Industry
          </h4>
          <ul className="flex flex-col gap-[1.6rem]">
            {departments.map((dept) => (
              <li key={dept}>
                <a
                  href="#"
                  className="text-[1.5rem] font-light hover:text-[var(--primary-color)] hover:underline"
                >
                  {dept}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* By Industry */}
        <div className="flex flex-col gap-[1.6rem]">
          <h4 className="text-[1.4rem] font-medium tracking-[0.8px] uppercase">
            By Industry
          </h4>
          <ul className="flex flex-col gap-[1.6rem]">
            {departments.map((dept) => (
              <li key={dept}>
                <a
                  href="#"
                  className="text-[1.5rem] font-light hover:text-[var(--primary-color)] hover:underline"
                >
                  {dept}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[22.5rem] bg-[#f4ede4] p-[1.6rem]">
        <div className="mb-[3.2rem] flex flex-col gap-[1rem] border-b border-[#00000026] pb-[3.2rem]">
          <h4 className="text-[1.4rem] font-medium tracking-[0.8px] uppercase">
            Templates
          </h4>
          <a href="#" className="flex flex-col gap-[1rem]">
            <div className="h-[10rem] w-full bg-amber-400"></div>
            <p className="text-[1.5rem] font-light">
              Start work faster with pre-made templates for every task.
            </p>
            <div className="flex gap-[.8rem] text-[1.5rem] font-medium text-[var(--primary-color)]">
              <span>See all Templates</span>
              <MoveRight className="relative top-[.2rem] size-[2.4rem] stroke-1" />
            </div>
          </a>
        </div>
        <ul className="flex flex-col gap-[1.6rem]">
          {features.map((feature) => (
            <li key={feature.value}>
              <a
                href={`#${feature.value}`}
                className="text-[1.5rem] font-light hover:text-[var(--primary-color)] hover:underline"
              >
                {feature.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturesDropdown;
