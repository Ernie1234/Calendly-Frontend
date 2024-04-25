import { TbDiamondsFilled } from "react-icons/tb";
import Content from "./Content";
import { MdOutlinePanoramaWideAngleSelect } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
      <div className="flex-1 flex flex-col gap-8">
        <Content
          icon={TbDiamondsFilled}
          title="Drive more revenue"
          text="Book high-value meetings in seconds and turn scheduling into a
          competitive advantage."
        />
        <Content
          icon={IoSpeedometer}
          title="Speed up your sales cycle"
          text="Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle."
        />
        <Content
          icon={MdOutlinePanoramaWideAngleSelect}
          title="Close more deals"
          text="Customize reminder and follow-up workflows to move deals along, integrate with sales tools, and remove logistical tasks to focus on selling."
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
          src="https://images.ctfassets.net/k0lk9kiuza3o/5guPpyRmwJuVAnOcDKHWqx/598c6209ebe0df0e5bc2d7b18a982781/Calendly-Sales-new.png?q=85&fm=webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Sale;
