import TableComponent from "@/app/components/TableComponents/TableComponent"
import { getAllData } from "@/utils/apiAxios"

const pageHistorial = async () => {
    const users = await getAllData()
  return (
    <div>
        <h2 className="md:text-[3.5rem] md:mx-36 mx-[4.5rem] text-center text-[45px] mb-10 pt-10 mb:mb-0">Historial</h2>
        <div className="flex justify-center mb-28">
          <TableComponent users={users} />
        </div>
        

    </div>
  )
}

export default pageHistorial