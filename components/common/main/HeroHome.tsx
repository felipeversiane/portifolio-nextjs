'use client'
import React from 'react'
import Typewriter from 'typewriter-effect'; 
import Image from 'next/image'
import Link from 'next/link';
import { Locale } from '@/config/i18n.config';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';

export default function HeroHome ({ params }: { params: { lang: Locale } }){
    const { dictionary } = getDictionaryUseClient(params.lang);

    return (
        <div className="content flex items-center justify-start w-full h-fit mt-28 py-4 px-10">
            <div className="flex items-start justify-center w-full gap-6 flex-col">

                <h2 className="text-white font-extralight text-2xl">
                    {dictionary.index.herohome.subtitle}
                </h2>

                <h1 className='text-white text-7xl  font-semibold'>
                   <Typewriter
                        options={{
                            strings: dictionary.index.herohome.title,
                            autoStart: true,
                            loop: true,
                            delay:100,
                        }}
                    />
                </h1>

                <p className=' w-3/5 font-light text-[#989898] text-lg'>
                    {dictionary.index.herohome.description}
                </p>

                <h3 className="relative flex items-center pl-5 font-light text-lg">
                    <span className='ml-1'>{dictionary.index.herohome.is_online}</span>
                    <span className="absolute left-0 top-3 flex h-3 w-3 -translate-y-1/2 pl-1">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full pl-1 opacity-75 bg-[#169723]"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full pl-3 bg-[#169723]"></span>
                    </span>
                </h3>
                
                <div className='buttons flex items-center justify-start mt-2 w-full'>
                    <Link href="/contact" className="flex items-baseline mr-6 overflow-hidden transform hover:scale-105 justify-center rounded-lg bg-white px-4 py-2 hover:bg-[#f1f1f1] transition-all duration-300 ">
                        <span className="font-medium text-lg mr-2  bg-inherit text-black">
                            {dictionary.index.herohome.get_in_touch}
                        </span>
                    </Link>
                    <Link href="/contact" className="flex items-baseline  overflow-hidden transform hover:scale-105 justify-center rounded-lg bg-white px-4 py-2 hover:bg-[#f1f1f1] transition-all duration-300 ">
                        <span className="font-medium text-lg mr-2  bg-inherit text-black">
                            {dictionary.index.herohome.download_cv}
                        </span>
                        <Image src='icons/download.svg' className=" bg-inherit transition-transform duration-300" height={15} width={15} alt="Download Icon"/>
                    </Link> 
                </div>

            </div>
            <div className="flex items-center w-1/3 max-w-1/3 justify-end">
                <div className=' absolute z-0 top-60 right-[-40px] h-96 w-96 bg-[#739B79] blur-3xl rounded-full opacity-80'></div>
                    <Image
                        src='images/carbon-code.svg'
                        className=" z-30 absolute right-[-50px] top-72"
                        height={150}
                        width={530}
                        style={{ maxWidth: 'none', maxHeight: 'none' }} 
                        alt="Carbon Code Icon"
                    />      
                    <Image
                        src='images/carbon-code2.svg'
                        className="z-20 absolute right-[-60px] top-36"
                        height={100}
                        width={440}
                        style={{ maxWidth: 'none', maxHeight: 'none' }}
                        alt="Carbon Code Icon"
                    />
                    <div className=' h-64 w-96 border border-solid border-opacity-50 rounded-xl z-10 top-36 right-[-150px] absolute shadow-2xl bg-[#232323] opacity-80 border-[#383737]'></div>
                    <div className=' h-96 w-96 border border-solid border-opacity-50 rounded-xl z-10 top-72 right-[-80px] absolute shadow-2xl bg-[#232323] opacity-80 border-[#383737]'></div>
                    <div className=' h-64 w-96 border border-solid border-opacity-50 rounded-xl z-10 top-64 right-0 absolute shadow-2xl bg-[#232323] opacity-80 border-[#383737]'></div>
                </div>
        </div>
    );
};
