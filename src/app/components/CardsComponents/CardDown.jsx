import { useFetch } from "@/utils/useFetch"

function CardDown() {
    const urlDetail = `https://ghibliapi.vercel.app/films/${id}`
    const { data } = useFetch(urlDetail)

    return (
        <section>
            <ul>
                {

                }
            </ul>
        
        </section>
    )
}


export default CardDown

