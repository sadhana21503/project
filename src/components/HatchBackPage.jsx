// import React from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Navbar from './Navbar';

// const HatchbackPage = () => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="min-h-screen bg-[#e1f4f2] p-4 flex flex-col items-center">
//       <div className="flex items-center space-x-2 mb-4 w-full">
//         <FaArrowLeft onClick={handleBack} className="cursor-pointer text-xl" />
//         <h2 className="text-xl font-bold mx-auto">Subscription booking</h2>
//       </div>

//       {/* Vehicle Section */}
//       <div className="bg-[#b5e2dc] p-4 rounded-xl flex flex-col items-center w-full mb-4">
//         <img src="/path-to-your-image/hatchback.jpg" alt="Hatchback" className="w-48 h-48 mb-4" />
//         <h3 className="text-lg font-bold text-gray-800">Hatch back</h3>
//         <p className="text-sm text-gray-700">i.e alto, i10, i20, etc.</p>
//         <button className="mt-4 px-4 py-2 bg-white text-gray-700 font-semibold border border-gray-400 rounded-full">
//           Change Vehicle
//         </button>
//       </div>

//       {/* Swipeable Container Section */}
//       <div className="flex items-center justify-between w-full">
//         <FaArrowLeft className="cursor-pointer text-xl" />
//         <div className="flex space-x-4 overflow-x-auto p-4">
//           {/* Container 1 */}
//           <div className="bg-[#b5e2dc] p-4 rounded-xl flex flex-col items-center min-w-[220px]">
//             <h4 className="font-semibold text-lg mb-2">Daily</h4>
//             <div className="flex space-x-4 mb-4">
//               <div className="flex flex-col items-center">
//                 <img src="/path-to-your-image/exterior-icon.jpg" alt="Exterior" className="w-12 h-12 mb-2" />
//                 <p className="text-sm">exterior</p>
//                 <p className="text-xs">waterless cleaning 6 days...</p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <img src="/path-to-your-image/interior-icon.jpg" alt="Interior" className="w-12 h-12 mb-2" />
//                 <p className="text-sm">interior</p>
//                 <p className="text-xs">vacuum cleaning once a week...</p>
//               </div>
//             </div>
//             <p className="text-lg font-semibold mb-2">1350/- per month</p>
//             <p className="text-xs mb-4">(including gst)</p>
//             <button className="px-4 py-2 bg-[#258076] text-white font-semibold rounded-full">
//               book daily
//             </button>
//           </div>

//           {/* Container 2 */}
//           <div className="bg-[#b5e2dc] p-4 rounded-xl flex flex-col items-center min-w-[220px]">
//             {/* Similar content as Container 1 */}
//           </div>

//           {/* Container 3 */}
//           <div className="bg-[#b5e2dc] p-4 rounded-xl flex flex-col items-center min-w-[220px]">
//             {/* Similar content as Container 1 */}
//           </div>
//         </div>
//         <FaArrowRight className="cursor-pointer text-xl" />
//       </div>
      
//     </div>
//   );
// };

// export default HatchbackPage;
