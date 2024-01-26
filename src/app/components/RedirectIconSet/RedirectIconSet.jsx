'use client'
import { FaHome, FaHistory } from "react-icons/fa";
import Link from "next/link"
import { useRouter } from "next/navigation";

const RedirectIconSet = () => {
    const router = useRouter()
    const handleRefresh =()=>{
        router.refresh()
    }
    
    return (
        <section data-testid="redirect-icons" className="flex items-center gap-8 text-4xl">           
            <Link href="/">
                <FaHome style={{ color: "#b3a9ab", height: "35px", width: "35px" }} />
            </Link>
            <Link href="/results-history">
                <FaHistory
                        style={{ color: "#b3a9ab", height: "35px", width: "35px" }}
                        onClick={handleRefresh}
                    />
            </Link>
        </section>
    )
}

export default RedirectIconSet