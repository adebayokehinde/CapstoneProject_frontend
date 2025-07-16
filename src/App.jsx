import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Register from './Pages/register/Register';
import Login from './Pages/login/Login';
import Bodysection from './Bodysection/Bodysection';

function AppContent() {
  const location = useLocation();

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ['/login', '/register'];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* Only show Navbar when not on login or register */}
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Bodysection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
