'use client'
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Image from 'next/image'
import {usePathname,useRouter} from '@/navigation'
import { useTranslations } from 'next-intl';

  export default function Config(){
    const pathname = usePathname();
    const t = useTranslations('header.menu.config');
    const router = useRouter();

    return (
        <Popover>
            <PopoverTrigger>
              <Button variant='ghost'><Image src='icons/gear.svg' className="" height={25} width={25} alt="House Icon"/></Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="">
                    <p className="font-light text-2xl ml-3 mt-2">{t('languages')}</p>
                    <div className="mt-2">
                        <div onClick={()=> router.push(pathname,{locale:'en-US'})} className="flex cursor-pointer justify-start items-center mt-1 w-full px-6 py-2 hover:bg-[#232323] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                            <Image src='icons/flag-usa.svg' className="" height={25} width={25} alt="House Icon"/>
                            <p className="font-light text-2xl ml-3 mt-2">{t('english')}</p>
                        </div>
                        <div onClick={()=> router.push(pathname,{locale:'pt-BR'})} className="flex cursor-pointer justify-start items-center mt-1 w-full px-6 py-2 hover:bg-[#232323] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                            <Image src='icons/flag-br.svg' className="" height={25} width={25} alt="House Icon"/>
                            <p className="font-light text-2xl ml-3 mt-2">{t('portuguese')}</p>
                        </div>
                    </div>
              </div>
            </PopoverContent>
        </Popover>
    )
  }