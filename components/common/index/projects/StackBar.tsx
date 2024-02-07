import React from 'react';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface StackBarProps {
  stack: { src: string; name: string; }[];
}

const StackBar: React.FC<StackBarProps> = ({ stack }) => {
  const truncatedStack = stack.slice(0, 8); 
  const overflowStack = stack.slice(8);

  return (
    <div className="flex gap-2">
      {truncatedStack.map((item, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='flex w-10 h-10 items-center justify-center p-2 rounded-sm hover:bg-[#171717] bg-[#0b0b0b] bg-opacity-60 border-[0.5px] border-solid filter grayscale transition-all duration-300 ease-in-out hover:filter-none border-[#383737]'>
                <Image src={item.src} height={25} width={25} alt={`${item.name}`} />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              {item.name}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
      {stack.length > 8 && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='flex items-center justify-center w-10 h-10 text-[#909090] p-2 rounded-sm hover:bg-[#171717] bg-[#0b0b0b] bg-opacity-60 border-[0.5px] border-solid filter grayscale transition-all duration-300 ease-in-out hover:filter-none border-[#383737]'>
                <span className='select-none'>...</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              {overflowStack.map((item, index) => (
                <div key={index}>{item.name}</div>
              ))}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default StackBar;
