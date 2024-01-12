import Image from "next/image";

export default function ButtonComponent({to, text}) {
    return (
        <button className="flex flex-row items-center text-[1.875rem] text-font-color border-solid border-2 justify-evenly border-font-color rounded-3xl hover:shadow-lg px-8 py-1 m-2" to={to}>
            {text}
            <Image 
            src='/icons/tabler_arrows-shuffle.svg'
            width='30'
            height='30'
            alt="suffle"/>
        </button>
    )
}