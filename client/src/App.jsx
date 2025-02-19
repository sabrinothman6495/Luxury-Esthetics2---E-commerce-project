import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold text-blue-600"> Welcome to Luxury Selfcare</h1>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to Luxury Selfcare
        </p>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services" element={<ProtectedRoute />}>
            <Route path="" element={<Services />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;