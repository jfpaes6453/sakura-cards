
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import { FaHome, FaHistory } from "react-icons/fa";

export default function Footer() {

    return (
        <footer className="flex items-center flex-col md:flex-row justify-between md:border-t md:p-[33px]">
            <SocialNetworks />
            <section className="flex items-center gap-8 text-4xl">           
                <a href="/"><FaHome /></a>
                <a href="/results-history"><FaHistory /></a>
            </section>
            <p className='text-2xl text-center px-8 py-8 md:py-0'>© Copyright 2024 Sakura Tarot</p>
        </footer>
    )
}