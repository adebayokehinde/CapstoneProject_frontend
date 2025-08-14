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
import FreeMapView from './map/FreeMapView';
import Service from './Service/service';
import './App.jsx';


function AppContent() {
  const location = useLocation();

  const hideNavbarRoutes = ['/login', '/register'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/service" element={<Service />} />
        
      </Routes>

      <Routes>
        <Route path="/" element={<Bodysection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<FreeMapView />} /> 

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
