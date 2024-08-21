import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimeKeeper from 'react-timekeeper';
import Autocomplete from 'react-google-autocomplete';

const Book = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState('06:00');
  const [address, setAddress] = useState('');
  const [selectedAddressType, setSelectedAddressType] = useState('');
  const [isTimeOpen, setIsTimeOpen] = useState(false);

  const today = new Date();

  const handlePlaceSelected = (place) => {
    const formattedAddress = place.formatted_address;
    setAddress(formattedAddress);
  };

  const validateTime = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    if ((hour >= 6 && hour < 9) || (hour >= 18 && hour < 21)) {
      setStartTime(time);
    } else {
      alert('service is between 6 AM to 9 AM or 6 PM to 9 PM.');
    }
  };

  return (
    <div className="min-h-screen bg-[#1A2944] p-4">
      <div className="flex items-center mb-4">
        <button onClick={() => navigate(-1)} className="mr-4">
          <FaArrowLeft className="text-gray-200" />
        </button>
        <h2 className="text-xl text-white font-semibold">Checkout</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        

        <h3 className="text-gray-800 font-extrabold text-lg mb-2">When do you want the service?</h3>

        <h4 className="text-gray-600 mb-1 font-bold">Select Date</h4>
        <div className="flex items-center mb-4">
          <FaCalendarAlt className="text-2xl text-[#318f99] mr-3" />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="bg-gray-200 rounded-lg px-4 py-2 text-[#237078] w-full"
            placeholderText="Select a date"
            minDate={today}
          />
        </div>

        <h4 className="text-gray-600 mb-1 font-bold">Select Time</h4>
        <div className="flex items-center mb-4">
          <FaClock className="text-2xl text-[#318f99] mr-3" />
          <div className="relative">
            <button
              onClick={() => setIsTimeOpen(true)}
              className="bg-gray-200 rounded-lg px-4 py-2 text-[#237078] w-full text-left"
            >
              {startTime}
            </button>
            {isTimeOpen && (
              <div className="relative z-10">
                <TimeKeeper
                  time={startTime}
                  onChange={(data) => validateTime(data.formatted24)}
                  switchToMinuteOnHourSelect={true}
                  onDoneClick={() => setIsTimeOpen(false)}
                />
              </div>
            )}
          </div>
          
        </div>
        <h3 className="text-gray-800 font-medium mb-2">Pick-up Address</h3>

        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-2xl text-[#318f99] mr-3" />
          <Autocomplete
            apiKey="YOUR_GOOGLE_API_KEY"  
            onPlaceSelected={handlePlaceSelected}
            className="bg-gray-200 rounded-lg px-4 py-2 text-[#237078] w-full"
            placeholder="Enter pick-up address"
          />
        </div>

        <h4 className="text-gray-900 mb-2 font-bold">Pick-up Address Type</h4>
        <div className="flex gap-4 mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="addressType"
              value="home"
              checked={selectedAddressType === 'home'}
              onChange={(e) => setSelectedAddressType(e.target.value)}
              className="mr-2"
            />
            Home
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="addressType"
              value="work"
              checked={selectedAddressType === 'work'}
              onChange={(e) => setSelectedAddressType(e.target.value)}
              className="mr-2"
            />
            Work
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="addressType"
              value="others"
              checked={selectedAddressType === 'others'}
              onChange={(e) => setSelectedAddressType(e.target.value)}
              className="mr-2"
            />
            Others
          </label>
        </div>
      </div>

      <button
        className="w-full py-3 mt-6 bg-[#318f99] text-black font- rounded-lg text-center"
        onClick={() => navigate('/payment')}
      >
        PROCEED
      </button>
    </div>
  );
};

export default Book;
