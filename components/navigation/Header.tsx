import Link from 'next/link';

// components
import Nav from './Nav';
import { Button } from '../ui/button';
import MobileNav from './MobileNav';
import Image from 'next/image';

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
            className="w-[50px] h-[50px] md:w-[55px] md:h-[55px] xl:w-[60px] xl:h-[60px]"
          />
        </Link>

        {/* desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="rounded-2xl font-bold bg-accent text-primary hover:bg-accent/80 hover:text-primary/90 transition-all duration-500">
              Hire Me
            </Button>
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
