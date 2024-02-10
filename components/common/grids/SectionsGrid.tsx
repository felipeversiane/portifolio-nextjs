import SectionCard from "../cards/SectionCard";
import React from "react";
import { useTranslations } from "next-intl";

  export default function SectionsGrid(){
    const t = useTranslations('index.more_about_me');
    const keys = ['aboutme','stackandtools','projects'] as const;
    
    return (
    <div className="flex justify-between items-center w-full mt-14">
        {keys.map((key,index) => (
        <SectionCard
          key={index}
          title={t(`sections.${key}.title`)}
          src={t(`sections.${key}.src`)}
          href={t(`sections.${key}.href`)}
        />
      ))}
    </div>
    );
  }