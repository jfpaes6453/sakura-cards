import ButtonComponent from "./ButtonComponent"
import Link from 'next/link'
import Image from "next/image"
import { useRouter } from 'next/navigation'

const ButtonsRendered = () => {
    const router = useRouter()

    const handleReset = () => {
        localStorage.removeItem('selectedRandomCards')
        router.push('/choose-card')
    }
    
    return (
        <div className="flex flex-col md:ml-8">
            
            <button onClick={handleReset} className="flex flex-row items-center text-3xl
            border-solid gap-x-4 border-2 justify-center w-52 border-font-color rounded-3xl py-2 px-7 m-3 hover:shadow-[0_15px_30px_-7px_rgba(0,0,0,0.5)]">
                Barajar
                <Image 
                    src='/icons/tabler_arrows-shuffle.svg'
                    width='34'
                    height='34'
                    alt="suffle"
                />
            </button>
            <Link href={'/'}> 
                <ButtonComponent text={'Instrucciones'} href='/' className='w-52' />
            </Link>
        </div>
    )
}

export default ButtonsRendered
