'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateUsername, deleteUser } from '@/utils/apiAxios';
import { FaRegSave } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import {FaChevronCircleDown,FaChevronCircleUp} from 'react-icons/fa';


export default function Accordion({ user }) {
    const router = useRouter();
    const { id, username, date, results } = user;
    const [newUsername, setNewUsername] = useState('');
    const [isModifying, setIsModifying] = useState(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const handleUpdateUsername = () => {
        setIsModifying(true);
        setIsAccordionOpen(true); // Abre el acordeón al editar
    };

    const handleDelete = () => {
        window.confirm('Eliminar?') && deleteUser(id);
        router.refresh();
    };

    const handleSaveUsername = () => {
        if (newUsername.trim() !== '') {
            updateUsername(id, newUsername)
                .then(() => {
                    setIsModifying(false);
                    router.refresh();
                })
                .catch((error) => {
                    console.error('Error updating username:', error);
                });
        }
    };

    const handleCancelEdit = () => {
        setIsModifying(false);
        setNewUsername(''); // Limpiar el nuevo nombre al cancelar la edición
    };

    const handleSummaryClick = () => setIsAccordionOpen(!isAccordionOpen);

    return (
        <div key={id} className='md:hidden sm:w-full'>
            <details

                className="m-0 border-2xl p-5"
                open={isAccordionOpen}
            >
                <summary 
                className="cursor-pointer flex items-center gap-3" onClick={handleSummaryClick}
                style={{ listStyle: 'none' }} // Oculta el ::marker
                >
                    {isAccordionOpen ? <FaChevronCircleDown className="ml-2" /> : <FaChevronCircleUp className="ml-2" />}
                    <span>
                        NOMBRE: {username}</span>
                </summary>
                <div className='pl-6'>
                    {isModifying && (
                        <div>
                            <label htmlFor={`newUsername-${id}`}>Nuevo Nombre:</label>
                            <input
                                type="text"
                                id={`newUsername-${id}`}
                                value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)}
                            />
                        </div>
                    )}
                    <p className="text-start p-3">FECHA: {date}</p>
                    <p className="text-start sm:w-11/12 py-3">RESULTADO LECTURA:
                        {Array.isArray(results) ? (
                            results.map((result) => (
                                <div key={result.id}>
                                    <p> {result.meaning}</p>
                                </div>
                            ))
                        ) : (
                            <p>No hay resultados</p>
                        )}
                    </p>
                    <p className='pl-3'>ACCIONES: </p>
                    <section className="flex justify-center gap-3 items-center p-3">
                        {isModifying ? (
                            <div>
                                <button className="h-8" onClick={handleSaveUsername}>
                                    <FaRegSave className="h-7 w-7" />
                                </button>
                                <button onClick={handleCancelEdit}>
                                    <MdOutlineCancel className="h-7 w-7" />
                                </button>
                            </div>
                        ) : (
                            <button className="mr-3" onClick={handleUpdateUsername}>
                                <FiEdit className="h-7 w-7" />
                            </button>
                        )}
                        {!isModifying && (
                            <button onClick={handleDelete}>
                                <RiDeleteBinLine className="h-7 w-7" />
                            </button>
                        )}
                    </section>
                </div>
            </details>
        </div>
    );
}