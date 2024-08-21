import React, { useState } from 'react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';

const FuelPrice = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState('');

  const handleBack = () => {
    navigate(-1); 
  };

  const handleSearch = (event) => {
    console.log('Search city:', city);
  };

  return (
    <div>
    <Header/>
    <div className="min-h-screen bg-white p-4">
      <div className="flex items-center space-x-2">
        <FaArrowLeft onClick={handleBack} className="cursor-pointer text-xl" />
        <div className="flex-grow flex items-center bg-white rounded-full px-4 py-2 shadow-md">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="ml-2 flex-grow outline-none"
          />
          <button onClick={handleSearch} className="ml-2 text-gray-600">
            <FaSearch />
          </button>
        </div>
      </div>
      <h2 className="text-xl font-bold my-6 text-center">Fuel Price</h2>
      <div className="bg-[#318f99] p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Karnataka</h3>
            <p className="text-sm text-gray-900">13 March 2024</p>
          </div>
          <div className="flex space-x-4">
            <div className="bg-white p-2 rounded-lg shadow text-center">
              <p className="text-xs font-semibold text-gray-600">Petrol</p>
              <p className="text-sm font-bold text-red-600">Rs. 100.58</p>
            </div>
            <div className="bg-white p-2 rounded-lg shadow text-center">
              <p className="text-xs font-semibold text-gray-600">Diesel</p>
              <p className="text-sm font-bold text-red-600">Rs. 85.05</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navbar/>
    </div>
  );
};

export default FuelPrice;
