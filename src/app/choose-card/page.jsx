import ButtonComponent from "../components/ButtonComponent/ButtonComponent";



export default function chooseCard() {
    return(
        <>
        <aside className="grid grid-rows grid-flow-col gap-4">
            <div className="flex flex-col mx-10 pt-8">     
            <ButtonComponent to={'/'} text={'Barajar'} className='col-span-2' />
            <ButtonComponent to={'/'} text={'Instrucciones'} className='col-span-2'/>
            </div>
            <div className="justify-center pt-10 col-span-4">
                <h2 className={`text-[5.25rem] text-font-color`}>Escoge tu carta</h2>
            </div>
        </aside>
        
        
        </>
    )

}