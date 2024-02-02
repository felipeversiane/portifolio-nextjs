'use client'

import React from 'react'
import Typewriter from 'typewriter-effect'; 
import Image from 'next/image'
import Link from 'next/link';

export default function HeroHome (){
    const text:string[] = ['Software Engineer','Back-end Developer','Front-end Developer']

    return (
        <div className="content flex items-end justify-start w-full h-fit mt-40">
            <div className="flex items-start justify-center w-full gap-6 flex-col">

                <h2 className="text-white font-extralight text-4xl">
                    Hi, i'm Versiane
                </h2>

                <h1 className='text-white text-7xl font-semibold'>
                   <Typewriter
                        options={{
                            strings: text,
                            autoStart: true,
                            loop: true,
                            delay:100,
                        }}
                    />
                </h1>

                <p className=' w-3/5 font-light text-[#989898] text-lg'>
                    Focused on crafting clean & user‑friendly experiences, I am passionate about building high‑quality websites.
                </p>

                <h3 className="relative flex items-center pl-5 font-light text-lg">
                    <span className='ml-1'>Coding and currently listening to lo-fi </span>
                    <span className="absolute left-0 top-3 flex h-3 w-3 -translate-y-1/2 pl-1">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full pl-1 opacity-75 bg-[#169723]"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full pl-3 bg-[#169723]"></span>
                    </span>
                </h3>
                
                
                <div className='buttons flex items-center justify-start mt-2 w-full'>
                    <Link href="/contact" className="flex items-baseline mr-6 overflow-hidden transform hover:scale-105 justify-center rounded-lg bg-white px-4 py-2 hover:bg-[#f1f1f1] transition-all duration-300 ">
                        <span className="font-medium text-xl mr-2  bg-inherit text-black">
                            GET IN TOUCH
                        </span>
                    </Link>
                    <Link href="/contact" className="flex items-baseline  overflow-hidden transform hover:scale-105 justify-center rounded-lg bg-white px-4 py-2 hover:bg-[#f1f1f1] transition-all duration-300 ">
                        <span className="font-medium text-xl mr-2  bg-inherit text-black">
                            DOWNLOAD CV
                        </span>
                        <Image src='icons/download.svg' className=" bg-inherit transition-transform duration-300" height={17} width={17} alt="Paper Plane Icon"/>
                    </Link> 
                </div>

            </div>
            <div className="flex items-center w-1/3 justify-end">

            </div>
        </div>
    );
};