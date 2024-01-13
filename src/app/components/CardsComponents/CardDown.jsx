'use client'

import { useState } from 'react';
import useFetch from '../../../utils/useFetch';
import Card from './Card';
import './index.css';
import { useRouter } from 'next/navigation'

function CardDown() {
    const urlApi = 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/';
    const { data } = useFetch(urlApi);
    const excludedIds = ['53', '55']

    const router = useRouter()

    const [selectedCards, setSelectedCards] = useState([]);

    const handleCardSelect = (cardId) => {
        if (selectedCards.length < 3 && !selectedCards.includes(cardId)) {
            setSelectedCards([...selectedCards, cardId]);
        }
        if (selectedCards.length === 3) {
            
            router.push(`/reading?carta1=${selectedCards[0]}&carta2=${selectedCards[1]}&carta3=${selectedCards[2]}`);
        }
    }

    const filteredData = data ? data.filter(card => !excludedIds.includes(card.id)) : [];

    return (
        <div className="card-fan">
            {filteredData.map((card, index) => {
                const isSelected = selectedCards.includes(card.id);
                let style = {}

                if (isSelected) {
                    switch (selectedCards.indexOf(card.id)) {
                        case 0:
                            style = {
                                transform: 'translate(50%, 50%) translate(280px, 650px)',
                            };
                            break;
                        case 1:
                            style = {
                                transform: 'translate(50%, 50%) translate(510px, 650px)',
                            };
                            break;
                        case 2:
                            style = {
                                transform: 'translate(50%, 50%) translate(740px, 650px)',
                            };
                            break;
                        default:
                            break;
                    }
                } else {
                    const angle = (index / filteredData.length + 1) * Math.PI;
                    const radius = 550;
                    const centerX = 550;
                    const centerY = 400;
                    const x = centerX + radius * Math.cos(angle);
                    const y = centerY + radius * Math.sin(angle);
                    style = {
                        transform: `translate(50%, 50%) translate(${x}px, ${y}px)`,
                    };
                }

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
        </div>
    );
}

export default CardDown
