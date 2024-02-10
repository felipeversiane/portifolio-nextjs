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
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
            <div className='p-2 hover:bg-[#232323] rounded-md transition-all duration-300 ease-in-out'>
                <Image src="/icons/translate.svg" width={21} height={21} alt='Translate Icon'/>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=' w-40'>
        <DropdownMenuItem onClick={()=> router.push(pathname,{locale:'pt-BR'})}>
            <div className='flex items-center justify-center'>
                <Image src="/icons/flag-br.svg" width={20} height={20} alt='Brazil Flag'/>
                <span className='font-light text-lg ml-2'>
                    {t('portuguese')}
                </span> 
            </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=> router.push(pathname,{locale:'en-US'})}>
            <div className='flex items-center  justify-center'>
                <Image src="/icons/flag-usa.svg" width={20} height={20} alt='USA Flag'/>
                <span className=' font-light text-lg ml-2'>
                    {t('english')}
                </span> 
            </div>
        </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
