import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import splashImage from '../../assets/images/cngenlogo.png';
import './SplashScreen.scss';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src={splashImage} alt="Splash" className="splash-image" />
    </div>
  );
};

export default SplashScreen;
