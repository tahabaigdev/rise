import Heading1 from "@/components/ui/Heading1";
import blogFirst from "../../assets/images/blog-img-1.jpg";
import blogSecond from "../../assets/images/blog-img-2.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this

const BlogSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <section className="bg-[#EFECEB]">
      <div className="container py-[6rem]">
        <div data-aos="fade-up">
          <Heading1
            title="Blogs"
            subtitle="Insights, innovations, and stories from the frontlines of industrial engineering."
          />
        </div>

        <div className="mt-[4rem] grid grid-cols-2 gap-[4rem]">
          <a
            href=""
            target="_blank"
            className="group"
            rel="noreferrer"
            data-aos="fade-left"
          >
            <div className="flex flex-col gap-[2rem]">
              <div className="shadow-shadow2 aspect-[1.5/1] overflow-hidden rounded-[1.2rem] border border-[#e9e2da] bg-amber-200">
                <img
                  src={blogFirst}
                  alt="Image"
                  className="h-full w-full object-cover object-center transition-all duration-300 ease-out group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex flex-col gap-[1rem]">
                <h4 className="text-[2rem] leading-[1.6rem] font-medium capitalize">
                  Preventive Maintenance Strategies That Work
                </h4>

                <p className="text-[1.6rem] font-light">
                  Learn how top industrial teams reduce downtime with proactive
                  maintenance plans. We explore cost-effective techniques and
                  real-world strategies used across high-demand environments.
                </p>
              </div>
            </div>
          </a>

          <a
            href=""
            target="_blank"
            className="group"
            rel="noreferrer"
            data-aos="fade-right"
          >
            <div className="flex flex-col gap-[2rem]">
              <div className="shadow-shadow2 aspect-[1.5/1] overflow-hidden rounded-[1.2rem] border border-[#e9e2da] bg-amber-200">
                <img
                  src={blogSecond}
                  alt="Image"
                  className="h-full w-full object-cover object-center transition-all duration-300 ease-out group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex flex-col gap-[1rem]">
                <h4 className="text-[2rem] leading-[1.6rem] font-medium capitalize">
                  Industrial Automation: What’s Next in 2025?
                </h4>

                <p className="text-[1.6rem] font-light">
                  Automation is evolving fast. Discover the latest trends
                  shaping the future of industrial systems — from smart sensors
                  and robotics to AI-driven control panels.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
