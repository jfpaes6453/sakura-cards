import React from 'react';
import InputComponent from '@/app/components/InputComponent/InputComponent';
import Image from 'next/image';


export default function idName() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[5.25rem] text-font-color text-center">
        Sakura Tarot
      </h1>
      <Image 
        src="/img/Kinomoto.png" 
        alt="Sakura Tarot" 
        className="p-7"
        width={496}
        height={456}
      />
      
      <InputComponent />

    </div>
  );
}
