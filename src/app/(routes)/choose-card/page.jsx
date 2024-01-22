'use client'

import CardDown from "@/app/components/CardsComponents/CardDown";
import NavBar from "@/app/components/MenuComponent/NavBar";

export default function chooseCard() {


    return (
        <main className="my-4 flex flex-col items-center shadow-sm overflow-hidden relative flex min-h-[800px] items-stretch">
            <div className="flex flex-col md:flex-row items-center xl:gap-40">
                <NavBar />
                <h2 className="text-center text-8xl max-md:max-w-full max-md:text-5xl">Escoge tu carta</h2>
            </div>
            <CardDown />
        </main>
    )
}