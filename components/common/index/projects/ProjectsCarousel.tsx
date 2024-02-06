import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCard from "./ProjectCard";


const projects: { title: string; src: string; description: string, stack:string[],github:string,deploy:string }[] = [
    {
        title:"IStock Photo",
        src:"/images/snapshot-istock.png",
        description:"iStock Photo stands as a premier stock photography platform, providing users with access to a diverse range of royalty-free visual assets, including images, illustrations, videos, and audio clips. Employing technologies like Python (Django) or Node.js on the backend and frontend frameworks like React or Angular, iStock Photo ensures a seamless and interactive user experience. Cloud-based storage enhances efficient asset management, and secure payment gateways contribute to a reliable transaction process. The platform is a go-to resource for individuals and businesses seeking professional-quality visual content for various creative projects.",
        stack:["icons/tools/postgresql.svg","icons/tools/docker.svg","icons/tools/python.svg","icons/tools/tailwind.svg","icons/tools/typescript.svg","icons/tools/python.svg","icons/tools/python.svg","icons/tools/python.svg", ],
        github:"",
        deploy:""        
    },
    {
      title:"IStock Photo",
      src:"/images/snapshot-istock.png",
      description:"iStock Photo stands as a premier stock photography platform, providing users with access to a diverse range of royalty-free visual assets, including images, illustrations, videos, and audio clips. Employing technologies like Python (Django) or Node.js on the backend and frontend frameworks like React or Angular, iStock Photo ensures a seamless and interactive user experience. Cloud-based storage enhances efficient asset management, and secure payment gateways contribute to a reliable transaction process. The platform is a go-to resource for individuals and businesses seeking professional-quality visual content for various creative projects.",
      stack:["icons/tools/postgresql.svg","icons/tools/docker.svg","icons/tools/python.svg","icons/tools/tailwind.svg","icons/tools/typescript.svg","icons/tools/python.svg","icons/tools/python.svg","icons/tools/python.svg", ],
      github:"",
      deploy:""        
  },
    
  ]

export function ProjectsCarousel() {
  return (
    <div className="px-12 w-full h-96 mt-12 z-10"> 
      <Carousel className="w-full max-w-full max-h-full flex h-full"
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
    </div>
  )
}
