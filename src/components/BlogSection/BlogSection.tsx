import Heading1 from "../ui/Heading1";

const BlogSection = () => {
  return (
    <section>
      <div className="container py-[6rem]">
        <div>
          <Heading1
            title="Blogs"
            subtitle="Each platform simplifies a complex process and empowers people."
          />
        </div>

        <div className="mt-[4rem] grid grid-cols-2 gap-[4rem]">
          <a href="" target="_blank" className="group" rel="noreferrer">
            <div className="flex flex-col gap-[2rem]">
              <div className="shadow-shadow2 aspect-[1.5/1] overflow-hidden rounded-[1.2rem] border border-[#e9e2da] bg-amber-200"></div>

              <div className="flex flex-col gap-[1rem]">
                <h4 className="text-[2rem] leading-[1.6rem] font-medium capitalize">
                  Insights
                </h4>

                <p className="text-[1.6rem] font-light">
                  We cover pertinent questions, provides practical advice and
                  strategies to navigate data, technology, and digital
                  transformation, helping professionals unlock innovative
                  solutions.
                </p>
              </div>
            </div>
          </a>

          <a href="" target="_blank" className="group" rel="noreferrer">
            <div className="flex flex-col gap-[2rem]">
              <div className="shadow-shadow2 aspect-[1.5/1] overflow-hidden rounded-[1.2rem] border border-[#e9e2da] bg-amber-200"></div>

              <div className="flex flex-col gap-[1rem]">
                <h4 className="text-[2rem] leading-[1.6rem] font-medium capitalize">
                  Insights
                </h4>

                <p className="text-[1.6rem] font-light">
                  We cover pertinent questions, provides practical advice and
                  strategies to navigate data, technology, and digital
                  transformation, helping professionals unlock innovative
                  solutions.
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
