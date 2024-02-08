'use client'

import {useParams,usePathname} from 'next/navigation'
import { navigationMenuNoneStyle } from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from 'next/image'
import { locales } from './Locale';

export const Lang = () => {

    const {lang} = useParams();
    const pathname = usePathname();

    const getPathname = (lng: string) => {
        const path = pathname.split('/' + lang).join('');

        return '/' + lng + path;
      };


    return (
        <>
            {locales.map((lng) => {
                if (lng.code === lang) return null;
                return (
                    <Link key={lng.code} href={getPathname(lng.code)} className="bg-inherit" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuNoneStyle()}>
                            <Image src={lng.ico} className="filter grayscale hover:filter-none transition-all duration-300 ease-in-out bg-inherit" height={30} width={30} alt="Flag Icon"/>
                        </NavigationMenuLink>
                    </Link>
                );
            })}
        </>
    );
}