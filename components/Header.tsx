import Link from "next/link";

// components
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/icons/logo.png"
            priority
            height={80}
            width={80}
            alt="Logo"
            className="w-[60px] h-[60px] xl:w-[80px] xl:h-[80px]"
          />
        </Link>

        {/* desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
