// GestionCoffeesComponent.jsx
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GestionCoffeesComponent() {

    const [coffees, setCoffees] = useState([]);
    const [coffeeName, setCoffeeName] = useState('');
    const [coffeeDescription, setCoffeeDescription] = useState('');
    const [coffeePrice, setCoffeePrice] = useState('');
    const [coffeeImage, setCoffeeImage] = useState(null); // Estado para la imagen en base64
    const [editMode, setEditMode] = useState(false);
    const [editCoffeeId, setEditCoffeeId] = useState(null);

    const accessToken = localStorage.getItem('token');
    const API_URL = import.meta.env.VITE_API_URL;

    async function getCoffees() {
        try {
            const response = await fetch(`${API_URL}/api/coffee/`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setCoffees(data);
            
        } catch (error) {
            console.error('ERROR al obtener los Coffees:', error);
            toast.error('Ha ocurrido un error al obtener los Coffees');
        }
    }

    useEffect(() => {
        getCoffees();
    }, [API_URL, accessToken]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoffeeImage(reader.result); // Almacena la imagen en base64 en el estado
            };
            reader.readAsDataURL(file);
        }
    };

    const postCoffee = async (e) => {
        e.preventDefault();

        const newCoffee = {
            name: coffeeName,
            description: coffeeDescription,
            price: Number(coffeePrice),
            image64: coffeeImage // Agrega la imagen base64 al objeto del nuevo coffee
        };

        console.log(newCoffee)

        try {
            const response = await fetch(`${API_URL}/api/coffee/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(newCoffee)
            });

            if (response.ok) {
                getCoffees();
                setCoffeeName('');
                setCoffeeDescription('');
                setCoffeePrice('');
                setCoffeeImage(null); // Limpia el estado de la imagen después del POST
                toast.success('Coffee creado correctamente');
            } else {
                console.error('Error al crear el nuevo Coffee:', response.statusText);
                toast.error('Ha ocurrido un error al crear el Coffee');
            }
        } catch (error) {
            console.error('ERROR al crear el nuevo Coffee:', error);
            toast.error('Ha ocurrido un error al crear el Coffee');
        }
    };

    const editCoffee = async (e) => {
        e.preventDefault();

        const updatedCoffee = {
            name: coffeeName,
            description: coffeeDescription,
            price: Number(coffeePrice),
            image64: coffeeImage
        };
        try {
            const response = await fetch(`${API_URL}/api/coffee/${editCoffeeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(updatedCoffee)
            });
            console.log(response)
            if (response.ok) {
                console.log("ENTRANDO OK")
                const data = await response.json();
                console.log({data})
                setCoffeeName('');
                setCoffeeDescription('');
                setCoffeePrice('');
                setCoffeeImage(null); // Limpia el estado de la imagen después de la edición
                setEditMode(false);
                setEditCoffeeId(null);
                toast.info('Coffee editado correctamente');
                getCoffees();
            } else {
                console.error('Error al actualizar el Coffee:', response.statusText);
                toast.error('Ha ocurrido un error al editar el Coffee');
            }
        } catch (error) {
            console.error('ERROR al actualizar el Coffee:', error);
            toast.error('Ha ocurrido un error al editar el Coffee');
        }
    };

    const deleteCoffee = async (id) => {
        try {
            const response = await fetch(`${API_URL}/api/coffee/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                getCoffees();
                toast.success('Coffee eliminado correctamente');
            } else {
                console.error('Error al borrar el Coffee:', response.statusText);
                toast.error('Ha ocurrido un error al eliminar el Coffee');
            }
        } catch (error) {
            console.error('ERROR al borrar el Coffee:', error);
            toast.error('Ha ocurrido un error al eliminar el Coffee');
        }
    };

    const handleEditClick = (coffee) => {
        setCoffeeName(coffee.name);
        setCoffeeDescription(coffee.description);
        setCoffeePrice(coffee.price);
        setEditMode(true);
        setEditCoffeeId(coffee.idCoffee);
    };

    return (
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 mx-20 p-8">
            <div className="col-span-1 m-2">
                <form onSubmit={editMode ? editCoffee : postCoffee}>
                    <div className="w-full bg-[#494D47] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                        <h2 className="text-white text-lg font-medium title-font mb-5">
                            {editMode ? 'Editar Coffee' : 'Nuevo Coffee'}
                        </h2>
                        <div className="relative mb-4">
                            <label htmlFor="coffee-name" className="leading-7 text-sm text-white">Nombre del Coffee</label>
                            <input
                                type="text"
                                id="coffee-name"
                                name="coffee-name"
                                value={coffeeName}
                                onChange={(e) => setCoffeeName(e.target.value)}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="coffee-description" className="leading-7 text-sm text-white">Descripción</label>
                            <input
                                type="text"
                                id="coffee-description"
                                name="coffee-description"
                                value={coffeeDescription}
                                onChange={(e) => setCoffeeDescription(e.target.value)}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="coffee-price" className="leading-7 text-sm text-white">Precio</label>
                            <input
                                type="text"
                                id="coffee-price"
                                name="coffee-price"
                                value={coffeePrice}
                                onChange={(e) => setCoffeePrice(e.target.value)}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="coffee-image" className="leading-7 text-sm text-white">Foto</label>
                            <input
                                type="file"
                                id="coffee-image"
                                name="coffee-image"
                                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                accept="image/*"
                                onChange={handleImageChange} // Maneja el cambio de la imagen
                            />
                        </div>
                        <button
                            className={`text-white border-0 py-2 px-8 focus:outline-none rounded text-lg ${editMode ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-indigo-500 hover:bg-indigo-600'}`}
                        >
                            {editMode ? 'Finalizar edición' : 'Crear'}
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-span-2 flex-grow m-2 rounded-lg border-2 border-[#494D47] overflow-y-auto h-5/6">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className='bg-[#494D47] p-2 rounded-tl-lg text-white'>ID</th>
                            <th className='bg-[#494D47] p-2 text-white'>Nombre</th>
                            <th className='bg-[#494D47] p-2 text-white'>Descripción</th>
                            <th className='bg-[#494D47] p-2 text-white'>Precio</th>
                            <th className='bg-[#494D47] p-2 rounded-tr-lg text-white'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                    {coffees.map((coffee, index) => (
                        <tr key={coffee.idCoffee} className={index % 2 === 0 ? 'bg-[#6A6D69]' : 'bg-[#494D47]'}>
                            <td>{coffee.idCoffee}</td>
                            <td>{coffee.name}</td>
                            <td>{coffee.description}</td>
                            <td>{coffee.price}</td>
                            <td>
                                <button
                                    className='bg-[#EBCA25] border-2 border-[#000] rounded-md px-2 py-1 mx-1'
                                    onClick={() => handleEditClick(coffee)}
                                >
                                    Editar
                                </button>
                                <button
                                    className='bg-[#E73E3E] border-2 border-[#000] rounded-md px-2 py-1 mx-1 my-2'
                                    onClick={() => deleteCoffee(coffee.idCoffee)}
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
    )
}

export default GestionCoffeesComponent;
