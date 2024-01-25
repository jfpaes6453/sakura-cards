'use client'
import { FaHome, FaHistory } from "react-icons/fa";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RedirectIconSet = () => {
    const router = useRouter()
    const handleRefresth =()=>{
        router.refresh()
    }
    
    
    
    return (
        <section data-testid="redirect-icons" className="flex items-center gap-8 text-4xl">           
            <Link href="/">
                <FaHome className="h-[53px] w-[53px] opacity-75"/>
            </Link>
            <Link href="/results-history">
                <FaHistory className="h-[50px] w-[50px] opacity-75" onClick={handleRefresth}/>
            </Link>
        </section>
    )
}

export default RedirectIconSet