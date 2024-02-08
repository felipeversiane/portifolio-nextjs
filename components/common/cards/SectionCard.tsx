import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  src: string;
  href: string;
}

const SectionCard: React.FC<ProjectCardProps> = ({
  title,
  src,
  href,
}) => {
  return (
   <Link href={href} className="w-80 h-52 max-h-52 border border-solid border-[#383737] flex flex-col justify-between items-start p-4 rounded-md bg-[#232323] bg-opacity-50   transform hover:scale-105 transition-all duration-300" >
    <div className="h-fit w-fit p-2.5 bg-[#0b0b0b] rounded-md border-[0.8px] border-solid border-[#383737] ">
        <Image className=''src={src} height={25} width={25} alt="Section Icon"/>
    </div>
    <div className="text-white font-light text-3xl">
        {title}
    </div>   
   </Link>
  );
};
export default SectionCard;
