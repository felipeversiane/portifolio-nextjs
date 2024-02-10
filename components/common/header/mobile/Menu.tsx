import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {  
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { useTranslations } from "next-intl"
import Config from "./Config"

export function Menu() {
  const social: {title:string,src:string,href:string}[] = [
    {
      title:"Linkedin",
      src:"icons/social-linkedin.svg",
      href:"https://www.linkedin.com/in/felipeversiane/",
    },
    {
      title:"Instagram",
      src:"icons/social-instagram.svg",
      href:"https://www.instagram.com/felipeffv_/",
    },
    {
      title:"Github",
      src:"icons/social-github.svg",
      href:"https://github.com/felipeversiane",
    },
    {
      title:"Spotify",
      src:"icons/social-spotify.svg",
      href:"https://open.spotify.com/user/iamlipe?si=1ca828be84d24316",
    },
    {
      title:"Whatsapp",
      src:"icons/social-whatsapp.svg",
      href:"https://w.app/oWNQTn",
    },
  ]
  const me = ['aboutme','projects','tools'] as const;
  
  const t = useTranslations('header.menu');

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Image src='icons/menu-burguer.svg' height={20} width={20} alt="Menu Icon"/>
        </Button>
      </SheetTrigger>
      <SheetContent >
        <SheetHeader>
              
        </SheetHeader>
        <div className="grid gap-4 py-4 mt-8">
              <Link href="/" className="flex justify-start items-center mt-1 w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                        <Image src='icons/house.svg' className="" height={25} width={25} alt="House Icon"/>
                        <p className="font-light text-2xl ml-3 mt-2">{t('home')}</p>
              </Link>
              <div className="mt-4">
                <p className="title font-light text-xl text-[#909090]">
                    {t('me')} 
                </p>
                {me.map((item)=>{
                  return (
                    <Link href={t(`about_me.${item}.href`)} className="flex justify-start items-center mt-1 w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                      <Image src={t(`about_me.${item}.src`)} className="" height={25} width={25} alt="Icon"/>
                      <p className="font-light text-2xl ml-3 mt-2"> {t(`about_me.${item}.title`)}</p>
                    </Link>
                  )
                })}
              </div>
              <div className="mt-4">
                <p className="title font-light text-xl text-[#909090]">
                    {t('social')} 
                </p>
                {social.map((item)=> {
                  return (
                    <Link href={item.href}className="flex justify-between items-center mt-1 w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                      <div className="flex ">
                        <Image src={item.src} className="" height={25} width={25} alt="Icon"/>
                        <p className="font-light text-2xl ml-3 mt-2">{item.title}</p>
                      </div>
                      <Image src='icons/arrow-up-right.svg' className="" height={15} width={15} alt="Arrow-Up Icon"/>
                    </Link>
                  )
                })}
              </div>
        </div>
        <hr className="w-full right-0 absolute line h-0.5 bg-[#383737]"/>
        <SheetFooter>
          <div className="w-full h-fit flex justify-end items-end pt-6">
          <Config/>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
