import { React, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Switch from './Switch';

function GestionClienteComponent() {

  const [users, setUsers] = useState([]);

  const accessToken = localStorage.getItem('token');
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(`${API_URL}/api/user/`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('ERROR al obtener los Usuarios:', error);
        toast.error('Ha ocurrido un error al obtener los Usuarios');
      }
    }

    getUsers();
  }, [API_URL, accessToken]);


  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 m-24 p-8">
      <div className="col-span-1 m-2">
      </div>
      <div className="col-span-full flex-grow m-2 bg-[#494D47] rounded-lg border-2 border-[#494D47]">
        <table className="w-full">
          <thead>
            <tr>
              <th className='bg-[#494D47] p-2 rounded-tl-lg text-white'>Username</th>
              <th className='bg-[#494D47] p-2 text-white'>Correo</th>
              <th className='bg-[#494D47] p-2 text-white'>Habilitado</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {users.map((user, index) => (
              <tr key={user.username} className={index % 2 === 0 ? 'bg-[#6A6D69]' : 'bg-[#494D47]'}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <div className='flex w-full justify-center p-3'>
                    <Switch username={user.username} state={user.disabled} token={accessToken} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GestionClienteComponent;
