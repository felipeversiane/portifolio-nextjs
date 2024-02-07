import Link from "next/link";
import {ProjectsCarousel} from "./ProjectsCarousel"
import Image from 'next/image'

export default function Projects(){
    return (
            <div className=" z-30 flex items-start bg-[#171717] px-10  bg-opacity-50 justify-center w-full py-12 mt-40 flex-col gap-4">
                <h2 className="text-white text-2xl font-light"> 
                    CHECK IT OUT
                </h2>

                <div className="flex items-center justify-between w-full">
                    <h1 className="text-white text-5xl font-semibold">
                        A few selected projects”
                    </h1>
                    <div className="flex h-fit w-fit items-end justify-end">
                        <Link href="/projects" className="flex items-baseline justify-center h-fit group">
                            <p className="text-xl font-light">
                                View all
                            </p>
                            <span className="ml-2 mt-0.5 transform group-hover:translate-x-[5px] transition-all duration-300">
                                <Image src="/icons/arrow-right.svg" height={8} width={8} alt="Arrow Right Icon"/>
                            </span>
                        </Link>
                    </div>
                </div>
                <ProjectsCarousel/>
            </div>
    );
}