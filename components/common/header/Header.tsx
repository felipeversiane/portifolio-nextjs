import Link from "next/link";
import Image from 'next/image'
import { Navbar } from "./Navbar";
import { Menu } from "./Menu";

export function Header (){
  return (
    <header className="flex items-center w-full justify-between">
      <Link href='/'> 
          <Image src='/icons/logo-small.svg' height={30} width={30} alt="Site logo" />
      </Link>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </header>
  );
};
