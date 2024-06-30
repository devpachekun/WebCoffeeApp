import { React, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterComponent() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verificationPass, setVerificationPass] = useState('');
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    
    // const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    function validateForm() {
        let validationErrors = {};
        if (!username) {
            validationErrors.username = 'El username es obligatorio.';
        }
        if (!email) {
            validationErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'El correo electrónico no es válido.';
        }
        if (!password) {
            validationErrors.password = 'La contraseña es obligatoria.';
        }
        if (!verificationPass) {
            validationErrors.verificationPass = 'Debe re-ingresar su contraseña';
        } else if (password !== verificationPass) {
            validationErrors.verificationPass = 'Las contraseñas no coinciden.';
        }
        return validationErrors;
    }

    function register(e) {
        e.preventDefault();
        const validationErrors = validateForm();
    
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
    
        const url = `${API_URL}/register/`;
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            correo: email,
            password: password,
            is_active: true,
            is_superuser: false,
            is_staff: false
          }),
        })
          .then((response) => {
            if (response.status !== 201) {
              throw new Error('Error durante el Registro');
            }
            return response.json();
          })
          .then((data) => {
            toast.success('Registro exitoso');
    
            setTimeout(() => {
              navigate('/login')
            }, 1500);
          })
          .catch((error) => {
            console.error('Error al realizar la solicitud', error);
            setServerError(error.message);
            setErrors((prevErrors) => ({ ...prevErrors, form: 'Error al registrarse' }));
            toast.error('¡Ups! Algo ha ocurrido durante el Registro');
          });
    }

  return (
    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 sm:w-3/4 w-4/5 bg-[#494D47] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
        <ToastContainer autoClose={1000} hideProgressBar={true} newestOnTop />
        <h2 className="text-white text-lg font-medium title-font mb-5">Formulario de Registro</h2>
        <form onSubmit={register}>
            <div className="relative mb-4">
                <label htmlFor="username" className="leading-7 text-sm text-white">Username</label>
                <input type="text" id="username" name="username" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={username} onChange={(e) => setUsername(e.target.value)} />
                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="relative mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-white">Contraseña</label>
                <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div className="relative mb-4">
                <label htmlFor="confirm-password" className="leading-7 text-sm text-white">Confirmar Contraseña</label>
                <input type="password" id="confirm-password" name="confirm-password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={verificationPass} onChange={(e) => setVerificationPass(e.target.value)} />
                {errors.verificationPass && <p className="text-red-500 text-xs mt-1">{errors.verificationPass}</p>}
            </div>
            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Registrarme</button>
            {serverError && <p className="text-red-500 text-xs mt-4">{serverError}</p>}
        </form>
    </div>
  )
}

export default RegisterComponent;
