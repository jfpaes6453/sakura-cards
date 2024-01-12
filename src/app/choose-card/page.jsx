'use client'
import ButtonComponent from "../components/ButtonComponent/ButtonComponent";
import CardDown from "../components/CardsComponents/CardDown";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
export default function chooseCard() {
    const router = useRouter()
    
    return(
        <>
        <aside className="grid grid-rows grid-flow-col gap-4">
            <div className="flex flex-col mx-10 pt-8">  
            <Link href="/" ><ButtonComponent text={'Instrucciones'} className='w-full col-span-2 px-8 py-1 m-2' type="button"  />
            </Link>   
            <ButtonComponent to={'/'} text={'Barajar'} className='col-span-2' />
            
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