import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ChevronRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";

import Logo from "./Logo";

const MenuBar = () => {
  return (
    <aside>
      <Sheet>
        <SheetTrigger asChild>
          <Menu size={35} className="cursor-pointer " />
        </SheetTrigger>
        <SheetContent side="top" className="h-screen ">
          <div className="flex flex-col w-full h-full overflow-y-auto">
            <div className=" w-full grow">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <SheetClose asChild>
                  <Link
                    to="/product"
                    className="font-semibold text-2xl capitalize  px-2 py-4"
                  >
                    product
                  </Link>
                </SheetClose>
                <Separator />
                <SheetClose asChild>
                  <Link
                    to="/solutions"
                    className="flex justify-between items-center"
                  >
                    <p className="font-semibold text-2xl capitalize  px-2 py-4">
                      solutions
                    </p>
                    <ChevronRight size={30} />
                  </Link>
                </SheetClose>
                <Separator />
                <SheetClose asChild>
                  <Link
                    to="/product"
                    className="font-semibold text-2xl capitalize  px-2 py-4"
                  >
                    enterprise
                  </Link>
                </SheetClose>
                <Separator />
                <SheetClose asChild>
                  <Link
                    to="/product"
                    className="font-semibold text-2xl capitalize  px-2 py-4"
                  >
                    Pricing
                  </Link>
                </SheetClose>
                <Separator />
                <SheetClose asChild>
                  <Link
                    to="/resources"
                    className="flex justify-between items-center"
                  >
                    <p className="font-semibold text-2xl capitalize  px-2 py-4">
                      resources
                    </p>
                    <ChevronRight size={30} />
                  </Link>
                </SheetClose>
              </div>
            </div>
            <SheetFooter className="pt-5">
              <SheetClose asChild>
                <Button type="submit" className="capitalize">
                  My account
                </Button>
              </SheetClose>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </aside>
  );
};

export default MenuBar;
