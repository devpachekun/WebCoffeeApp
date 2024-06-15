import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
