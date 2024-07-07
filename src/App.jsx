import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Login from './Pages/Login';
import Register from './Pages/Register';
import GestionCoffees from './Pages/GestionCoffees';
import GestionClientes from './Pages/GestionClientes';
import Coffees from './Pages/Coffees';
import AcercaDe from './Pages/AcercaDe';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './context/PrivateRoute'; // Importar el componente

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/admin/gestion-coffees" 
              element={
                <PrivateRoute roles={['ADMIN']}>
                  <GestionCoffees />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/admin/gestion-clientes" 
              element={
                <PrivateRoute roles={['ADMIN']}>
                  <GestionClientes />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/coffees" 
              element={
                <PrivateRoute roles={['CUSTOMER', 'ADMIN']} allowPublic={true}>
                  <Coffees />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/acerca-de" 
              element={
                <PrivateRoute roles={['CUSTOMER', 'ADMIN']} allowPublic={true}>
                  <AcercaDe />
                </PrivateRoute>
              } 
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
