"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* For screen readers */}
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle>
              <VisuallyHidden>Mobile Navigation</VisuallyHidden>
            </SheetTitle>
            <SheetDescription>
              This is the mobile navigation menu.
            </SheetDescription>
          </SheetHeader>
        </VisuallyHidden>

        <Link href="/">
          <Image
            src="/icons/logo.png"
            height={80}
            width={80}
            alt="Logo"
            className="w-[80px] h-[80px] mx-auto my-28"
          />
        </Link>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                pathname === link.path && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
