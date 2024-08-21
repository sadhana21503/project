import React, { useState } from 'react';
import { FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import hatchback from '../assets/images/hatchback.png';
import sedan from '../assets/images/sedan.png';
import midsuv from '../assets/images/midsuv.png';
import suv from '../assets/images/suv.png';
import luxury from '../assets/images/luxury.png';
const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const vehicles = [
    { type: 'hatchback', name: 'Hatchback', image: hatchback, description: 'i.e alto, i10, i20, etc.' },
    { type: 'sedan', name: 'Sedan', image: sedan, description: 'i.e ford, toyota, corolla, honda civic, etc.' },
    { type: 'mid-suv', name: 'Mid-SUV', image: midsuv, description: 'i.e thar, kia, seltos, creta, xuv 300, etc.' },
    { type: 'suv', name: 'SUV', image: suv, description: 'i.e kia carnival, fortuner, tata hexa, etc.' },
    { type: 'luxury', name: 'Luxury Vehicle', image: luxury, description: 'i.e mercedes, bmw, audi, etc.' },
  ];

  const handleNavigate = (vehicleType) => {
    navigate(`/vehicle/${vehicleType}`);
  };

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen bg-[#1A2944]">
        <header className="p-4">
          <h2 className="text-center text-xl font-semibold text-gray-100">Please select vehicle</h2>
          <div className="mt-4 flex items-center bg-white rounded-full shadow-md px-4 py-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-2 flex-grow outline-none"
            />
          </div>
        </header>

        <main className="flex-grow p-4 space-y-4 pb-20">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-[#318f99] p-4 rounded-xl flex items-center space-x-4 cursor-pointer"
                onClick={() => handleNavigate(vehicle.type)}
              >
                <img src={vehicle.image} alt={vehicle.name} className="w-28 h-20 rounded-lg" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{vehicle.name}</h3>
                  <p className="text-sm text-gray-700">{vehicle.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700">No vehicles found</p>
          )}
        </main>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
