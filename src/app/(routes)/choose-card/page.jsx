'use client'

import ButtonsRendered from "../../components/ButtonComponent/ButtonsRendered";
import CardDown from "../../components/CardsComponents/CardDown";



export default function chooseCard() {
    
    
    return(
        <>
        <aside className="grid grid-rows grid-flow-col gap-4">
            <div className="flex flex-col ml-10 pt-8">  
            <ButtonsRendered />
            </div>
            <div className="justify-center pt-10 col-span-4">
                <h2 className={`text-[5.25rem] text-font-color`}>Escoge tu carta</h2>
            </div>
        </aside>
        {/* <CardDeck/> */}
        
        <CardDown/>
        </>
    )

}