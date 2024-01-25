'use client'

import ButtonsRendered from "@/app/components/ButtonComponent/ButtonsRendered";
import CardDown from "@/app/components/CardsComponents/CardDown";

export default function chooseCard() {

    return (
        <section className="my-4 flex flex-col shadow-sm overflow-hidden relative min-h-[800px] items-stretch">
            <div className="flex flex-col md:flex-row items-center xl:gap-40">
                <ButtonsRendered />
                <h2 className="text-center text-8xl max-md:max-w-full max-md:text-5xl">Escoge tu carta</h2>
            </div>
            <CardDown />
        </section>
    )
}