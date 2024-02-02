import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface ProjectCardProps {
  title: string;
  src: string;
  description: string;
  stack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  src,
  description,
  stack,
}) => {
  return (
   <div className="h-96 max-h-96">
    <Card className="w-full h-full">
        <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">1</span>
        </CardContent>
    </Card>
   </div>
  );
};
export default ProjectCard;
