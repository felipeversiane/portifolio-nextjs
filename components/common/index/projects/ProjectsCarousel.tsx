import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCard from "./ProjectCard";


const projects: { title: string; src: string; description: string, stack:string[], }[] = [
    {
        title:"",
        src:"",
        description:"",
        stack:["","",""]        
    },
    {
        title:"",
        src:"",
        description:"",
        stack:["","",""]        
    },
    {
        title:"",
        src:"",
        description:"",
        stack:["","",""]        
    },
    {
        title:"",
        src:"",
        description:"",
        stack:["","",""]        
    },
    {
        title:"",
        src:"",
        description:"",
        stack:["","",""]        
    }
  ]

export function ProjectsCarousel() {
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const handleSlideChange = (index: number) => {
    setCurrent(index);
  };


  return (
    <div className="px-12 w-full h-96 mt-12"> 
      <Carousel className="w-full max-w-full max-h-full h-full"
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
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext/>
      </Carousel>
    </div>
  )
}
