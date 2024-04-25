import { TbDiamondsFilled } from "react-icons/tb";
import Content from "./Content";
import { MdOutlinePanoramaWideAngleSelect } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const It = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
      <div className="flex-1 flex flex-col gap-8">
        <Content
          icon={TbDiamondsFilled}
          title="Maintain enterprise-grade security with scheduling automation"
          text="Stay aligned with your security requirements and reduce risk across the org."
        />
        <Content
          icon={IoSpeedometer}
          title="Implement and govern at ease"
          text="Eliminate the manual processes of implementing, managing user access and permissions on the platform."
        />
        <Content
          icon={MdOutlinePanoramaWideAngleSelect}
          title="Drive adoption and ROI across teams"
          text="Partner with our team to onboard, drive adoption, and identify success metrics to achieve greater value, faster."
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
          src="https://images.ctfassets.net/k0lk9kiuza3o/5FiHTjNtnKyRQ7hGxjCSr1/4bf1759ed8661788e8c5d42933f67c8c/Calendly-IT.png?q=85&fm=webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default It;
