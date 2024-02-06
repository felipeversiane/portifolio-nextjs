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
    <div className="h-96 max-h-96 rounded-xl bg-[#232323] bg-opacity-50 border border-solid border-opacity-50 border-[#383737]">
        <div className=" h-full w-full flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">sem conteudo por enquanto</span>
        </div>
    </div>
  );
};
export default ProjectCard;
