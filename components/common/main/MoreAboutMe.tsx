'use client'
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import SectionsGrid from "../grids/SectionsGrid";
import { Locale } from '@/config/i18n.config';


export default function MoreAboutMe({ params }: { params: { lang: Locale } }){
    const { dictionary } = getDictionaryUseClient(params.lang);

    return (  
        <div className="flex justify-center items-start flex-col gap-4 mt-20 py-4 px-10">
            <h2 className="text-white text-2xl font-light"> 
               {dictionary.index.more_about_me.subtitle}
            </h2>
            <h1 className="text-white text-5xl font-semibold">
            {dictionary.index.more_about_me.title}
            </h1>
            <SectionsGrid params={params}/>
        </div>
    );
}