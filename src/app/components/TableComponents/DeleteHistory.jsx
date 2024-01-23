'use client'

import { deleteAllHistory } from "@/utils/apiAxios";
import { MdAutoDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

const DeleteHistory = () => {

    const router = useRouter();

    const handleDeleteAllHistory = async () => {
        await deleteAllHistory()
        router.refresh()
    }

    return (
        <button onClick={handleDeleteAllHistory} className="bg-red-500 mx-8 flex flex-row items-center gap-x-2 text-font-color relative z-20 py-2 px-4 rounded-xl hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-700">
            Borrar Todo <MdAutoDelete className="text-font-color"/>
        </button>
    )
}

export default DeleteHistory