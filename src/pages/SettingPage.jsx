import React from 'react';
import { FaArrowLeft, FaStar, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      <div className="p-10 relative">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-8 left-8 text-gray-800 hover:text-gray-600 transition-colors duration-300"
        >
          <FaArrowLeft className="h-5 w-5" />
        </button>

        <div className="mt-8">
          <h2 className="text-2xl text-gray-900 font-bold">Settings</h2>

          <ul className="mt-8 space-y-4 text-gray-800">
            <li className="flex items-center space-x-2 cursor-pointer">
              <FaStar className="h-5 w-5 text-gray-600" />
              <span>Rate us</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <FaInfoCircle className="h-5 w-5 text-gray-600" />
              <span>App info</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <FaTimesCircle className="h-5 w-5 text-gray-600" />
              <span>Delete Account</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
