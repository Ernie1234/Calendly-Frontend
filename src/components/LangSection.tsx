import { Check, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function LangSection() {
  return (
    <div className="bg-gray-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex justify-end container py-1 cursor-pointer">
            <span className="flex gap-1 justify-center items-center text-muted-foreground hover:text-blue-500">
              <Globe size={18} />
              <p className="text-base font-medium">English</p>
              <ChevronDown />
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 p-0 mr-8">
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex justify-between text-muted-foreground py-4 hover:bg-gray-100/65">
              <span className=" text-xl capitalize">english</span>
              <Check />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-between text-muted-foreground py-4 hover:bg-gray-100/65">
              <span className=" text-xl capitalize">français</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-between text-muted-foreground py-4 hover:bg-gray-100/65">
              <span className=" text-xl capitalize">español</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-between text-muted-foreground py-4 hover:bg-gray-100/65">
              <span className=" text-xl capitalize">deutsch</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-between text-muted-foreground py-4 hover:bg-gray-100/65">
              <span className=" text-xl capitalize">português</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default LangSection;
