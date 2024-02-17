'use client'

import Link from "next/link";
import {ProjectsCarousel} from "../carrousel/ProjectsCarousel"
import Image from 'next/image'
import { useTranslations } from "next-intl";

export default function Projects(){
    const t = useTranslations('index.projects')
    return (
            <div className=" z-30 flex items-start bg-[#171717]  px-10  bg-opacity-50 justify-center h-fit w-full py-12 pb-24 mt-40 flex-col gap-4">
                <h2 className="text-white text-2xl font-light"> 
                    {t("subtitle")}
                </h2>

                <div className="flex items-center justify-between w-full">
                    <h1 className="text-white text-5xl font-semibold">
                        {t("title")}
                    </h1>
                    <div className="flex h-fit w-fit items-end justify-end">
                        <Link href="/projects" className="flex items-baseline justify-center h-fit group">
                            <p className="text-xl font-light">
                                {t("viewall")}
                            </p>
                            <span className="ml-2 mt-0.5 transform group-hover:translate-x-[5px] transition-all duration-300">
                                <Image src="/icons/arrows/arrow-right.svg" height={8} width={8} alt="Arrow Right Icon"/>
                            </span>
                        </Link>
                    </div>
                </div>
                <ProjectsCarousel/>
            </div>
    );
}