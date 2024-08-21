import React, { useState } from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';

const FuelPrice = () => {
  const [city, setCity] = useState('Karnataka');
  const [petrolPrice, setPetrolPrice] = useState('Rs. 100.58');
  const [dieselPrice, setDieselPrice] = useState('Rs. 85.05');

  const handleSearch = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center bg-white p-2 rounded shadow mb-4">
        <FaArrowLeft className="text-gray-600 mr-2 cursor-pointer" onClick={() => { '/services' }} />
        <input
          type="text"
          placeholder="Search city"
          className="flex-grow px-2 py-1 rounded-l outline-none"
          onChange={handleSearch}
        />
        <FaSearch className="text-gray-600 mx-2" />
        <FaMicrophone className="text-gray-600" />
      </div>
      <h2 className="text-center text-2xl font-bold mb-4">Fuel Price</h2>
      <div className="bg-teal-200 p-4 rounded shadow">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-semibold">{city}</h3>
            <p className="text-sm text-gray-600">13 March 2024</p>
          </div>
          <div className="flex space-x-4">
            <div className="text-center">
              <p className="font-semibold">Petrol</p>
              <p className="text-red-500">{petrolPrice}</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Diesel</p>
              <p className="text-red-500">{dieselPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelPrice;
