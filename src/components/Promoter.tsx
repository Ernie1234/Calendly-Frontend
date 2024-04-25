import { Images } from "@/lib/data";

function Promoter() {
  return (
    <div className="py-14 md:py-20 lg:py-32 ">
      <h4 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold  text-[rgb(11,53,88)]">
        Simplified scheduling for more than <span>20 million</span> users
        worldwide
      </h4>
      <div className="logos">
        <div className="logos_slide">
          {Images.map((image) => (
            <img
              className="h-10 mx-10 grayscale contrast-50"
              src={image}
              alt="calendly"
            />
          ))}
          {Images.map((image) => (
            <img
              className="h-10 mx-10 grayscale contrast-50"
              src={image}
              alt="calendly"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Promoter;
