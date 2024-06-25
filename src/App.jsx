import './App.css';
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Login from './Pages/Login';
import Register from './Pages/Register';
import GestionCoffees from './Pages/GestionCoffees';
import GestionClientes from './Pages/GestionClientes';
import Coffees from './Pages/Coffees';



export const LoginContext = createContext({});

function App() {

  
  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);

  function getUser(){
    return localStorage.getItem('rol');
  }

  return (
    <div className="flex flex-col min-h-screen">
      <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/gestion-coffees" element={<GestionCoffees />} />
            <Route path="/admin/gestion-clientes" element={<GestionClientes />} />
            <Route path="/coffees" element={<Coffees />} />
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
