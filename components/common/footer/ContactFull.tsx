import Link from "next/link";
import Image from 'next/image'
import SocialStack from "../stacks/SocialStack";

export function ContactFull(){
  return (
  <div className="flex items-center w-full justify-between bg-inherit">
    <div className="flex flex-col justify-start items-start  bg-inherit">
        <h2 className="text-3xl font-medium mb-4  bg-inherit">
            Let's work together ?
        </h2>
        <p className="mb-6 text-xl font-extralight">
            If you have any projects in mind, feel free to send me a message.
        </p>
        <Link href="/contact" className="flex mb-6 items-baseline  overflow-hidden group justify-center rounded-lg bg-white px-4 py-2 hover:bg-[#f1f1f1] transition-all duration-300 ">
            <span className="font-medium text-lg mr-2  bg-inherit text-black">
                TALK TO ME
            </span>
            <Image src='icons/arrownarrow-right.svg' className=" bg-inherit transform group-hover:translate-x-[5px] transition-transform duration-300" height={15} width={15} alt="Paper Plane Icon"/>
        </Link>
    </div>
    <SocialStack/>
  </div>
  );
};
  