import TableComponent from "@/app/components/TableComponents/TableComponent"
import { getAll } from "@/utils/apiAxios"

const pageHistorial = async () => {
    const users = await getAll()
  return (
    <div>
        <h2 className="md:text-[3.5rem] md:mx-36 mx-[4.5rem] text-justify text-[45px] mb-10 mb:mb-0">Historial</h2>
        <TableComponent users={users} />

    </div>
  )
}

export default pageHistorial