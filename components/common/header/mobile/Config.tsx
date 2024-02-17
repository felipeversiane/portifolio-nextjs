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
        <Popover>
            <PopoverTrigger>
              <Button variant='ghost'><Image src='icons/sheet/gear.svg' className="" height={25} width={25} alt="Gears Icon"/></Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="">
                    <p className="font-light text-2xl ml-3 mt-2">{t('languages')}</p>
                    <div className="mt-2">
                      {languages.map((language,index)=>{
                        return (
                          <div key={index} onClick={()=> router.push(pathname,{locale:language.locale})} className="flex cursor-pointer justify-start items-center mt-1 w-full px-6 py-2 hover:bg-[#232323] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                              <Image src={language.locale} className="" height={25} width={25} alt="Flag Icon"/>
                              <p className="font-light text-2xl ml-3 mt-2">{t(`${language.name}`)}</p>
                          </div>
                        )
                      })}
                    </div>
              </div>
            </PopoverContent>
        </Popover>
    )
  }