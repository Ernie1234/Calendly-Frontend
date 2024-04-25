// import { TweenMax, Power3, Power4 } from "gsap";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Availablity from "./Availablity";
import HitNumber from "./HitNumber";
import ScheduleTeam from "./ScheduleTeam";

gsap.registerPlugin(ScrollTrigger);

function SchedulingGsapSection() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
        markers: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#0b3558] py-5 md:py-8 lg:py-12">
      <h3 className="flex-1 text-center text-2xl md:text-3xl lg:text-5xl font-bold py-4 text-white">
        We make scheduling easier than <br /> ever for you
      </h3>
      <div className="gallery flex">
        <div className="left w-[50%] ml-auto">
          <div className="details h-screen flex flex-col justify-center ml-auto w-[40vw]">
            <Availablity />
          </div>
          <div className="details h-screen flex flex-col justify-center ml-auto w-[40vw]">
            <ScheduleTeam />
          </div>
          <div className="details h-screen flex flex-col justify-center ml-auto w-[40vw]">
            <HitNumber />
          </div>
        </div>
        <div
          className="rightblock"
          style={{
            width: "50%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "40vw",
              height: "40vw",
              position: "relative",
            }}
          >
            <div className="photo absolute h-full w-full flex justify-center items-center bg-[#0b3558]">
              <img
                className="object-fill"
                src="https://images.ctfassets.net/k0lk9kiuza3o/7mkknkKmPsEGwaB5mdt60t/f6a386c1a8c4944b51aae8b3b1fa607f/Calendly-Email-Embed-Recruiting.png?q=85&fm=webp"
                alt="img-1"
              />
            </div>
            <div className="photo absolute h-full w-full flex justify-center items-center bg-[#0b3558]">
              <img
                className="object-fill"
                src="https://images.ctfassets.net/k0lk9kiuza3o/6XqS7MbsZB4a08zAUxOHde/033649d82a01b51bbc080b037aac0206/Calendly-Round-Robin.png?q=85&fm=webp"
                alt="img-2"
              />
            </div>
            <div className="photo absolute h-full w-full flex justify-center items-center bg-[#0b3558]">
              <img
                className="object-fill"
                src="https://images.ctfassets.net/k0lk9kiuza3o/3UTfYq4aYOmCSyynLLHo2U/817015779bcd9c3336166eae2120cd8e/Calendly-Graph.png?q=85&fm=webp"
                alt="img-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchedulingGsapSection;
