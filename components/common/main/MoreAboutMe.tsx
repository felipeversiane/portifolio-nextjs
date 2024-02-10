'use client'
import { useTranslations } from "next-intl";
import SectionsGrid from "../grids/SectionsGrid";

export default function MoreAboutMe(){  
    const t = useTranslations('index.more_about_me')
    return (  
        <div className="flex justify-center items-start flex-col gap-4 mt-20 py-4 px-10">
            <h2 className="text-white text-2xl font-light"> 
               {t('subtitle')}
            </h2>
            <h1 className="text-white text-5xl font-semibold">
            {t('title')}
            </h1>
            <SectionsGrid/>
        </div>
    );
}