import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">Amani Digital</Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
          <Link to="/survivor-support" className="text-gray-600 hover:text-indigo-600">Survivor Support</Link>
          <Link to="/prevention-resources" className="text-gray-600 hover:text-indigo-600">Prevention</Link>
          <Link to="/safety-tools" className="text-gray-600 hover:text-indigo-600">Safety Tools</Link>
          <Link to="/about-us" className="text-gray-600 hover:text-indigo-600">About Us</Link>
          {isAuthenticated ? (
            <>
              <Link to="/chat" className="text-gray-600 hover:text-indigo-600">Community Chat</Link>
              <button onClick={handleLogout} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-indigo-600">Login</Link>
              <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Sign Up</Link>
            </>
          )}
        </nav>
        <div className="md:hidden">
          {/* Mobile Menu Button Here */}
        </div>
      </div>
    </header>
  );
}