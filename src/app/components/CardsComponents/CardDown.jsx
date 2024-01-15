import { useState } from 'react';
import useFetch from '../../../utils/useFetch';
import Card from './Card';
import { useRouter } from 'next/navigation';

export default function CardDown() {
  const urlApi = 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/';
  const { data, loading } = useFetch(urlApi);
  const excludedIds = ['53', '55'];
  const router = useRouter();

  const [selectedCards, setSelectedCards] = useState([]);
  const [subtitleCard, setSubtitleCard] = useState('para el pasado');

  if (loading) {
    return <p className="text-[3.5rem] mx-28">Cargando...</p>;
  }

  const handleCardSelect = (cardId) => {
    if (selectedCards.length < 3 && !selectedCards.includes(cardId)) {
      setSelectedCards([...selectedCards, cardId]);
    }

    const subtitles = ['para el presente', 'para el futuro', 'Tu lectura'];
    setSubtitleCard(subtitles[selectedCards.length] || subtitleCard);

    if (selectedCards.length === 3) {
      const queryParams = selectedCards.map((card, index) => `carta${index + 1}=${card}`).join('&');
      router.push(`/reading?${queryParams}`);
    }
  };

  const filteredData = data ? data.filter((card) => !excludedIds.includes(card.id)) : [];

  const calculateCardPosition = (isSelected, cardId, index) => {
    const positions = [
      { x: 260, y: 300 },
      { x: 480, y: 300 },
      { x: 700, y: 300 },
    ];
  
    const selectedCardIndex = selectedCards.indexOf(cardId);
    const position = selectedCardIndex !== -1 ? positions[selectedCardIndex] : { x: 0, y: 0 };
  
    const unselectedX = 520 + 560 * Math.cos((index / filteredData.length + 1) * Math.PI);
    const unselectedY = 200 + 300 * Math.sin((index / filteredData.length + 1) * Math.PI);
  
    return isSelected
      ? `translate(50%, 50%) translate(${position.x}px, ${position.y}px)`
      : `translate(50%, 50%) translate(${unselectedX}px, ${unselectedY}px)`;
  };
  

  return (
    <div className="md:w-full md:h-full">
      <section className="relative h-[800px] w-screen">
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
              src={card.cardsReverse.clowReverse}
            />
          );

        })}
      </section>
    </div>
  );
}
