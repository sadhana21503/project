
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import splashImage from '../assets/images/cngenlogo.png';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

   
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <img src={splashImage} alt="Splash" className="max-w-full h-auto" />
    </div>
  );
};

export default SplashScreen;
