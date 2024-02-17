import Link from "next/link";
import React from "react";
import Image from "next/image";
import StackBar from "../stacks/StackBar";

interface ProjectCardProps {
  title: string;
  src: string;
  description: string;
  stack: { src: string; name: string }[],
  github: string,
  deploy:string,
}

export default function ProjectCard({
  title,
  src,
  description,
  stack,
  github,
  deploy,
}: ProjectCardProps) {
  return (
      <div className="flex shadown-2xl w-full justify-between flex-col items-start p-8 h-96 max-h-96 rounded-xl bg-[#232323] bg-opacity-50 border border-solid border-opacity-50 border-[#383737]">        
        <div className="main flex items-center justify-between">
          <div className="flex w-1/2 h-full items-start justify-start flex-col gap-4">
            <h1 className="font-medium text-3xl">
              {title}
            </h1>
            <p className="text-[#989898] line-clamp-[7] pr-12 font-extralight text-lg w-[550px]">
              {description}
            </p>
          </div>
          <div className="flex w-1/2 h-full items-end justify-end">
            <Image src={src} className=" bg-inherit rounded-xl " height={300} width={450} alt="Project Image"/>
          </div>
        </div>
        
        <div className="footer flex justify-between w-full items-start">
          <div className=" flex items-start justify-start w-1/2">
            <Link href={deploy} className="flex hover:shadow-md items-baseline  overflow-hidden justify-center rounded-lg bg-white px-4 py-1.5 hover:bg-[#f1f1f1] transition-all duration-300 ">
              <Image src='icons/arrows/arrow-up-right-black.svg' className=" bg-inherit " height={14} width={14} alt="Arrow Up Icon"/>
              <span className="font-normal text-xl ml-2  bg-inherit text-black">
                Visit Website
              </span>
            </Link>
            <Link href={github} className="flex items-baseline ml-4 overflow-hidden justify-center rounded-lg bg-[#171717] hover:bg-[#191919] px-4 py-1.5 hover:shadow-md border border-solid border-[#383737] transition-all duration-300 ">
              <Image src='icons/social/social-github-bold.svg' className=" bg-inherit " height={16} width={16} alt="Github Icon"/>
              <span className=" font-normal text-xl ml-2  bg-inherit text-white">
                Source-Code
              </span>
            </Link>    
          </div>
          
          <div className="flex items-end justify-end w-1/2">
            <StackBar
            stack={stack}/>    
          </div>
        </div>
        
    </div>
  );
};

