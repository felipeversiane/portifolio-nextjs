"use client"

import * as React from "react"
import Link from "next/link"
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  navigationMenuNoneStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Lang } from "./Lang"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About me",
    href: "/aboutme",
    description:
      "Get to know a little more about me and what I do.",
  },
  {
    title: "Projects",
    href: "/projects",
    description:
      "All the projects I have been developing during my career.",
  },
  {
    title: "Stack and Tools",
    href: "/stack",
    description:
      "All the languages ​​I know along with the tools and apps I use.",
  },
]

export function Navbar() {
  return (
  <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-3 md:w-[300px] md:grid-cols-1 lg:w-[300px] ">
              {components.map((component) => (
                <ListItem 
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Lang/>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-light leading-none">{title}</div>
          <p className="line-clamp-2 text-md leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
