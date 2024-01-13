'use client'
import ButtonsRendered from "../components/ButtonComponent/ButtonsRendered"
import CardReading from "../components/CardsComponents/CardReading"


const pageReading = () => {
    return (
        <div>
            <nav className="flex items-center pt-16">

                <h2 className="text-[3.5rem] mx-36">La respuesta a tu pregunta</h2>
                <ButtonsRendered />
            </nav>
            <CardReading />
        </div>
    )
}

export default pageReading
