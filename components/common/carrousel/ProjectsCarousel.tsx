'use client'

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCard from "../cards/ProjectCard";
import { type CarouselApi } from "@/components/ui/carousel"


const projects: { 
    title: string; 
    src: string; 
    description: string; 
    stack: { src: string; name: string; }[]; 
    github: string; 
    deploy: string; 
}[] = [
    {
        title: "IStock Photo",
        src: "/images/snapshot-istock.png",
        description: "iStock Photo stands as a premier stock photography platform, providing users with access to a diverse range of royalty-free visual assets, including images, illustrations, videos, and audio clips. Employing technologies like Python (Django) or Node.js on the backend and frontend frameworks like React or Angular, iStock Photo ensures a seamless and interactive user experience. Cloud-based storage enhances efficient asset management, and secure payment gateways contribute to a reliable transaction process. The platform is a go-to resource for individuals and businesses seeking professional-quality visual content for various creative projects.",
        stack: [
            { src: "icons/tools/postgresql.svg", name: "PostgreSQL" },
            { src: "icons/tools/docker.svg", name: "Docker" },
            { src: "icons/tools/python.svg", name: "Python" },
            { src: "icons/tools/tailwind.svg", name: "Tailwind CSS" },
            { src: "icons/tools/typescript.svg", name: "TypeScript" },
            { src: "icons/tools/typescript.svg", name: "TypeScript" },
            { src: "icons/tools/typescript.svg", name: "TypeScript" },
            { src: "icons/tools/typescript.svg", name: "TypeScript" },
            { src: "icons/tools/python.svg", name: "Python" },

        ],
        github: "",
        deploy: ""        
    },
    {
        title: "IStock Photo",
        src: "/images/snapshot-istock.png",
        description: "iStock Photo stands as a premier stock photography platform, providing users with access to a diverse range of royalty-free visual assets, including images, illustrations, videos, and audio clips. Employing technologies like Python (Django) or Node.js on the backend and frontend frameworks like React or Angular, iStock Photo ensures a seamless and interactive user experience. Cloud-based storage enhances efficient asset management, and secure payment gateways contribute to a reliable transaction process. The platform is a go-to resource for individuals and businesses seeking professional-quality visual content for various creative projects.",
        stack: [
            { src: "icons/tools/postgresql.svg", name: "PostgreSQL" },
            { src: "icons/tools/docker.svg", name: "Docker" },
            { src: "icons/tools/python.svg", name: "Python" },
            { src: "icons/tools/tailwind.svg", name: "Tailwind CSS" },
            { src: "icons/tools/typescript.svg", name: "TypeScript" },
            { src: "icons/tools/typescript.svg", name: "TypeScript" },
            { src: "icons/tools/typescript.svg", name: "TypeScript" },
            { src: "icons/tools/typescript.svg", name: "TypeScript" }
        ],
        github: "",
        deploy: ""        
    }
];



export function ProjectsCarousel() {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
 
  return (
    <div className="px-12 w-full h-96 mt-12 z-10"> 
      <Carousel setApi={setApi} className="w-full max-w-full max-h-full flex h-full"
          opts={{
              align: "start",
              loop: true,
          }}
          >
        <CarouselContent>
          {projects.map((project,index) => (
            <CarouselItem key={index} className="">
              <ProjectCard
              title={project.title}
              src={project.src}
              description={project.description}
              stack={project.stack}
              github={project.github}
              deploy={project.deploy}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=""/>
        <CarouselNext className=""/>
      </Carousel>
      <div className="py-8 flex w-full h-fit items-center justify-center text-center font-light text-xl text-muted-foreground">
        Project {current} of {count}
      </div>
    </div>
  )
}
