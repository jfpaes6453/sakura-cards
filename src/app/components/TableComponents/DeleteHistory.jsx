'use client'

import { deleteAllHistory } from "@/utils/apiAxios";
import { RiDeleteBinLine } from 'react-icons/ri';
import { useRouter } from "next/navigation";
import { ConfirmToast } from 'react-confirm-toast'

const DeleteHistory = () => {

    const router = useRouter();

    const handleDeleteAllHistory = async () => {
        await deleteAllHistory()
        router.refresh()
    }

    return (
        <ConfirmToast
            asModal={false}
            customCancel={'Cancel'}
            customConfirm={'Confirm'}
            customFunction={handleDeleteAllHistory}
            message={'Desea eliminar todo el historial?'}
            position={'top-right'}
            showCloseIcon={true}
            theme={'dark'}
            >
	        <button className="bg-zinc-700 rounded-[20px] border-2 border-orange-100 mx-8 flex flex-row items-center gap-x-2 text-font-color relative z-20 py-2 px-4 hover:bg-[#842F30] hover:border-orange-100  shadow-md focus:outline-none focus:shadow-outline-red active:bg-red-700">
            Borrar Todo <RiDeleteBinLine className="text-font-color"/>
            </button>
        </ConfirmToast>
        
    )
}

export default DeleteHistory