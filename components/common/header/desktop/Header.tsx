
import Link from "next/link";
import Image from 'next/image'
import { Navbar } from "./Navbar";
import { Menu } from "../mobile/Menu";
import { Lang } from "./Lang";

export function Header (){
  return (
    <header className="flex items-center w-full z-50 justify-between py-4 px-10">
      <Link href='/'> 
          <Image src='/icons/brand/logo-small.svg' height={25} width={25} alt="Site logo" />
      </Link>
      <div className="hidden z-50 md:block">
        <Navbar/>
      </div>
      <div className="hidden z-50 md:block">
        <Lang/>
      </div>
      <div className=" z-50 md:hidden">
        <Menu/>
      </div>
    </header>
  );
};
