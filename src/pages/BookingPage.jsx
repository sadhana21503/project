import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import car from '../assets/images/car.png';
import bike from '../assets/images/bike.png';

const BookingPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleCarClick = () => {
    navigate('/home');
  };

  const handleBikeClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000); 
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold text-[#1A2944]">Subscription Options</h1>
        <p className="text-gray-600 mt-4 text-center text-md px-5">
          Choose From Our Range Of Subscription Options To Unlock Exclusive Features And Benefits Tailored To Your Needs
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mt-20 space-y-20">
        <div onClick={handleCarClick} className="cursor-pointer">
          <img src={car} alt="Car" className="h-12 w-28" />
        </div>
        <div onClick={handleBikeClick} className="cursor-pointer">
          <img src={bike} alt="Bike" className="h-12 w-28" />
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className=" bg-white text-[#1A2944] p-2 rounded-lg shadow-lg">
            <p className="text-center text-lg font-semibold ">Coming Soon</p>
          </div>
        </div>
      )}

      <Navbar />
    </div>
  );
};

export default BookingPage;
