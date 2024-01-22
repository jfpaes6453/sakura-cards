'use client'

import { useState, useEffect } from "react";
import { getRandomCards } from "@/utils/cardUtils"
import useFetch from "@/utils/useFetch";
import Card from "./Card"
import { Noto_Serif_JP } from "next/font/google";
import { updateUserResults } from "@/utils/apiAxios";


const inder = Noto_Serif_JP({ weight: ['200'],
subsets: ['latin']})


export default function CardResult() {

    const [randomCards, setRandomCards] = useState([])

    const urlApi = 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/'
    const { data, loading, error } = useFetch(urlApi)

    useEffect(() => {
        if (!data || data.length === 0) {
        return
        }

        const storedUserId = localStorage.getItem('userId')
        console.log(storedUserId)

        if(storedUserId){
            const storedCards = JSON.parse(localStorage.getItem('selectedRandomCards'))

            const cards = storedCards || getRandomCards(3, data)
            setRandomCards(cards)

            console.log('las randomCards', cards)

            updateUserResults(storedUserId, cards)
            
        }else {
            // Si no hay un ID, guardamos igual en localStorage la seleccion de cartas 
            const storedCards = JSON.parse(localStorage.getItem('selectedRandomCards'));
            const cards = storedCards || getRandomCards(3, data);
            setRandomCards(cards);
            localStorage.setItem('selectedRandomCards', JSON.stringify(cards));
        }

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
            <ul className="md:mx-36 my-20">
                {randomCards.map((card, index) => (
                        <li className="flex md:flex-row flex-col px-14 my-8 py-7 items-center">
                            <Card
                            key={card.id}
                            id={card.id}
                            name={card.spanishName}
                            src={card.clowCard}
                            onSelect={() => {}}
                            isSelected={false}
                            style={{}} 
                            />
                            <article className="md:mx-36 md:mt-auto mt-[400px] opacity-75 md:pl-44">
                                <div className="flex md:gap-10 flex-col md:flex-row items-center md:items-start">
                                    <div className="flex flex-col items-center md:items-start">
                                        <h3 className="text-4xl md:text-center my-6 md:my-0">El {subtitleTime[index]}</h3>
                                        <h4 className="text-fill text-[42px]">{card.spanishName}</h4>
                                    </div>
                                    <h5 className={`${inder.className} text-[70px] opacity-[.69] text-fill`}>{card.kanji}</h5>
                                </div>
                                <p className="text-fill text-3xl my-6 text-center md:text-justify">{card.meaning}</p>
                                <hr className="md:mt-36"/>
                            </article>
                        </li>
                ))}
            </ul>
        </div>
    );
}

