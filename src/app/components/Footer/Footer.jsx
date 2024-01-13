
import SocialNetworks from '../SocialNetworks/SocialNetworks'

export default function Footer() {
    
    return(
        <footer className="flex items-center flex-col md:flex-row justify-between md:border-t md:p-[33px]">
            <SocialNetworks/>
            <p className='text-2xl text-center px-8 py-8 md:py-0'>© Copyright lorem impsum mupsum lirum</p>
        </footer>
    )
}