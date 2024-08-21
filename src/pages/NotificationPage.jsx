import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState('notifications');

  const notifications = [
    {
      id: 1,
      text: 'Your car service will be done today! See you at 9pm.',
      time: '20 min ago',
      icon: '',
    },
  ];

  const messages = [
    {
      id: 1,
      name: 'Royal Parvej',
      text: 'I Reached the Location',
      time: '19:37',
      unreadCount: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div>
        <div className="flex justify-around text-gray-500">
          <button
            className={`py-2 w-1/2 text-center ${
              activeTab === 'notifications'
                ? 'text-[#318f99] border-b-2 border-[#318f99]'
                : ''
            }`}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </button>
          <button
            className={`py-2 w-1/2 text-center ${
              activeTab === 'messages'
                ? 'text-[#318f99] border-b-2 border-[#318f99]'
                : ''
            }`}
            onClick={() => setActiveTab('messages')}
          >
            Messages {messages.length > 0 && `(${messages.length})`}
          </button>
        </div>
      </div>

      <div className="p-4">
        {activeTab === 'notifications' && (
          <div className="shadow-lg p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-gray-800">{notifications[0].text}</p>
              <span className="text-sm font-light text-gray-500">{notifications[0].time}</span>
            </div>
            <div className="w-10 h-8 bg-gray-600"></div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="shadow-lg p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white">
                {messages[0].name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-bold text-gray-800">{messages[0].name}</p>
                <p className="text-sm text-gray-700">{messages[0].text}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="block text-sm text-gray-500">{messages[0].time}</span>
              {messages[0].unreadCount > 0 && (
                <span className="bg-[#318f99] text-white text-xs rounded-full px-2 py-1">
                  {messages[0].unreadCount}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default NotificationPage;
