'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

const CardFan = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
        const data = await response.json();
        setCards(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando cartas...</p>;
  }

  const calculatePosition = (index, totalCards) => {
    const angle = (-index / totalCards) * Math.PI; // Ángulo en radianes
    const radius = 500; // Ajusta este valor según tus necesidades (mayor valor para más espacio)
    const centerX = window.innerWidth / 2 -100;
    const centerY = window.innerHeight / 2 +50 ; // Ajusta este valor según tus necesidades

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    return { x, y };
  };

  return (
    <div className="flex justify-center items-center mt-16 relative">
      {cards.map((card, index) => {
        const { x, y } = calculatePosition(index, cards.length);
        return (
          <div
            key={card.id}
            className="absolute"
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
          >
            <Image
              src={card.cardsReverse.clowReverse} 
              width={150}
              height={150}
              alt={card.englishName}
              className="w-aut h-auto object-cover max-w-none rounded-[15px] shadow-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardFan;