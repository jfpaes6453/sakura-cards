'use client'

import React, { useState } from 'react';
import ButtonsRendered from '../ButtonComponent/ButtonsRendered';
import Image from 'next/image';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      {showMenu && (
        <nav>
          <ButtonsRendered />
        </nav>
      )}
      {/*      <button onClick={toggleMenu}>{showMenu ? '✕' : '☰'}</button> */}
      <button onClick={toggleMenu} className="p-20">
        <Image
          src={'/img/MenuKero.png'}
          alt={'Menu'}
          width={200}
          height={200}
        />
      </button>
    </>
  );
}
