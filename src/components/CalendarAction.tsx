import { Link } from "react-router-dom";
import VideoBg from "./VideoBg";
import { ArrowRight } from "lucide-react";

function CalendarAction() {
  return (
    <div className="py-4 md:py-8 lg:py-12">
      <div className="flex flex-col justify-center items-center py-4 md:py-8 lg:py-12">
        <h3 className="flex-1 text-center text-2xl md:text-3xl lg:text-5xl font-bold text-[#0b3558]">
          See Calendly in action
        </h3>
        <p className="leading-7 py-4 text-xl text-center text-muted-foreground max-w-prose">
          Calendly is the scheduling automation platform with team-based
          scheduling, solutions and integrations for every department, and
          advanced security features.
        </p>
        <Link
          to="/sale"
          className="text-primary text-lg font-semibold tracking-normal leading-none flex justify-center items-center gap-2 hover:gap-4 transition-all duration-300"
        >
          Sign up for free
          <ArrowRight className="mt-1" />
        </Link>
      </div>
      <VideoBg videoSrc="https://video-previews.elements.envatousercontent.com/h264-video-previews/dbd00683-5f4e-4ab0-afff-4a015c1da554/14677089.mp4" />
    </div>
  );
}

export default CalendarAction;
