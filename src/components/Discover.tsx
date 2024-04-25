import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Discover() {
  const [active, setActive] = useState(1);

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <div className="h-screen bg-slate-100 flex flex-col justify-center items-center">
      <div className="mx-auto container lg:px-12">
        <div className="flex flex-col md:flex-row">
          <h3 className="flex-1 text-left text-2xl md:text-3xl lg:text-5xl font-bold text-[#0b3558]">
            Discover how businesses <br /> grow with Calendly
          </h3>
          <div className="flex-1 flex flex-col gap-4">
            <p className="leading-7 mt-6 text-xl text-left text-muted-foreground">
              Learn how teams of all sizes are using Calendly's scheduling
              <br />
              automation platform to create value.
            </p>
            <Link
              to="/sale"
              className="text-primary text-lg tracking-normal leading-none flex self-start justify-center items-center gap-3 hover:text-black hover:gap-5 transition-all duration-300 font-semibold"
            >
              View customer stories
              <ChevronRight className="mt-1" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-5 mx-auto py-4 md:py-8 lg:py-12">
          <div
            className={`py-4 px-10 rounded-sm bg-white border flex justify-center items-center ${active === 1 ? "border-primary shadow-lg" : "border-gray-200 shadow-sm"}`}
            onClick={() => {
              handleClick(1);
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Smith%27s_logo.svg/1280px-Smith%27s_logo.svg.png"
              alt="smith"
              className="object-fill"
            />
          </div>
          <div
            className={`py-4 px-10 rounded-sm bg-white border flex justify-center items-center ${active === 2 ? "border-primary shadow-lg" : "border-gray-200 shadow-sm"}`}
            onClick={() => {
              handleClick(2);
            }}
          >
            <img
              src="https://vectorseek.com/wp-content/uploads/2023/10/Hackerone-Logo-Vector.svg-.png"
              alt="hackerone-logo"
              className="object-fill"
            />
          </div>
          <div
            className={`py-4 px-10 rounded-sm bg-white border flex justify-center items-center ${active === 3 ? "border-primary shadow-lg" : "border-gray-200 shadow-sm"}`}
            onClick={() => {
              handleClick(3);
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Airtable_Logo.svg/2560px-Airtable_Logo.svg.png"
              alt="airtable-logo"
              className="object-fill"
            />
          </div>
          <div
            className={`py-4 px-10 rounded-sm bg-white border flex justify-center items-center ${active === 4 ? "border-primary shadow-lg" : "border-gray-200 shadow-sm"}`}
            onClick={() => {
              handleClick(4);
            }}
          >
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/1ybJesXH8xdDdrUcrbpQ0V/6ef3f253afed6cd2527c658ac9b0eee1/AWM_Thumbnail_1.svg"
              alt="assante-logo"
              className="object-fill"
            />
          </div>
          <div
            className={`py-4 px-10 rounded-sm bg-white border flex justify-center items-center ${active === 5 ? "border-primary shadow-lg" : "border-gray-200 shadow-sm"}`}
            onClick={() => {
              handleClick(5);
            }}
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/texas-university.svg"
              alt="texas-logo"
              className="object-fill"
            />
          </div>
          <div
            className={`py-4 px-10 rounded-sm bg-white border flex justify-center items-center ${active === 6 ? "border-primary shadow-lg" : "border-gray-200 shadow-sm"}`}
            onClick={() => {
              handleClick(6);
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bit.ly_Logo.svg/2560px-Bit.ly_Logo.svg.png"
              alt="bitly-logo"
              className="object-fill"
            />
          </div>
        </div>
        <div className="">
          {active === 1 && (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-3 gap-5 md:gap-8 lg:gap-24">
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    26%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    increase in website bookings
                  </p>
                </div>
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    20%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    more sales meetings held
                  </p>
                </div>
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    360%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    increase in partner calls
                  </p>
                </div>
              </div>
              <Link
                to="/sale"
                className="text-gray-800 text-lg flex self-start justify-center items-center gap-3 hover:text-gray-500 hover:gap-5 transition-all duration-300 font-semibold"
              >
                Read full customer stories
                <ChevronRight className="mt-1" />
              </Link>
            </div>
          )}
          {active === 2 && (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-3 gap-5 md:gap-8 lg:gap-24">
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    169%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    return on investment
                  </p>
                </div>
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    88%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    more customers reached YOY
                  </p>
                </div>
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    114%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    more meetings booked YOY
                  </p>
                </div>
              </div>
              <Link
                to="/sale"
                className="text-gray-800 text-lg flex self-start justify-center items-center gap-3 hover:text-gray-500 hover:gap-5 transition-all duration-300 font-semibold"
              >
                Read full customer stories
                <ChevronRight className="mt-1" />
              </Link>
            </div>
          )}
          {active === 3 && (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-3 gap-5 md:gap-8 lg:gap-24">
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    81%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    return on investment
                  </p>
                </div>
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    60%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    faster time to schedule
                  </p>
                </div>
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    2,077
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    hours saved
                  </p>
                </div>
              </div>
            </div>
          )}
          {active === 4 && (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-3 gap-5 md:gap-8 lg:gap-24">
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    323%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    return on investment
                  </p>
                </div>
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    143%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    increase in client outreach
                  </p>
                </div>
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    13,607
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    hours reclaimed
                  </p>
                </div>
              </div>
              <Link
                to="/sale"
                className="text-gray-800 text-lg flex self-start justify-center items-center gap-3 hover:text-gray-500 hover:gap-5 transition-all duration-300 font-semibold"
              >
                Read full customer stories
                <ChevronRight className="mt-1" />
              </Link>
            </div>
          )}
          {active === 5 && (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-3 gap-5 md:gap-8 lg:gap-24">
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    89%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    increase in efficiency
                  </p>
                </div>
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    87.5%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    cost savings
                  </p>
                </div>
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    20%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    fewer scheduling errors
                  </p>
                </div>
              </div>
              <Link
                to="/sale"
                className="text-gray-800 text-lg flex self-start justify-center items-center gap-3 hover:text-gray-500 hover:gap-5 transition-all duration-300 font-semibold"
              >
                Read full customer stories
                <ChevronRight className="mt-1" />
              </Link>
            </div>
          )}
          {active === 6 && (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-3 gap-5 md:gap-8 lg:gap-24">
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    100%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    increase in demos scheduled by outbound SDRs
                  </p>
                </div>
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    40%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    increase in sales qualified opps through website
                  </p>
                </div>
                <div className="flex flex-col  border-b-2 border-primary">
                  <h4 className="text-left text-3xl md:text-5xl lg:text-7xl font-bold text-[#0b3558]">
                    90%
                  </h4>
                  <p className="leading-7 my-5 text-2xl font-medium text-left text-muted-foreground">
                    of sales calls scheduled with Calendly
                  </p>
                </div>
              </div>
              <Link
                to="/sale"
                className="text-gray-800 text-lg flex self-start justify-center items-center gap-3 hover:text-gray-500 hover:gap-5 transition-all duration-300 font-semibold"
              >
                Read full customer stories
                <ChevronRight className="mt-1" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Discover;
