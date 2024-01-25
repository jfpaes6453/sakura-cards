'use client'
import { FaHome, FaHistory } from "react-icons/fa";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RedirectIconSet = () => {
    const router = useRouter()
    const handleRefresh =()=>{
        router.refresh()
    }
    
    
    
    return (
        <section className="flex items-center gap-8 text-4xl">           
            <Link href="/">
                <FaHome style={{ color: "#b3a9ab", height: "30px", width: "30px" }} />
            </Link>
            <Link href="/results-history">
            <FaHistory
                    style={{ color: "#b3a9ab", height: "30px", width: "30px" }}
                    onClick={handleRefresh}
                />
            </Link>
        </section>
    )
}

export default RedirectIconSet