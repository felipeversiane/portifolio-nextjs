import Link from "next/link";
import {ProjectsCarousel} from "./ProjectsCarousel"
import Image from 'next/image'

export default function Projects(){
    return (
        <div className="flex items-start justify-center w-full py-8 mt-60 flex-col gap-8">
            <h2 className="text-white text-2xl font-light"> 
                CHECK IT OUT
            </h2>

            <div className="flex items-center justify-between w-full">
                <h1 className="text-white text-6xl font-semibold">
                    A few selected projects”
                </h1>
                <div className="flex h-fit w-fit items-end justify-end">
                    <Link href="/projects" className="flex items-start justify-center h-fit group">
                        <p className="text-2xl font-light">
                            View all
                        </p>
                        <span className="ml-2 mt-0.5 transform group-hover:translate-x-[5px] transition-all duration-300">
                            <Image src="/icons/arrow-right.svg" height={12} width={12} alt="Arrow Right Icon"/>
                        </span>
                    </Link>
                </div>
            </div>

            <ProjectsCarousel/>
        </div>
    );
}