'use client'
import React, { useState } from 'react';
import { updateUsername, deleteUser } from '@/utils/apiAxios';

export default function Table({ user, onUserUpdate, onUserDelete }) {
  const [newUsername, setNewUsername] = useState('');
  const [isModifying, setIsModifying] = useState(false);

  const handleUpdateUsername = () => 
  setIsModifying(true);

  const handleDelete = () => 
  window.confirm('Eliminar?') && deleteUser(user.id).then(onUserDelete);

  const handleSaveUsername = () => {
    if (newUsername.trim() !== '') {
        updateUsername(user.id, newUsername)
        .then(() => onUserUpdate())
        .finally(() => setIsModifying(false))
        .catch((error) => console.error('Error updating username:', error));
    }
  };
  
  
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
      <td>{user.results}</td>
      <td>
        <span> {/*creo que debe ir otra cosa*/}
          {isModifying ? (
            <>
              <button onClick={handleSaveUsername}>guardar</button>
              <button onClick={handleCancelEdit}>cancelar</button>
            </>
          ) : (
            <button onClick={handleUpdateUsername}>editar</button>
          )}
          {!isModifying && <button onClick={handleDelete}>eliminar</button>}
        </span>
      </td>
    </tr>
  );
}