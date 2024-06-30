import { React, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GestionClienteComponent() {

    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [enabled, setEnabled] = useState(false);

    const [editMode, setEditMode] = useState(false);
    const [editUserId, setEditUserId] = useState(null);

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

    const handleDelete = async (userId) => {
        try {
            const response = await fetch(`${API_URL}/admin/users/${userId}/`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setUsers(users.filter(user => user.id_usuario !== userId));
                toast.success('Usuario eliminado correctamente');
            } else {
                toast.error('Error al eliminar el usuario');
            }
        } catch (error) {
            console.error('ERROR al eliminar el Usuario:', error);
            toast.error('Ha ocurrido un error al eliminar el Usuario');
        }
    };

    const handleEdit = async () => {
        if (!editUserId) return;

        try {
            const response = await fetch(`${API_URL}/admin/users/${editUserId}/`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    correo: email,
                    is_active: enabled
                })
            });

            if (response.ok) {
                const updatedUser = await response.json();
                setUsers(users.map(user => (user.id_usuario === editUserId ? updatedUser : user)));
                toast.success('Usuario editado correctamente');
                setEditMode(false);
                setEditUserId(null);
                setUsername('');
                setEmail('');
                setEnabled(false);
            } else {
                toast.error('Error al editar el usuario');
            }
        } catch (error) {
            console.error('ERROR al editar el Usuario:', error);
            toast.error('Ha ocurrido un error al editar el Usuario');
        }
    };

    return (
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 m-24 p-8">
            <div className="col-span-1 m-2">
                <ToastContainer autoClose={2000} hideProgressBar={true} newestOnTop />
                <div className="w-full bg-[#494D47] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                    <h2 className="text-white text-lg font-medium title-font mb-5">Editar Cliente</h2>
                    <div className="relative mb-4">
                        <label htmlFor="username" className="leading-7 text-sm text-white">Username</label>
                        <input type="text" id="username" name="username" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                        <input type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="relative mb-4 flex items-center gap-2">
                        <label htmlFor="enabled" className="leading-7 text-sm text-white">Habilitado</label>
                        <input type="checkbox" id="enabled" name="enabled" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
                    </div>
                    {editMode && (
                        <button
                            className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                            onClick={handleEdit}
                        >
                            Finalizar Edición
                        </button>
                    )}
                </div>
            </div>
            <div className="col-span-2 flex-grow m-2 bg-[#494D47] rounded-lg border-2 border-[#494D47]">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className='bg-[#494D47] p-2 rounded-tl-lg text-white'>ID</th>
                            <th className='bg-[#494D47] p-2 rounded-tl-lg text-white'>Username</th>
                            <th className='bg-[#494D47] p-2 text-white'>Correo</th>
                            <th className='bg-[#494D47] p-2 text-white'>Habilitado</th>
                            <th className='bg-[#494D47] p-2 text-white'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {users.map((user, index) => (
                            <tr key={user.id_usuario} className={index % 2 === 0 ? 'bg-[#6A6D69]' : 'bg-[#494D47]'}>
                                <td>{user.id_usuario}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.disabled ? 'NO' : 'SI'}</td>
                                <td>
                                    <button
                                        className='bg-[#EBCA25] border-2 border-[#000] rounded-md px-2 py-1 mx-1'
                                        onClick={() => {
                                            setEditMode(true);
                                            setEditUserId(user.id_usuario);
                                            setUsername(user.username);
                                            setEmail(user.email);
                                            setEnabled(user.disabled);
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className='bg-[#E73E3E] border-2 border-[#000] rounded-md px-2 py-1 mx-1 my-2'
                                        onClick={() => handleDelete(user.id_usuario)}
                                    >
                                        Borrar
                                    </button>
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
