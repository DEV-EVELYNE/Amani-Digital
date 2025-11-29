import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SurvivorSupport from './pages/SurvivorSupport';
import PreventionResources from './pages/PreventionResources';
import SafetyTools from './pages/SafetyTools';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Chat from './pages/Chat';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/survivor-support" element={<SurvivorSupport />} />
              <Route path="/prevention-resources" element={<PreventionResources />} />
              <Route path="/safety-tools" element={<SafetyTools />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route 
                path="/chat" 
                element={
                  <ProtectedRoute>
                    <Chat />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster richColors />
      </AuthProvider>
    </Router>
  );
}

export default App;
