import SectionCard from "../cards/SectionCard";
import React from "react";
import { Locale } from '@/config/i18n.config';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';

  export default function SectionsGrid({ params }: { params: { lang: Locale } }){
    const { dictionary } = getDictionaryUseClient(params.lang);
    return (
    <div className="flex justify-between items-center w-full mt-14">
        {dictionary.index.more_about_me.sections.map((section, index) => (
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