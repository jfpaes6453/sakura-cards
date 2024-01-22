import React, { useState } from 'react';
import useFetch from '../../../utils/useFetch';
import Card from './Card';
import { useRouter } from 'next/navigation';


export default function CardDown() {
  const urlApi = 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/';
  const excludedIds = ['53', '55'];

  const { data, loading } = useFetch(urlApi);
  const router = useRouter();

  const [selectedCards, setSelectedCards] = useState([]);
  const [subtitleCard, setSubtitleCard] = useState('para el pasado');
  const [cardPositions, setCardPositions] = useState({});

  const calculateSelectedCardPosition = (index) => {
    const verticalGap = 300;
    const x = 300 + index * 200;
    const y = verticalGap;
    return { x, y };
  };

  const calculateUnselectedCardPosition = (index) => {
    const centerX = window.innerWidth / 2.5;
    const centerY = window.innerHeight / 2.5;
    const radius = 640;

    const x = centerX + radius * Math.cos((index / data.length) * Math.PI);
    const y = centerY + .45 * radius * Math.sin((index / data.length + 1) * Math.PI);

    return { x, y };
  };


  const handleCardSelect = (cardId) => {
    if (selectedCards.length < 3 && !selectedCards.includes(cardId)) {
      const newSelectedCards = [...selectedCards, cardId];
      setSelectedCards(newSelectedCards);

      const newCardPositions = newSelectedCards.reduce((positions, cardId, index) => {
        const position = calculateSelectedCardPosition(index);
        return {
          ...positions,
          [cardId]: position,
        };
      }, {});

      setCardPositions((prevPositions) => ({
        ...prevPositions,
        ...newCardPositions,
      }));
    }

    const subtitles = ['para el presente', 'para el futuro', 'Tu lectura'];
    setSubtitleCard(subtitles[selectedCards.length] || subtitleCard);


    if (selectedCards.length === 3) {
      const queryParams = selectedCards.map((card, index) => `carta${index + 1}=${card}`).join('&');
      router.push(`/reading?${queryParams}`);
    }
  }

  const filteredData = data ? data.filter((card) => !excludedIds.includes(card.id)) : [];

  const calculateCardPosition = (isSelected, cardId, index) => {
    const position = isSelected ? cardPositions[cardId] : calculateUnselectedCardPosition(index);

    const adjustedY = isSelected ? position.y + 150 : position.y

    return isSelected
      ? `translate(50%, 50%) translate(${position.x}px, ${adjustedY}px)`
      : `translate(50%, 50%) translate(${position.x}px, ${position.y}px)`;
  };

  if (loading) {
    return <p className="text-[3.5rem] mx-28">Cargando...</p>;
  }

  return (
    <div className="flex justify-center items-center  relative md:w-full h-full">
      <section className="relative h-[1100px] w-screen">
        <h3 className="text-center md:text-5xl text-4xl">{subtitleCard}</h3>
        {filteredData.map((card, index) => {
          const isSelected = selectedCards.includes(card.id);
          const style = { transform: calculateCardPosition(isSelected, card.id, index) };

          return (
            <Card
              key={card.id}
              id={card.id}
              name={card.spanishName}
              onSelect={handleCardSelect}
              isSelected={isSelected}
              style={style}
              className='p-[15rem] m-[15rem]'
              src={card.cardsReverse.clowReverse}
            />
          );
        })}
      </section>
    </div>
  );
};
