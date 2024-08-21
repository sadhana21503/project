import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const navigateToFuelPrice = () => {
    navigate('/fuelprice'); 
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-6">Services</h2>
        <div className="space-y-4">
          <div className="bg-[#318f99] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Challan</h3>
            <p className="text-sm text-gray-800">Check your challan details</p>
          </div>
          <div
            className="bg-[#318f99] p-4 rounded-lg shadow-md cursor-pointer"
            onClick={navigateToFuelPrice}
          >
            <h3 className="text-lg font-bold text-gray-800">Fuel Price</h3>
            <p className="text-sm text-gray-800">Check fuel price across the country</p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ServicesPage;
