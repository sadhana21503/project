import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import NotificationPage from './pages/NotificationPage';
import BookingPage from './pages/BookingPage'; 
import ServicesPage from './pages/ServicesPage';
import ProfilePage from './pages/ProfilePage'; 
import EditLocationPage from './pages/EditLocation';
import ProfileDrawer from './components/ProfileDrawer';
import SettingsPage from './pages/SettingPage';
import FuelPrice from './components/FuelPrice';
import VehicleDetails from './components/VehicleDetails';
import Book from './components/Book';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/booking" element={<BookingPage />} /> 
        <Route path="/services" element={<ServicesPage />} /> 
        <Route path="/myprofile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} /> 
        <Route path="/location" element={<PrivateRoute><EditLocationPage /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><SettingsPage/></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><ProfileDrawer/></PrivateRoute>} />
        <Route path="/fuelprice" element={<PrivateRoute><FuelPrice/></PrivateRoute>} />
        <Route path="/vehicle/:type" element={<PrivateRoute><VehicleDetails/></PrivateRoute>} />
        <Route path="/book" element={<PrivateRoute><Book/></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
