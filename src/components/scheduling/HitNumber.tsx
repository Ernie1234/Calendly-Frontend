import { ArrowRight, Octagon } from "lucide-react";
import Content from "../product/Content";
import { Link } from "react-router-dom";

function HitNumber() {
  return (
    <div className="flex flex-col justify-start gap-5">
      <h3 className="flex-1 text-left text-2xl md:text-3xl lg:text-4xl font-bold py-4 text-white">
        Hit your number
      </h3>
      <Content
        whiten
        title="Build your competitive advantage"
        text="High-value meetings are the lifeblood of your business. Increase revenue, retain customers, and land recruits with the #1 scheduling automation platform."
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

export default HitNumber;
