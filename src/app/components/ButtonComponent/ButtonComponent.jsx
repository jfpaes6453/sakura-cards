import Image from "next/image";


export default function ButtonComponent({to, text}) {
    return (
        <button className="flex flex-row items-center text-3xl
        border-solid border-2 justify-evenly border-font-color rounded-3xl px-5 py-2 m-2 hover:shadow-[0_15px_30px_-7px_rgba(0,0,0,0.5)]" href={to}>
            {text}
            <Image 
            src='/icons/tabler_arrows-shuffle.svg'
            width='30'
            height='30'
            alt="suffle"/>
        </button>
    )
}