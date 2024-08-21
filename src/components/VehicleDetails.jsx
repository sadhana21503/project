import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import hatchback from '../assets/images/hatchback.png';
import sedan from '../assets/images/sedan.png';
import midsuv from '../assets/images/midsuv.png';
import suv from '../assets/images/suv.png';
import luxury from '../assets/images/luxury.png';
import exterior from '../assets/images/exterior.png';
import interior from '../assets/images/interior.png';

const VehicleDetails = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const vehicleData = [
    { type: 'hatchback', name: 'Hatchback', image: hatchback, description: 'i.e alto, i10, i20, etc.' },
    { type: 'sedan', name: 'Sedan', image: sedan, description: 'i.e ford, toyota, corolla, honda civic, etc.' },
    { type: 'mid-suv', name: 'Mid-SUV', image: midsuv, description: 'i.e thar, kia, seltos, creta, xuv 300, etc.' },
    { type: 'suv', name: 'SUV', image: suv, description: 'i.e kia carnival, fortuner, tata hexa, etc.' },
    { type: 'luxury', name: 'Luxury Vehicle', image: luxury, description: 'i.e mercedes, bmw, audi, etc.' },
  ];

  const bookingData = [
    {
      title: 'Daily',
      exterior: 'Waterless cleaning 6 days...',
      interior: 'Vacuum cleaning once a week...',
      price: '1350/- per month',
    },
    {
      title: 'Weekly',
      exterior: 'Full exterior wash once a week...',
      interior: 'Complete interior cleaning every week...',
      price: '670/- per month',
    },
    {
      title: 'Alternative',
      exterior: 'Exterior wax and polish once in 2 days...',
      interior: 'Detailed interior cleaning every month...',
      price: '950/- per month',
    },
  ];

  const currentVehicleIndex = vehicleData.findIndex((vehicle) => vehicle.type === type);
  const [currentVehicle, setCurrentVehicle] = useState(vehicleData[currentVehicleIndex]);
  const [currentBookingIndex, setCurrentBookingIndex] = useState(0);

  const handleChangeBooking = (direction) => {
    let newBookingIndex = currentBookingIndex + direction;
    if (newBookingIndex < 0) newBookingIndex = bookingData.length - 1;
    if (newBookingIndex >= bookingData.length) newBookingIndex = 0;

    setCurrentBookingIndex(newBookingIndex);
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };
 
  const handleDrag = (e) => {
    e.preventDefault();
    let startX = e.pageX || e.touches[0].pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const mouseMoveHandler = (moveEvent) => {
      const x = moveEvent.pageX || moveEvent.touches[0].pageX;
      const walk = (x - startX) * 2; 
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('touchmove', mouseMoveHandler);
      document.removeEventListener('touchend', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    document.addEventListener('touchmove', mouseMoveHandler);
    document.addEventListener('touchend', mouseUpHandler);
  };

  const handleBookingClick = (bookingType) => {
    navigate('/book', { state: { bookingType, vehicle: currentVehicle } });
  };

  if (!currentVehicle) {
    return <div className="p-4 text-center text-xl text-red-600">Vehicle not found</div>;
  }

  return (
    <div>
      <div className="p-4 bg-gray-200 min-h-screen">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4 text-gray-700">
            <FaArrowLeft />
          </button>
          <h2 className="text-2xl font-semibold">Subscription booking</h2>
        </div>

        <div className="mt-10 bg-[#318f99] p-4 rounded-xl flex flex-col items-center relative">
          <img src={currentVehicle.image} alt={currentVehicle.name} className="w-40 h-34 rounded-lg mb-2" />
          <h3 className="text-lg font-bold text-gray-900">{currentVehicle.name}</h3>
          <p className="text-sm text-gray-900 text-center">{currentVehicle.description}</p>
        </div>

        <button
          onClick={() => navigate('/home')}
          className="mt-4 border-[#318f99] font-bold text-gray-900 border-2 px-4 py-2 rounded-full mx-auto block"
        >
          Change Vehicle
        </button>

        <div className="relative flex items-center mt-6">
          <FaArrowLeft
            className="text-gray-900 cursor-pointer absolute left-0 z-10"
            size={20}
            onClick={() => handleScroll('left')}
          />
          <div
            ref={scrollRef}
            onMouseDown={handleDrag}
            onTouchStart={handleDrag}
            className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth mt-6 mx-6"
          >
            {bookingData.map((booking, index) => (
              <div key={index} className="bg-[#318f99] p-4 rounded-xl min-w-[250px]">
                <h4 className="text-lg font-semibold text-center">{booking.title}</h4>
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col items-center w-1/2">
                    <img src={exterior} alt="Exterior" className="w-12 h-12 mb-2" />
                    <p className="text-sm text-gray-800 text-center">{booking.exterior}</p>
                  </div>
                  <div className="flex flex-col items-center w-1/2">
                    <img src={interior} alt="Interior" className="w-12 h-12 mb-2" />
                    <p className="text-sm text-gray-800 text-center">{booking.interior}</p>
                  </div>
                </div>
                <p className="text-center font-extrabold text-xl mt-4">{booking.price}</p>
                <button
                  className="mt-4 bg-[#ffffff] border-2 text-gray-900 font-bold px-4 py-2 rounded-full w-full"
                  onClick={() => handleBookingClick(booking.title)}
                >
                  BOOK {booking.title.toUpperCase()}
                </button>
              </div>
            ))}
          </div>
          <FaArrowRight
            className="text-gray-900 cursor-pointer absolute right-0 z-10"
            size={20}
            onClick={() => handleScroll('right')}
          />
        </div>
      </div>
      {/* <Navbar /> */}
    </div>
  );
};

export default VehicleDetails;
