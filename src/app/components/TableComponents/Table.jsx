'use client'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { updateUsername, deleteUser } from '@/utils/apiAxios';
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";


export default function Table({ user }) {
  const router = useRouter()

  const [newUsername, setNewUsername] = useState('');
  const [isModifying, setIsModifying] = useState(false);

  const handleUpdateUsername = () =>
    setIsModifying(true);

  const handleDelete = () => {
    window.confirm('Eliminar?') && deleteUser(user.id)
    router.refresh()
  }

  const handleSaveUsername = async () => {
    if (newUsername.trim() !== '') {
      try {
        await updateUsername(user.id, newUsername);
      } catch (error) {
        console.error('Error updating username:', error);
      } finally {
        setIsModifying(false);
      }
      router.refresh()
    }
  };


  // console.log(user, user.results.meaning)

  const handleCancelEdit = () =>
    setIsModifying(false) || setNewUsername('');

  return (
    <tr key={user.id} className="border border-zinc-400">
      {isModifying ? (
        <td className="border border-zinc-400 p-3">
          <input
            type="text"
            placeholder="Modificar nombre"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </td>
      ) : (
        <td className="flex justify-center items-center  border-zinc-400 p-3">{user.username}</td>
      )}
<<<<<<< HEAD
      <td className="text-center border border-zinc-400 p-3">{user.date}</td>
      <td className="border border-zinc-400 p-3">{user.results}</td>
=======
      <td>{user.date}</td>
      <td>
      {Array.isArray(user.results) ? (
        user.results.map((result) => (
          <div key={result.id}>
            <p> {result.meaning}</p> 
          </div>
        ))
      ) : (
        <p>No hay resultados</p>
      )}
      </td>
>>>>>>> c5a85ee863ea32b85d62c95d44c7c9169b6045f9
      <td>
        <section className="flex justify-center gap-3 items-center">
          {isModifying ? (
            <>
              <button onClick={handleSaveUsername}><FaRegSave /></button>
              <button onClick={handleCancelEdit}><MdOutlineCancel /></button>
            </>
          ) : (
            <button onClick={handleUpdateUsername}><FiEdit /></button>
          )}
          {!isModifying && <button onClick={handleDelete}><RiDeleteBinLine /></button>}
        </section>
      </td>
    </tr>
  );
}