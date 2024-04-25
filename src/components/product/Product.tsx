import { useCallback, useState } from "react";
import Sale from "./Sale";
import Marketing from "./Marketing";
import Customer from "./Customer";
import Recruiting from "./Recruiting";
import It from "./It";
import Education from "./Education";

function Product() {
  const [active, setActive] = useState(1);

  const handleClick = useCallback((index: number) => {
    setActive(index);
  }, []);

  return (
    <div className="mx-auto container mb-48">
      <h4 className="text-center text-xl md:text-3xl lg:text-5xl font-bold pb-8 md:pb-16 text-[#0b3558]">
        Smarter scheduling for teams <br /> who conduct meetings at scale
      </h4>
      <div className="flex justify-center items-center mb-4 border-b-2 border-gray-300 max-w-fit mx-auto">
        <div
          className={`cursor-pointer py-4 px-8 capitalize text-xl transition-all duration-300 font-semibold hover:bg-gray-100 text-[rgb(11,53,88)] ${active === 1 ? "text-primary border-b-2  border-primary " : "border-transparent border-b-2"}`}
          onClick={() => handleClick(1)}
        >
          sales
        </div>
        <div
          className={`cursor-pointer py-4 px-8 capitalize text-xl transition-all duration-300 font-semibold hover:bg-gray-100
 text-[rgb(11,53,88)] ${active === 2 ? "text-primary border-b-2 border-primary " : "border-transparent border-b-2"}`}
          onClick={() => handleClick(2)}
        >
          marketing
        </div>
        <div
          className={`cursor-pointer py-4 px-8 capitalize text-xl transition-all duration-300 font-semibold hover:bg-gray-100
 text-[rgb(11,53,88)] ${active === 3 ? "text-primary border-b-2 border-primary " : "border-transparent border-b-2"}`}
          onClick={() => handleClick(3)}
        >
          customer success
        </div>
        <div
          className={`cursor-pointer py-4 px-8 capitalize text-xl transition-all duration-300 font-semibold hover:bg-gray-100
 text-[rgb(11,53,88)] ${active === 4 ? "text-primary border-b-2 border-primary " : "border-transparent border-b-2"}`}
          onClick={() => handleClick(4)}
        >
          recruiting
        </div>
        <div
          className={`cursor-pointer py-4 px-8 capitalize text-xl transition-all duration-300 font-semibold hover:bg-gray-100
 text-[rgb(11,53,88)] ${active === 5 ? "text-primary border-b-2 border-primary " : "border-transparent border-b-2"}`}
          onClick={() => handleClick(5)}
        >
          IT
        </div>
        <div
          className={`cursor-pointer py-4 px-8 capitalize text-xl transition-all duration-300 font-semibold hover:bg-gray-100
 text-[rgb(11,53,88)] ${active === 6 ? "text-primary border-b-2 border-primary " : "border-transparent border-b-2"}`}
          onClick={() => handleClick(6)}
        >
          education
        </div>
      </div>
      {active === 1 && <Sale />}
      {active === 2 && <Marketing />}
      {active === 3 && <Customer />}
      {active === 4 && <Recruiting />}
      {active === 5 && <It />}
      {active === 6 && <Education />}
    </div>
  );
}

export default Product;
