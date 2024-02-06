import SectionCard from "./SectionCard";
import React from "react";

const sections: { title: string; src: string; href: string}[] = [
    {
        title:"About me",
        src:"/icons/id-card.svg",
        href:"aboutme",
        
    },
    {
        title:"Stack and Tools",
        src:"/icons/tools.svg",
        href:"/tools",
    },
    {
        title:"Projects",
        src:"/icons/archive.svg",
        href:"/projects",
    },
  ]

  export default function SectionsGrid(){
    return (
    <div className="flex justify-between items-center w-full mt-14">
        {sections.map((section, index) => (
        <SectionCard
          key={index}
          title={section.title}
          src={section.src}
          href={section.href}
        />
      ))}
    </div>
    );
  }