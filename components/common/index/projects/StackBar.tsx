import React from 'react';
import Image from 'next/image';

interface StackBarProps {
  stack: string[];
}

const StackBar: React.FC<StackBarProps> = ({ stack }) => {
  const truncatedStack = stack.slice(0, 7); // Pegue apenas os primeiros 7 ícones

  return (
    <div className="flex gap-2">
      {truncatedStack.map((language, index) => (
        <div key={index} className='flex w-10 h-10 first-letter:items-center justify-center p-2 rounded-sm hover:bg-[#171717] bg-[#0b0b0b] bg-opacity-60 border-[0.5px] border-solid filter grayscale transition-all duration-300 ease-in-out hover:filter-none border-[#383737]'>
          <Image src={language} height={25} width={25} alt={`Language ${index + 1}`} />
        </div>
      ))}
      {stack.length > 7 && (
        <div className='flex items-center justify-center w-10 h-10 text-[#909090] p-2 rounded-sm hover:bg-[#171717] bg-[#0b0b0b] bg-opacity-60 border-[0.5px] border-solid filter grayscale transition-all duration-300 ease-in-out hover:filter-none border-[#383737]'>
          <span>...</span>
        </div>
      )}
    </div>
  );
};

export default StackBar;
