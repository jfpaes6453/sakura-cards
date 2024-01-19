import Image from "next/image"


const socialNetworks = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: '/icons/tabler_brand-instagram.svg',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/?lang=es',
        icon: '/icons/simple-icons_x.svg',
    },
    {
        name: 'Telegram',
        url: 'https://www.Telegram.com/',
        icon: '/icons/bxl_telegram.svg',
    },
    {
        name: 'TikTok',
        url: 'https://www.tiktok.com/es/',
        icon: '/icons/ri_tiktok-fill.svg',
    },
]


export default function SocialNetworks() {
    
    return(
        <div  data-testid="social-networks" className='flex flex-row'>
            {
                socialNetworks.map((network) => (
                <a key={network.name} href={network.url} target="_blank" className="p-3">
                    <Image 
                    src={network.icon}
                    alt= {`${network.name} Icon`}
                    width={30}
                    height={30}
                    />
                </a>
                ))
            }
            
        </div>
    )
}