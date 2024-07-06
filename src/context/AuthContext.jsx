import { createContext, useState, useEffect } from 'react'
// import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

import { decode_jwt } from '../utils';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

  const [authToken, setAuthToken] = useState(() => localStorage.getItem('token') ? localStorage.getItem('token') : null);
  const [user, setUser] = useState(() => localStorage.getItem('token') ? decode_jwt(localStorage.getItem('token')) : null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  function login(dataUser) {
    // e.preventDefault();

    const username = dataUser.username
    const password = dataUser.password

    const url = `${API_URL}/api/auth/login`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error('Email o contraseña incorrectos');
        }
        return response.json();
      })
      .then((data) => {
        toast.success('Sesión iniciada correctamente');

        const payloadObject = decode_jwt(data.token)
        setAuthToken(data.token)
        setUser(payloadObject)

        console.log({payloadObject})

        localStorage.setItem('token', data.token)

        if (payloadObject.rol === 'CUSTOMER') {
          navigate('/');
        } else {
          navigate('/admin/gestion-coffees');
        }
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud', error);
        toast.error('¡Ups! Correo y/o contraseña incorrectos');
      });
  }

   function logout() {
    setAuthToken(null)
    setUser(null)
    localStorage.removeItem('token')
    navigate('/login')
   }

   const contextData ={
    user,
    login,
    logout,
    authToken
   }

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}

