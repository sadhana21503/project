import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/splashscreen/SplashScreen';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/register/Register';
import NotificationPage from './pages/notificationpage/NotificationPage';
import BookingPage from './pages/Bookingpage/BookingPage'; 
import ServicesPage from './pages/servicespage/ServicesPage';
import ProfilePage from './pages/profilepage/ProfilePage'; 
import EditLocationPage from './pages/editlocationpage/EditLocation';
import ProfileDrawer from './components/profileDrawer/ProfileDrawer';
import SettingsPage from './pages/settingspage/SettingPage';
import FuelPrice from './components/fuelprice/FuelPrice';
import VehicleDetails from './components/vehicledetails/VehicleDetails';
import Book from './components/books/Book';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen/>} />
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
