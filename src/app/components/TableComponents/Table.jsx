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

  const handleSaveUsername = () => {
    if (newUsername.trim() !== '') {
      updateUsername(user.id, newUsername)
        .then(() => {
          setIsModifying(false);
          router.refresh();
        })
        .catch((error) => {
          console.error('Error updating username:', error);
        });
    }
  };


  // console.log(user, user.results.meaning)

  const handleCancelEdit = () =>
    setIsModifying(false) || setNewUsername('');

  return (
    <tr key={user.id}>
      {isModifying ? (
        <td>
          <input
            type="text"
            placeholder="Modificar nombre"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </td>
      ) : (
        <td>{user.username}</td>
      )}
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
      <td>
        <section>
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