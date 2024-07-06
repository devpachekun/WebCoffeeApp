import {useContext,useState} from 'react'
import { AuthContext } from '../context/AuthContext';


function LoginComponent() {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const { login } = useContext(AuthContext)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) =>{
    e.preventDefault()
    login({username: formData.username, password: formData.password})
  }
  

  return (
    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 sm:w-3/4 bg-[#494D47] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
        <h2 className="text-white text-lg font-medium title-font mb-5">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="relative mb-4">
            <label htmlFor="username" className="leading-7 text-sm text-white">Username</label>
            <input 
            type="text" 
            id="username" 
            name="username" 
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleChange} 
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-white">Contraseña</label>
            <input 
            type="password" 
            id="password" 
            name="password" 
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
            onChange={handleChange} 
            />
          </div>
          <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Acceder</button>
          <p className="text-xs text-white mt-3">¿No posees cuenta? <span><strong><a href="/register">Regístrate</a></strong></span></p>
        </form>
    </div> 
  )
}

export default LoginComponent
