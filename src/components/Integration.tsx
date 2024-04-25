import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { IntegrationLogos } from "@/lib/data";

const IntegrationLogo = ({ logo, link }: { logo: string; link: string }) => {
  return (
    <div className="bg-white border border-primary/25 p-8 shadow-lg rounded-md flex justify-center items-center hover:scale-105 transition-all duration-300">
      <Link to={link} className="">
        <img src={logo} alt="logo" className="object-fit" />
      </Link>
    </div>
  );
};

function Integration() {
  return (
    <div className="container mx-auto mb-8 md:mb-16 lg:mb-24">
      <div className="flex flex-col md:flex-row">
        <h3 className="flex-1 text-left text-2xl md:text-3xl lg:text-5xl font-semibold text-[#0b3558]">
          Stay in sync from any <br /> app, on any device
        </h3>
        <div className="flex-1 flex flex-col">
          <p className="leading-7 mt-6 text-xl text-left text-muted-foreground">
            Boost productivity with integrations that fold right into your
            workflow.
          </p>
          <Link
            to="/sale"
            className="capitalize text-primary text-xl tracking-normal leading-none flex self-start justify-center items-center gap-3"
          >
            View integration
            <ChevronRight className="mt-1" />
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-9 py-5 md:py-10 lg:py-16 gap-4 md:gap-6 lg:gap-8">
        {IntegrationLogos.map((int) => (
          <IntegrationLogo logo={int.logo} link={int.link} />
        ))}
      </div>
    </div>
  );
}

export default Integration;
