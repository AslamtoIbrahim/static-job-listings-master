import type { Job } from "../utils/types";
import Featured from "./Featured";
import Skills from "./Skills";
import New from "./New";
import placeHolder from "../../public/sources/images/myhome.svg";

const ItemCard = ({ job }: { job: Job }) => {

  return (
    <div
      className={`card pd-x relative py-5 md:flex md:items-start md:justify-between md:gap-4 lg:py-8 xl:gap-8 2xl:items-center 2xl:gap-0 ${job.featured && "featured"}`}
    >
      <div className="lg:flex lg:items-center lg:gap-6">
        <section className="absolute -top-5 size-11 lg:static lg:size-16 xl:size-20">
          <img
            className="rounded-full"
            src={job.logo}
            alt="company logo"
            onError={(e) => (e.currentTarget.src = `${placeHolder}`)}
          />
        </section>
        <section className="mt-4 space-y-4 lg:mt-0">
          <div className="flex items-center gap-2 xl:gap-3">
            <p className="font-spartan status mr-4 font-semibold text-green-400">
              {job.company}
            </p>
            {job.new && <New />}
            {job.featured && <Featured />}
          </div>
          <p className="status cursor-pointer font-bold text-green-900 hover:text-green-400">
            {job.position}
          </p>
          <div className="status flex items-center gap-2 font-medium text-gray-400">
            <p>{job.postedAt}</p>
            <div className="point" />
            <p>{job.contract}</p>
            <div className="point" />
            <p>{job.location}</p>
          </div>
        </section>
      </div>
      <hr className="my-4 text-gray-400/50 lg:hidden" />
      <section className="flex flex-wrap items-center gap-3 md:mt-3 lg:mt-0 xl:gap-4">
        <Skills text={job.role} />
        <Skills text={job.level} />
        {job.languages.map((l) => (
          <Skills key={l} text={l} />
        ))}
        {job.tools.map((t) => (
          <Skills key={t} text={t} />
        ))}
      </section>
    </div>
  );
};

export default ItemCard;
