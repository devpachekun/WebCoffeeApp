import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginComponent() {

  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');

  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  function ValidaFormulario() {
    let validationErrors = {};
    if (!email) {
      validationErrors.email = 'El correo electrónico es obligatorio.';
    }
    if (!password) {
      validationErrors.password = 'La contraseña es obligatoria.';
    }
    return validationErrors;
  }

  function login(e) {
    e.preventDefault();
    const validationErrors = ValidaFormulario();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const url = `${API_URL}/login/`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correo: email,
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
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);

        const parts = data.access.split('.');
        const decodedPayload = atob(parts[1]);
        const payloadObject = JSON.parse(decodedPayload);

        localStorage.setItem('id_usuario', payloadObject.id_usuario);
        localStorage.setItem('correo', payloadObject.correo);
        localStorage.setItem('rol', payloadObject.rol);

        setLoggedIn(true);

        setTimeout(() => {
          if (payloadObject.rol === 'USUARIO') {
            navigate('/');
          } else {
            navigate('/');
          }
        }, 3300);
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud', error);
        setServerError(error.message);
        setErrors((prevErrors) => ({ ...prevErrors, form: 'Error al iniciar sesión.' }));
        toast.error('¡Ups! Correo y/o contraseña incorrectos');
      });
  }

  return (
    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 sm:w-3/4 w-3/4 bg-[#494D47] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
      <ToastContainer autoClose={2500} hideProgressBar={true} newestOnTop />
        <h2 className="text-white text-lg font-medium title-font mb-5">Iniciar Sesión</h2>
        <form onSubmit={login}>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />
            {errors.email && <p classNameName="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-white">Contraseña</label>
            <input 
            type="password" 
            id="password" 
            name="password" 
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            />
            {errors.password && <p classNameName="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
          <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Acceder</button>
          <p className="text-xs text-white mt-3">¿No posees cuenta? <span><strong><a href="/register">Regístrate</a></strong></span></p>
        </form>
    </div> 
  )
}

export default LoginComponent
