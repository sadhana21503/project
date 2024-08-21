import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from "../assets/images/cngenlogo.png";
import { FaBell } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate('/notifications'); 
  };

  return (
    <>
      <header className="p-4 sticky flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="Logo" className="h-12 w-12" />
        </div>
        <div className="notification">
          <FaBell 
            className="text-[#1A2944] h-6 w-6 cursor-pointer hover:text-[#318f99] transition-colors duration-300" 
            onClick={handleNotificationClick}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
