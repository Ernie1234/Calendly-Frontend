import { TbDiamondsFilled } from "react-icons/tb";
import Content from "./Content";
import { MdOutlinePanoramaWideAngleSelect } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Customer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
      <div className="flex-1 flex flex-col gap-8">
        <Content
          icon={TbDiamondsFilled}
          title="Drive more retention"
          text="Bring all of your experts together and connect with customers at every stage of their journey to build long-lasting partnerships."
        />
        <Content
          icon={IoSpeedometer}
          title="Speed up your response times"
          text="Quickly book time to solve customers’ needs and help them self-serve to support their goals."
        />
        <Content
          icon={MdOutlinePanoramaWideAngleSelect}
          title="Improve NPS and customer health"
          text="Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows."
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
          src="https://images.ctfassets.net/k0lk9kiuza3o/3uXk38DyGLTndU6k9MEUv2/3961144716e86a9ddaf42651a1891678/Calendly-Customer-Success.png?q=85&fm=webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Customer;
