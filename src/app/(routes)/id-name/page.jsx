import React from 'react';
import Link from 'next/link';
import InputComponent from '../../Components/InputComponent/InputComponent';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';

export default function idName() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[5.25rem] text-font-color text-center">
        Sakura Tarot
      </h1>
      <img src="img/kinomoto.png" alt="Sakura Tarot" className="p-7" mt-0></img>
      <p>Tu Nombre</p>
      
      <InputComponent />
      <Link href="/choose-card" className="mb-11 mt-12">
        <ButtonComponent text="Empezar Tirada" />
      </Link>

    </div>
  );
}
