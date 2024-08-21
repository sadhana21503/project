import React, { useState } from 'react';
import { FaHome, FaSuitcase, FaCogs, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ProfileDrawer from './ProfileDrawer'; 

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen); 
  };

  return (
    <>
      <nav className="bg-[#1A2944] p-4 flex justify-around items-center fixed bottom-0 w-full">
        <NavLink 
          to="/home" 
          className={({ isActive }) => 
            isActive 
              ? "text-[#318f99]" 
              : "text-white hover:text-[#318f99] transition-colors duration-300"
          }
        >
          <FaHome className="mx-auto" size={24} />
        </NavLink>
        <NavLink 
          to="/booking" 
          className={({ isActive }) => 
            isActive 
              ? "text-[#318f99]" 
              : "text-white hover:text-[#318f99] transition-colors duration-300"
          }
        >
          <FaSuitcase className="mx-auto" size={24} />
        </NavLink>
        <NavLink 
          to="/services" 
          className={({ isActive }) => 
            isActive 
              ? "text-[#318f99]" 
              : "text-white hover:text-[#318f99] transition-colors duration-300"
          }
        >
          <FaCogs className="mx-auto" size={24} />
        </NavLink>
        <div 
          className="text-white cursor-pointer hover:text-[#318f99] transition-colors duration-300"
          onClick={toggleDrawer} 
          >
          <FaUser className="mx-auto" size={24} />
        </div>
      </nav>

      <ProfileDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} /> {/* Add ProfileDrawer */}
    </>
  );
};

export default Navbar;
