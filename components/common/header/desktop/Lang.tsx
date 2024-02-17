'use client'

import React from 'react';
import Image from 'next/image';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import {usePathname,useRouter} from '@/navigation'
import { useTranslations } from 'next-intl';

export const Lang = () => {
 const pathname = usePathname();
 const router = useRouter();
 const t = useTranslations("header.right-side.translate");
 const languages =[
  {
    name:"portuguese",
    src:"/icons/flags/flag-br.svg",
    locale:"pt-BR"
  },
  {
    name:"english",
    src:"/icons/flags/flag-usa.svg",
    locale:"en-US"
  }
 ] as const;
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
            <div className='p-2 hover:bg-[#232323] rounded-md transition-all duration-300 ease-in-out'>
                <Image src="/icons/sheet/translate.svg" width={20} height={20} alt='Translate Icon'/>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=' w-40'>
        {languages.map((language,index)=>{
          return (
            <DropdownMenuItem key={index} onClick={()=> router.push(pathname,{locale:language.locale})}>
              <div className='flex items-center  justify-center'>
                  <Image src={language.src} width={20} height={20} alt='USA Flag'/>
                  <span className=' font-light text-lg ml-2'>
                      {t(`${language.name}`)}
                  </span> 
              </div>
            </DropdownMenuItem>
          )
        })}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
