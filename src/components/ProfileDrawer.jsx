import React from 'react';
import { FaUser, FaHistory, FaMapMarkerAlt, FaCog, FaSignOutAlt, FaQuestionCircle, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProfileDrawer = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();

  const handleNavigateToProfile = () => {
    toggleDrawer(); 
    navigate('/myprofile'); 
  };

  const handleNavigateToLocation = () => {
    toggleDrawer();
    navigate('/location');
  };

  const handleNavigateToSettings = () => {
    toggleDrawer();
    navigate('/settings');
  };

  const handleLogout = () => {
    toggleDrawer();
    navigate('/login'); 
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-[#1A2944] transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ width: '75%' }}
    >
      <div className="p-4 relative">
        <button 
          onClick={toggleDrawer}
          className="absolute top-4 right-4 text-gray-100 hover:text-gray-800 transition-colors duration-300"
        >
          <FaArrowLeft className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center mt-8">
          <FaUser className="h-16 w-16 text-gray-500 mb-4" />
          <h2 className="text-2xl text-white font-bold">Profile</h2>

          <ul className="mt-10 space-y-6 text-white">
            <li className="flex items-center space-x-2 cursor-pointer" onClick={handleNavigateToProfile}>
              <FaUser className="h-5 w-5" />
              <span>My Profile</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <FaHistory className="h-5 w-5" />
              <span>History</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer" onClick={handleNavigateToLocation}>
              <FaMapMarkerAlt className="h-5 w-5" />
              <span>Delivery Address</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer" onClick={handleNavigateToSettings}>
              <FaCog className="h-5 w-5" />
              <span>Settings</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer" onClick={handleLogout}>
              <FaSignOutAlt className="h-5 w-5" />
              <span>Logout</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <FaQuestionCircle className="h-5 w-5" />
              <span>Help and FAQs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDrawer;
