'use client'

import { useState } from 'react'
import useFetch from '../../../utils/useFetch'
import Card from './Card'
import { useRouter } from 'next/navigation'



const CardFan = () => {
  const urlApi = 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/'
  const { data, loading } = useFetch(urlApi)
  const excludedIds = ['53', '55']

  const [selectedCards, setSelectedCards] = useState([])
  const [subtitleCard, setSubtitleCard] = useState('para el pasado')
  const [cardPositions, setCardPositions] = useState({});

  const router = useRouter()
  
  const filteredData = data ? data.filter(card => !excludedIds.includes(card.id)) : [];
  
  
  const handleCardSelect = (cardId) => {
    if (selectedCards.length < 3 && !selectedCards.includes(cardId)) {
      const newSelectedCards = [...selectedCards, cardId]
      setSelectedCards(newSelectedCards)

      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const newCardPositions = newSelectedCards.reduce((positions, cardId, index) => {
        const angle = (index / 2 - 0.5) * Math.PI; // Ángulo en radianes
        const radius = 120; // Distancia al centro, ajusta según sea necesario

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        return {
          ...positions,
          [cardId]: { x, y },
        };
      }, {});

      setCardPositions((prevPositions) => ({
        ...prevPositions,
        ...newCardPositions,
      }))
    }
    if (selectedCards.length === 0) {
        setSubtitleCard('para el presente');
    } else if (selectedCards.length === 1) {
        setSubtitleCard('para el futuro');
    } else if (selectedCards.length === 2) {
        setSubtitleCard('Tu lectura')
        
        
    }
    if(selectedCards.length === 3){
        router.push(`/reading?carta1=${selectedCards[0]}&carta2=${selectedCards[1]}&carta3=${selectedCards[2]}`);
    }
  } 

  if (loading) {
    return <p className="text-[3.5rem] mx-28">Cargando...</p>;
  }

  const calculatePosition = (index, totalCards) => {
    const angle = (-index / totalCards) * Math.PI; // Ángulo en radianes
    const radius = 500
    const centerX = window.innerWidth / 2 - 90;
    const centerY = window.innerHeight / 2 + 200 ; // Ajusta este valor según tus necesidades

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    return { x, y };
  };

  return (

    <div className="flex justify-center items-center md:h-[1117px] relative md:w-full h-full">
      <h3 className='md:text-5xl text-4xl flex items-center justify-center'>{subtitleCard}</h3>

      {filteredData.map((card, index) => {
        const isSelected = selectedCards.includes(card.id)
        let style = isSelected ? { transform: `translate(${cardPositions[card.id].x}px, ${cardPositions[card.id].y}px)` } : {};

        if (isSelected) {
            switch (selectedCards.indexOf(card.id)) {
                case 0:
                    style = {
                        transform: 'translate(50%, 50%) translate(80px, 350px)',
                    };
                    break;
                case 1:
                    style = {
                        transform: 'translate(50%, 50%) translate(10px, 350px)',
                    };
                    break;
                case 2:
                    style = {
                        transform: 'translate(50%, 50%) translate(-120px, 350px)',
                    };
                    break;
                default:
                    break;
            }
        }
        const { x, y } = calculatePosition(index, filteredData.length);
        return (
          <div
            key={card.id}
            className="absolute"
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
          >
            <Card
                key={card.id}
                id={card.id}
                name={card.spanishName}
                onSelect={handleCardSelect}
                isSelected={isSelected}
                style={style}
                src={card.cardsReverse.clowReverse}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardFan;