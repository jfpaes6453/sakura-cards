'use client'

import { useState, useEffect } from "react";
import { getRandomCards } from "@/utils/cardUtils"
import useFetch from "@/utils/useFetch";
import Card from "./Card"
import { Noto_Serif_JP } from "next/font/google";


const inder = Noto_Serif_JP({ weight: ['200'],
subsets: ['latin']})


function CardReading() {
    const [randomCards, setRandomCards] = useState([])

    const urlApi = 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/'

    const { data, loading, error } = useFetch(urlApi)

    useEffect(() => {
        if (!data || data.length === 0) {
        return
        }

        const storedCards = JSON.parse(localStorage.getItem('selectedRandomCards'))

        const cards = storedCards || getRandomCards(3, data)
        
        setRandomCards(cards)
        localStorage.setItem('selectedRandomCards', JSON.stringify(cards))

    }, [data])

    if (loading) {
        return <p className="text-[3.5rem] mx-28">Cargando...</p>;
    }

    if (error) {
        return <p>Error al cargar los datos</p>;
    }

    const subtitleTime = ['pasado', 'presente', 'futuro']

    return (
        <div>
            <ul className="mx-36 my-20">
                {randomCards.map((card, index) => (
                        <li className="flex flex-row my-8 py-7 items-center">
                            <Card
                            key={card.id}
                            id={card.id}
                            name={card.spanishName}
                            src={card.clowCard}
                            onSelect={() => {}}
                            isSelected={false}
                            style={{}} 
                            />
                            <article className="mx-36 opacity-75 pl-44">
                                <div className="flex gap-10 items-center">

                                    <div className="flex flex-col ">
                                        <h3 className="text-4xl">El {subtitleTime[index]}</h3>
                                        <h4 className="text-fill text-[42px]">{card.spanishName}</h4>
                                    </div>
                                    <h5 className={`${inder.className} text-[70px] opacity-[.69] text-fill`}>{card.kanji}</h5>
                                </div>
                                <p className="text-fill text-3xl my-6">{card.meaning}</p>
                                <hr className="mt-36"/>
                            </article>
                        </li>
                ))}
            </ul>
        </div>
    );
}

export default CardReading;

