"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

import { i18n } from "@/configs/i18n.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/providers/DictionaryProvider";
import * as flagsObj from "./flags.json";
import { LanguagesIcon } from "lucide-react";

const NavbarDropdown = () => {
  const pathName = usePathname();
  const { dropdown } = useDictionary();
  const { flags } = flagsObj;

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-red-600 border rounded-full p-1 lg:px-1 bg-black/60 backdrop-blur-sm">
        <LanguagesIcon stroke="white" className="p-[2px]" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-red-600 bg-black/60 backdrop-blur-sm translate-y-4">
        <DropdownMenuLabel className="text-primary-foreground">{dropdown.title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {i18n.locales.map((locale, i) => {
          return (
            <DropdownMenuItem key={locale}>
              <Link
                key={locale}
                href={redirectedPathName(locale)}
                className="flex w-full gap-2 text-xs items-center rounded-xl border hover:scale-105 transition-transform p-2 py-1 text-primary-foreground bg-gray-900"
              >
                <Image src={flags[i].src} width={flags[i].width} height={flags[i].height} alt={flags[i].alt} />
                {dropdown.languages[i]}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropdown;
