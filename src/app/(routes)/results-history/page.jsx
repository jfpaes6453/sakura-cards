import TableComponent from "@/app/components/TableComponents/TableComponent"
import { getAllData } from "@/utils/apiAxios"

const pageHistorial = async () => {
    const users = await getAllData()
  return (
    <div>
        <h2 className="md:text-[3.5rem] md:mx-36 mx-[4.5rem] text-justify text-[45px] mb-10 mb:mb-0">Historial</h2>
        <TableComponent users={users} />

    </div>
  )
}

export default pageHistorial