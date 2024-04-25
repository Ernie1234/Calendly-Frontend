import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";

import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./Loader";
import { Copy } from "lucide-react";

function Jumbotron() {
  const { isLoading, isAuthenticated, user } = useAuth0();

  const Hero = () => {
    if (isLoading) {
      return <Loader />;
    }
    return (
      <div className="min-h-[75vh] flex flex-col justify-center items-center">
        <div className="mx-auto flex flex-col justify-center px-5 md:px-8 relative">
          <div className="hidden lg:block absolute -top-10 -left-12 w-16 h-16 bg-red-500 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/2737046/pexels-photo-2737046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img1"
              className="object-cover"
            />
          </div>
          <div className="hidden lg:block absolute -top-10 -right-12 w-16 h-16 bg-red-500 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/15148325/pexels-photo-15148325/free-photo-of-a-man-holding-black-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img1"
              className="object-cover"
            />
          </div>
          <div className="hidden lg:block absolute -bottom-10 -left-12 w-16 h-16 bg-red-500 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/6169491/pexels-photo-6169491.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="img1"
              className="object-cover"
            />
          </div>
          <div className="hidden lg:block absolute -bottom-10 -right-12 w-16 h-16 bg-red-500 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/15409883/pexels-photo-15409883/free-photo-of-portrait-of-a-young-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="img1"
              className="object-fill"
            />
          </div>
          <h1 className="scroll-m-20 text-5xl font-bold tracking-tight text-center lg:text-7xl text-[rgb(11,53,88)]">
            Easy scheduling ahead
          </h1>
          <p className="leading-7 mt-6 text-xl text-center text-muted-foreground max-w-prose">
            Calendly is your scheduling automation platform for eliminating the
            back-and-forth emails to find the perfect time — and so much more.
          </p>
          <div className="pt-8">
            <p className="text-center p-2 text-sm">
              Sign up free with Google or Microsoft.
            </p>
            {/*  TODO: Add signup with social login */}
            <div className="flex flex-col md:flex-row w-full md:max-w-[70vw] justify-center items-center gap-4 pt-2 pb-3">
              <Button
                size="sign"
                className="text-lg flex justify-center items-center rounded p-2 w-full md:w-min"
              >
                <div className="bg-white p-1.5 rounded ">
                  <FcGoogle size={28} />
                </div>
                <span className="px-3"> Sign up with Google</span>
              </Button>
              <Button
                size="sign"
                className="text-lg flex justify-center items-center w-full md:w-min hover:bg-[#0b4058] bg-[#0b3558] rounded p-2"
              >
                <div className="bg-white p-1.5 rounded text-[#0b3558]">
                  <BsMicrosoft size={28} />
                </div>
                <span className="px-3"> Sign up with Microsoft</span>
              </Button>
            </div>
            {/* OR */}
            <div className="flex justify-center items-center space-x-4 w-[70vw] overflow-x-hidden mx-auto">
              <Separator className="h-[2px]" />
              <p className="text-lg font-light uppercase text-muted-foreground">
                or
              </p>
              <Separator className="h-[2px]" />
            </div>

            {/* TODO:signup with email */}
            <div className="flex justify-center items-center space-x-2 pt-2 text-sm font-normal">
              <span>
                <Link to="/login" className="text-primary font-medium">
                  Sign up free with email.
                </Link>
              </span>
              <span>No credit card required.</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HeroUser = () => {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center">
        <div className="mx-auto flex flex-col justify-center px-5 md:px-8">
          <h1 className="scroll-m-20 text-5xl font-bold tracking-tight text-center lg:text-7xl text-[#0b3558]">
            Welcome back,{" "}
            <span className="text-primary">{user?.family_name}</span>
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-xl text-center text-muted-foreground max-w-prose">
            We're here to help you optimize your scheduling workflow and get the
            most out of your Catalogue Plan
          </p>
          <div className="pt-8">
            {/*  TODO: Add signup with social login */}
            <div className="flex flex-col md:flex-row w-full md:max-w-[70vw] justify-center items-center gap-4 pt-2 pb-3">
              <Button size="sign" className="py-3 px-5 text-lg font-semibold">
                My account
              </Button>
              <Button
                size="sign"
                className="py-3 px-5 text-lg font-semibold"
                variant="myOutline"
              >
                Create new event type
              </Button>
            </div>

            {/* TODO: The copy to clipboard functionality */}
            <div className="flex justify-center items-center space-x-4 pt-2 text-primary ">
              {/* TODO: To add copy link later */}
              <span className="text-xl font-medium">
                https://calendly.com/anumahjoshuaeneye
              </span>
              <span>
                <Copy />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{!isLoading && isAuthenticated ? <HeroUser /> : <Hero />}</>;
}

export default Jumbotron;
