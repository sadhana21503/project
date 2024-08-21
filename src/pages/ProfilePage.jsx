import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSignOutAlt, FaCog, FaPencilAlt, FaArrowLeft, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const ProfilePage = () => {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Bhavith T',
    email: 'bhavitth@gmail.com',
    phone: '741852963',
    description: 'I am a car owner who values keeping my vehicle in pristine condition. I\'m looking for a reliable car wash service that offers thorough cleaning and detailing, ensuring my car looks its best after every wash.'
  });

  const [newProfile, setNewProfile] = useState(profile);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const handleEditProfile = () => {
    setNewProfile(profile); 
    setShowEditPopup(true);
  };

  const handleEditLocation = () => {
    navigate('/location');
  };

  const closePopup = () => {
    setShowEditPopup(false);
  };

  const handleUpdateProfile = () => {
    setProfile(newProfile);
    setShowEditPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header/>
      <div className="flex flex-col h-full p-4">
        <div className="relative">
          <button onClick={() => navigate('/home')} className="absolute top-4 right-4">
            <FaArrowLeft className="text-gray-900 h-4 w-4" />
          </button>
          <div className="bg-[#318f99] text-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">My Profile</h2>
            <div className="flex items-center">
              <div className="bg-white p-4 rounded-full mr-4">
                <FaUser className="text-gray-900 h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{profile.name}</h3>
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
              </div>
              <button 
                onClick={handleEditProfile} 
                className="ml-auto text-gray-900 p-2 rounded-full transition-colors"
              >
                <FaPencilAlt className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-4 text-center">
              {profile.description}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
            <FaMapMarkerAlt className="text-[#1e565c] h-6 w-6 mr-4" />
            <div>
              <p className="font-semibold">Water tank, 9th D btm layout</p>
              <p>Bengaluru 560029</p>
            </div>
            <button onClick={handleEditLocation} className="ml-auto text-[#1e565c]">
              <FaPencilAlt className="h-3 w-3" />
            </button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center cursor-pointer" onClick={() => navigate('/settings')}>
            <FaCog className="text-[#1e565c] h-6 w-6 mr-4" />
            <span>Settings</span>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center cursor-pointer" onClick={handleLogout}>
            <FaSignOutAlt className="text-[#1e565c] h-6 w-6 mr-4" />
            <span>Logout</span>
          </div>
        </div>

        {showEditPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4 shadow-lg">
              <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
              <input 
                type="text" 
                name="name"
                value={newProfile.name}
                onChange={handleChange}
                placeholder="Name" 
                className="w-full mb-2 p-3 border rounded focus:outline-none focus:border-[#1e565c]" 
              />
              <input 
                type="email" 
                name="email"
                value={newProfile.email}
                onChange={handleChange}
                placeholder="Email" 
                className="w-full mb-2 p-3 border rounded focus:outline-none focus:border-[#1e565c]" 
              />
              <input 
                type="tel" 
                name="phone"
                value={newProfile.phone}
                onChange={handleChange}
                placeholder="Phone" 
                className="w-full mb-2 p-3 border rounded focus:outline-none focus:border-[#1e565c]" 
              />
              <textarea
                name="description"
                value={newProfile.description}
                onChange={handleChange}
                placeholder="Description"
                rows="4"
                className="w-full mb-4 p-3 border rounded focus:outline-none focus:border-[#1e565c]"
              />
              <div className="flex justify-end">
                <button 
                  onClick={closePopup} 
                  className="bg-gray-300 p-2 rounded mr-2 hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleUpdateProfile} 
                  className="bg-[#0c2d13] text-white p-2 rounded hover:bg-[#218838] transition-colors"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
