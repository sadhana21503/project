import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaTrash, FaPencilAlt, FaHome, FaBriefcase } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const EditLocationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [locations, setLocations] = useState([
    { type: 'HOME', address: '2464 Royal Ln. Mesa, New Jersey 45463', icon: FaHome },
    { type: 'WORK', address: '3891 Ranchview Dr. Richardson, California 62639', icon: FaBriefcase }
  ]);
  const [editingLocation, setEditingLocation] = useState(null);
  const [newAddress, setNewAddress] = useState('');

  useEffect(() => {
    if (location.state) {
      const { address, addressType } = location.state;
      setLocations((prevLocations) => 
        prevLocations.some(loc => loc.type === addressType) 
        ? prevLocations.map(loc =>
            loc.type === addressType
              ? { ...loc, address }
              : loc
          )
        : [...prevLocations, { type: addressType, address, icon: addressType === 'home' ? FaHome : FaBriefcase }]
      );
    }
  }, [location.state]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = (location) => {
    setEditingLocation(location);
    setNewAddress(location.address);
  };

  const handleDelete = (locationType) => {
    setLocations(locations.filter(location => location.type !== locationType));
  };

  const handleSave = () => {
    if (editingLocation) {
      setLocations(locations.map(location =>
        location.type === editingLocation.type
          ? { ...location, address: newAddress }
          : location
      ));
      setEditingLocation(null);
      setNewAddress('');
    }
  };

  // const handleCancel = () => {
  //   setEditingLocation(null);
  //   setNewAddress('');
  // };

  return (
    <div className="bg-gray-200 min-h-screen p-4 text-gray-900">
      <div className="flex items-center mb-4">
        <button onClick={handleBack} className="text-gray-900">
          <FaArrowLeft className="h-6 w-6" />
        </button>
        <h2 className="text-xl font-bold ml-4">My Address</h2>
      </div>

      <div className="space-y-4">
        {locations.map((location) => (
          <div key={location.type} className="bg-[#318f99] p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center text-black">
              <div className="p-2 rounded-full mr-4">
                <location.icon className="text-black h-6 w-6" />
              </div>
              <div>
                <p className="font-bold">{location.type}</p>
                {editingLocation?.type === location.type ? (
                  <input
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    className="mt-1 p-2 border border-gray-200 rounded w-full text-sm"
                  />
                ) : (
                  <p>{location.address}</p>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              {editingLocation?.type === location.type ? (
                <>
                  <button onClick={handleSave} className="text-gray-900 h-5 w-5 -ml-10">
                    Save
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEdit(location)}>
                    <FaPencilAlt className="text-gray-900 h-5 w-5" />
                  </button>
                  <button onClick={() => handleDelete(location.type)}>
                    <FaTrash className="text-gray-900 h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* <Navbar /> */}
    </div>
  );
};

export default EditLocationPage;
