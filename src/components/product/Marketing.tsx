import { TbDiamondsFilled } from "react-icons/tb";
import Content from "./Content";
import { MdOutlinePanoramaWideAngleSelect } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Marketing = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
      <div className="flex-1 flex flex-col gap-8">
        <Content
          icon={TbDiamondsFilled}
          title="Drive more pipeline"
          text="Turn marketing leads into booked meetings, faster."
        />
        <Content
          icon={IoSpeedometer}
          title="Improve lead response times"
          text="Gain a competitive advantage when you qualify, route, and book leads instantly."
        />
        <Content
          icon={MdOutlinePanoramaWideAngleSelect}
          title="Boost conversion rates"
          text="Reduce friction in the sales funnel and close more deals."
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
          src="https://images.ctfassets.net/k0lk9kiuza3o/66m8r2eQ4wqmDwqwww1ZAU/e74a894a892a284043e12846d166a231/Calendly-Demand-Gen.png?q=85&fm=webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Marketing;
