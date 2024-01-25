
import RedirectIconSet from '../RedirectIconSet/RedirectIconSet'
import SocialNetworks from '../SocialNetworks/SocialNetworks'

export default function Footer() {

    return (
        <footer className="flex items-center flex-col md:flex-row justify-between md:border-t md:p-[33px] gap-y-6">
            <div className="md:order-1">
                <RedirectIconSet />
            </div>
            <SocialNetworks />        
            
            <p className='text-2xl text-center px-8 py-8 md:py-0 md:order-3 text-[#b3a9ab]'>© Copyright 2024 Sakura Tarot</p>
        </footer>
    )
}