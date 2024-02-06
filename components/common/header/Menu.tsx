import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {  
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Menu() {

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
        <Link href="/aboutme" className="flex justify-start items-center mt-1 w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                  <Image src='icons/house.svg' className="" height={25} width={25} alt="House Icon"/>
                  <p className="font-light text-2xl ml-3 mt-2">Home</p>
                </Link>
              <div className="mt-4">
                <p className="title font-light text-xl text-[#909090]">
                    Me 
                </p>
                <Link href="/aboutme" className="flex justify-start items-center mt-1 w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                  <Image src='icons/id-card.svg' className="" height={25} width={25} alt="Id-Card Icon"/>
                  <p className="font-light text-2xl ml-3 mt-2"> About me</p>
                </Link>
                <Link href="/projects" className="flex justify-start items-center mt-1  w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                  <Image src='icons/archive.svg' className="" height={25} width={25} alt="Archive Icon"/>
                  <p className="font-light text-2xl ml-3 mt-2">Projects</p>
                </Link>
                <Link href="/stack" className="flex justify-start items-center mt-1  w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                  <Image src='icons/tools.svg' className="" height={25} width={25} alt="Tools Icon"/>
                  <p className="font-light text-2xl ml-3 mt-2">Stack and Tools</p>
                </Link>
                {/* <Link href="/notebook" className="flex justify-start items-center mt-1  w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                  <Image src='icons/notebook.svg' className="" height={25} width={25} alt="Notebook Icon"/>
                  <p className="font-light text-2xl ml-3 mt-2">Notebook</p>
                </Link> */}
              </div>
              <div className="mt-4">
                <p className="title font-light text-xl text-[#909090]">
                    Social Media 
                </p>
                <Link href="/linkedin" className="flex justify-between items-center mt-1 w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                  <div className="flex ">
                    <Image src='icons/social-linkedin.svg' className="" height={25} width={25} alt="Linkedin Icon"/>
                    <p className="font-light text-2xl ml-3 mt-2">Linkedin</p>
                  </div>
                  <Image src='icons/arrow-up-right.svg' className="" height={15} width={15} alt="Arrow-Up Icon"/>
                </Link>
                <Link href="/instagram" className="flex justify-between items-center mt-1 w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                  <div className="flex ">
                    <Image src='icons/social-instagram.svg' className="" height={25} width={25} alt="Instagram Icon"/>
                    <p className="font-light text-2xl ml-3 mt-2">Instagram</p>
                  </div>
                  <Image src='icons/arrow-up-right.svg' className="" height={15} width={15} alt="Arrow-Up Icon"/>
                </Link>
                <Link href="/github" className="flex justify-between items-center mt-1 w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                  <div className="flex ">
                    <Image src='icons/social-github.svg' className="" height={25} width={25} alt="Github Icon"/>
                    <p className="font-light text-2xl ml-3 mt-2">Github</p>
                  </div>
                  <Image src='icons/arrow-up-right.svg' className="" height={15} width={15} alt="Arrow-Up Icon"/>
                </Link>
                <Link href="/spotify" className="flex justify-between items-center mt-1 w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                  <div className="flex ">
                    <Image src='icons/social-spotify.svg' className="" height={25} width={25} alt="Spotify Icon"/>
                    <p className="font-light text-2xl ml-3 mt-2">Spotify</p>
                  </div>
                  <Image src='icons/arrow-up-right.svg' className="" height={15} width={15} alt="Arrow-Up Icon"/>
                </Link>
                <Link href="/discord" className="flex justify-between items-center mt-1 w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                  <div className="flex ">
                    <Image src='icons/social-discord.svg' className="" height={25} width={25} alt="Discord Icon"/>
                    <p className="font-light text-2xl ml-3 mt-2">Discord</p>
                  </div>
                  <Image src='icons/arrow-up-right.svg' className="" height={15} width={15} alt="Arrow-Up Icon"/>
                </Link>
                <Link href="/whatsapp" className="flex justify-between items-center mt-1 w-full px-6 py-2 hover:bg-[#191919] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                  <div className="flex">
                    <Image src='icons/social-whatsapp.svg' className="" height={25} width={25} alt="Whatsapp Icon"/>
                    <p className="font-light text-2xl ml-3 mt-2">Whatsapp</p>
                  </div>
                  <Image src='icons/arrow-up-right.svg' className="" height={15} width={15} alt="Arrow-Up Icon"/>
                </Link>
              </div>
        </div>
        <hr className="w-full right-0 absolute line h-0.5 bg-[#383737]"/>
        <SheetFooter>
          <div className="w-full h-fit flex justify-end items-end pt-6">
          <Popover>
            <PopoverTrigger>
              <Button variant='ghost'><Image src='icons/gear.svg' className="" height={25} width={25} alt="House Icon"/></Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="">
              <p className="font-light text-2xl ml-3 mt-2">Languages</p>
              <div className="mt-2">
                  <Link href="/en" className="flex justify-start items-center mt-1 w-full px-6 py-2 hover:bg-[#232323] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                      <Image src='icons/flag-usa.svg' className="" height={25} width={25} alt="House Icon"/>
                      <p className="font-light text-2xl ml-3 mt-2">English</p>
                  </Link>
                  <Link href="/pt" className="flex justify-start items-center mt-1 w-full px-6 py-2 hover:bg-[#232323] transition-all duration-300 active:bg-[#121212]  rounded-lg">
                      <Image src='icons/flag-br.svg' className="" height={25} width={25} alt="House Icon"/>
                      <p className="font-light text-2xl ml-3 mt-2">Portuguese</p>
                  </Link>
              </div>
              </div>
            </PopoverContent>
          </Popover>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
