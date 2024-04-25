import { TbDiamondsFilled } from "react-icons/tb";
import Content from "./Content";
import { MdOutlinePanoramaWideAngleSelect } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Recruiting = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
      <div className="flex-1 flex flex-col gap-8">
        <Content
          icon={TbDiamondsFilled}
          title="Hire more efficiently"
          text="Spend less time wrangling calendars and more time meeting candidates."
        />
        <Content
          icon={IoSpeedometer}
          title="Speed up your recruiting cycle"
          text="Book interviews in seconds and reduce time-to-fill."
        />
        <Content
          icon={MdOutlinePanoramaWideAngleSelect}
          title="Improve the candidate experience"
          text="Eliminate friction and make your recruiting process a competitive advantage."
        />

        <Link
          to="/sale"
          className="capitalize text-primary text-xl tracking-normal leading-none self-start flex justify-center items-center gap-3"
        >
          learn more
          <ChevronRight className="mt-1" />
        </Link>
      </div>
      <div className="flex-1">
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/6tvfCn8IijfbV70XhsKh0o/1ee63bcf6f7a0071018821453e0c0dd5/Calendly-Recruiting.png?q=85&fm=webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Recruiting;
