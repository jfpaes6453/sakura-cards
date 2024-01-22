import React from 'react';
import InputComponent from '@/app/components/InputComponent/InputComponent';


export default function idName() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[5.25rem] text-font-color text-center">
        Sakura Tarot
      </h1>
      <img src="img/kinomoto.png" alt="Sakura Tarot" className="p-7" mt-0></img>
      
      <InputComponent />

    </div>
  );
}
