import { Button } from "./ui/button";

function PowerUp() {
  return (
    <div className="mx-auto container">
      <div className="bg-[#0b3558] container mx-auto p-6 md:p-8 lg:p-16 rounded-xl md:rounded-2xl lg:rounded-3xl">
        <h3 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white my-5">
          Power up your scheduling
        </h3>
        <p className="leading-7 my-6 text-xl text-center text-white font-normal">
          Get started with the world's leading Scheduling Automation Platform in
          seconds - <br /> for free.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <Button size="sign" className="text-lg py-2.5 px-5 rounded-sm">
            Sign up for free
          </Button>
          <Button
            size="sign"
            className="text-lg py-2.5 px-5 rounded-sm border-white border-2 bg-[#0b3558] hover:bg-[#1c476d]"
          >
            Get a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PowerUp;
