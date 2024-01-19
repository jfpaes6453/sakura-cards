
import Link from 'next/link'

const CardReading = () => {
    return (
        <div>
            <h2 className="md:text-[3.5rem] md:mx-36 mx-[4.5rem] text-justify text-[45px] mb-10 mb:mb-0">Hi Alex!!</h2>

            <div>
                <Link href='/result'>
                    <button > GO to Result </button>
                </Link>
            </div>
        </div>
    )
}

export default CardReading
