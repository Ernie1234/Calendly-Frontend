import { ArrowRight, Octagon } from "lucide-react";
import Content from "../product/Content";
import { Link } from "react-router-dom";

function Availablity() {
  return (
    <div className="flex flex-col justify-start gap-5">
      <h3 className="flex-1 text-left text-2xl md:text-3xl lg:text-4xl font-bold py-4 text-white">
        Share your meeting <br /> availability
      </h3>
      <Content
        whiten
        title="Accurate, real time scheduling"
        text="Grow your business with scheduling automation. Simply email, text, or add your Calendly availability to your website - and watch prospects and recruits book high-value meetings with you."
        icon={Octagon}
      />
      <Link
        to="/sale"
        className="capitalize text-white text-lg font-semibold tracking-normal leading-none self-start flex justify-center items-center gap-2 hover:gap-4 transition-all duration-300"
      >
        learn more
        <ArrowRight className="mt-1" />
      </Link>
    </div>
  );
}

export default Availablity;
