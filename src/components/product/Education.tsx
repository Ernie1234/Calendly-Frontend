import { TbDiamondsFilled } from "react-icons/tb";
import Content from "./Content";
import { MdOutlinePanoramaWideAngleSelect } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
      <div className="flex-1 flex flex-col gap-8">
        <Content
          icon={TbDiamondsFilled}
          title="Drive more valuable connections with automated scheduling"
          text="Spend more quality time supporting students, whether you’re advising, tutoring, career planning, or counseling."
        />
        <Content
          icon={IoSpeedometer}
          title="Increase communication and foster coordination"
          text="Make your schedule more accessible to students and prospects, allowing them to book time when they need it most."
        />
        <Content
          icon={MdOutlinePanoramaWideAngleSelect}
          title="Deliver a better educational experience"
          text="Focus on what matters most: supporting and connecting with your students, so they can succeed."
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
          src="https://images.ctfassets.net/k0lk9kiuza3o/17K0lFIafYVanv5goumK7h/7bc0a909e218c584272f79792bd00ca1/Calendly-Education.png?q=85&fm=webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Education;
