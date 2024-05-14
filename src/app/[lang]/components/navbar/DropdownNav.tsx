import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, Menu } from "lucide-react";
import Link from "next/link";

const DropdownNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed z-[110] right-4 top-4 border border-red-600 bg-black/60 backdrop-blur-sm rounded-full p-1">
        <Menu stroke="white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="fixed z-[120] -translate-x-[92px] -translate-y-[54px] rounded-none rounded-bl-xl bg-black/80 backdrop-blur-sm border-red-600">
        <DropdownMenuLabel>
          <Link href="#home">
            <Home stroke="red" />
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-red-600" />
        <DropdownMenuItem className="text-red-600">
          <Link className="font-semibold" href="#enjoy-live">
            ENJOY LIVE
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">
          <Link className="font-semibold" href="#conect">
            CONNECT
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">
          <Link className="font-semibold" href="#stories">
            STORIES
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">
          <Link className="font-semibold" href="#get-inspired">
            INSPIRE
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">
          <Link className="font-semibold" href="#contact">
            CONTACT
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNav;
