import React from "react";
import HomeBanner from "./HomeBanner";
import BookingServices from "./BookingServices";
import WhyRoyalEnfield from "./WhyRoyalEnfield";

// Home Page Wrapper
export default function Home() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-gray-100">
      <HomeBanner />
      <BookingServices />
      <WhyRoyalEnfield />
     
    </div>
  );
}
// import { ChevronLeft, Check, ChevronDown, AlertCircle, MapPin, AlertTriangle } from 'lucide-react';
// import { useState } from 'react';
// import svgPaths from "./imports/svg-vz97gzkjim";
// import imgFlyingFleaRhsProfileTimeless from "figma:asset/d04e9f54296688dbbf27f404a7a2ecd4b9a0758d.png";

// type ColorOption = 'teal' | 'lime';
// type FinanceOption = 'yes' | 'no';
// type OwnershipStatus = 'first-motorcycle' | 'first-flea' | 'existing-owner';
// type BookingStep = 'dealer' | 'details' | 'confirmation';

// interface Dealer {
//   id: string;
//   name: string;
//   address: string;
//   city: string;
//   pincode: string;
// }

// interface DealerFormData {
//   pincode: string;
//   city: string;
//   state: string;
//   selectedDealer: string | null;
// }

// interface BookingFormData {
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   fatherName: string;
//   email: string;
//   mobile: string;
//   addressLine1: string;
//   addressLine2: string;
//   pincode: string;
//   city: string;
//   state: string;
//   requireFinance: FinanceOption | null;
//   preferredBank: string;
//   ownershipStatus: OwnershipStatus | null;
//   acceptTerms: boolean;
// }

// interface FormErrors {
//   // Dealer errors
//   dealerPincode?: string;
//   selectedDealer?: string;
//   // Booking errors
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   mobile?: string;
//   addressLine1?: string;
//   pincode?: string;
//   requireFinance?: string;
//   preferredBank?: string;
//   ownershipStatus?: string;
//   acceptTerms?: string;
// }

// // Mock dealer data
// const mockDealers: Record<string, Dealer[]> = {
//   '134003': [
//     { id: '1', name: 'V.N. MOTORS, AMBALA', address: 'SCO 78, Thane, Ambala, Haryana.', city: 'Ambala', pincode: '134003' },
//     { id: '2', name: 'Sharma Motors, Ambala', address: '2, shikshas nagar, airport road, Ambala, Haryana', city: 'Ambala', pincode: '134003' },
//   ],
//   '400001': [
//     { id: '3', name: 'V.N. MOTORS, MUMBAI', address: 'SCO 78, Thane, Mumbai, Maharashtra.', city: 'Mumbai', pincode: '400001' },
//     { id: '4', name: 'Sharma Motors, Mumbai', address: '2, shikshas nagar, airport road, Mumbai, Maharashtra', city: 'Mumbai', pincode: '400001' },
//   ],
//   '110001': [
//     { id: '5', name: 'V.N. MOTORS, DELHI', address: 'SCO 78, Connaught Place, New Delhi.', city: 'New Delhi', pincode: '110001' },
//     { id: '6', name: 'Sharma Motors, Delhi', address: '2, Nehru Place, New Delhi', city: 'New Delhi', pincode: '110001' },
//   ],
//   '560001': [
//     { id: '7', name: 'V.N. MOTORS, BANGALORE', address: 'SCO 78, MG Road, Bangalore, Karnataka.', city: 'Bangalore', pincode: '560001' },
//     { id: '8', name: 'Sharma Motors, Bangalore', address: '2, Indiranagar, Bangalore, Karnataka', city: 'Bangalore', pincode: '560001' },
//   ],
// };

// const pincodeLocationData: Record<string, { city: string; state: string; hasDelivery: boolean }> = {
//   '134003': { city: 'Ambala', state: 'Haryana', hasDelivery: true },
//   '400001': { city: 'Mumbai', state: 'Maharashtra', hasDelivery: true },
//   '110001': { city: 'New Delhi', state: 'Delhi', hasDelivery: true },
//   '560001': { city: 'Bangalore', state: 'Karnataka', hasDelivery: true },
//   '600001': { city: 'Chennai', state: 'Tamil Nadu', hasDelivery: false },
//   '700001': { city: 'Kolkata', state: 'West Bengal', hasDelivery: false },
// };

// export default function App() {
//   const [currentStep, setCurrentStep] = useState<BookingStep>('dealer');
//   const [selectedColor, setSelectedColor] = useState<ColorOption>('teal');
  
//   // Dealer step data
//   const [dealerData, setDealerData] = useState<DealerFormData>({
//     pincode: '',
//     city: '',
//     state: '',
//     selectedDealer: null,
//   });

//   // Booking step data
//   const [bookingData, setBookingData] = useState<BookingFormData>({
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     fatherName: '',
//     email: '',
//     mobile: '',
//     addressLine1: '',
//     addressLine2: '',
//     pincode: '',
//     city: '',
//     state: '',
//     requireFinance: null,
//     preferredBank: '',
//     ownershipStatus: null,
//     acceptTerms: false,
//   });
  
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [touched, setTouched] = useState<Record<string, boolean>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [availableDealers, setAvailableDealers] = useState<Dealer[]>([]);
//   const [deliveryAvailable, setDeliveryAvailable] = useState(true);

//   const validateEmail = (email: string): boolean => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateMobile = (mobile: string): boolean => {
//     const mobileRegex = /^[6-9]\d{9}$/;
//     return mobileRegex.test(mobile);
//   };

//   const validatePincode = (pincode: string): boolean => {
//     const pincodeRegex = /^\d{6}$/;
//     return pincodeRegex.test(pincode);
//   };

//   const validateDealerStep = (): FormErrors => {
//     const newErrors: FormErrors = {};

//     if (!dealerData.pincode.trim()) {
//       newErrors.dealerPincode = 'Pincode is required';
//     } else if (!validatePincode(dealerData.pincode)) {
//       newErrors.dealerPincode = 'Please enter a valid 6-digit pincode';
//     } else if (!deliveryAvailable) {
//       newErrors.dealerPincode = 'Delivery not available in this area';
//     }

//     if (!dealerData.selectedDealer) {
//       newErrors.selectedDealer = 'Please select a dealer';
//     }

//     return newErrors;
//   };

//   const validateBookingStep = (): FormErrors => {
//     const newErrors: FormErrors = {};

//     if (!bookingData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//     } else if (bookingData.firstName.trim().length < 2) {
//       newErrors.firstName = 'First name must be at least 2 characters';
//     }

//     if (!bookingData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//     } else if (bookingData.lastName.trim().length < 2) {
//       newErrors.lastName = 'Last name must be at least 2 characters';
//     }

//     if (!bookingData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!validateEmail(bookingData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!bookingData.mobile.trim()) {
//       newErrors.mobile = 'Mobile number is required';
//     } else if (!validateMobile(bookingData.mobile)) {
//       newErrors.mobile = 'Please enter a valid 10-digit mobile number';
//     }

//     if (!bookingData.addressLine1.trim()) {
//       newErrors.addressLine1 = 'Address is required';
//     }

//     if (bookingData.pincode && !validatePincode(bookingData.pincode)) {
//       newErrors.pincode = 'Please enter a valid 6-digit pincode';
//     }

//     if (!bookingData.requireFinance) {
//       newErrors.requireFinance = 'Please select finance requirement';
//     }

//     if (bookingData.requireFinance === 'yes' && !bookingData.preferredBank.trim()) {
//       newErrors.preferredBank = 'Please select a preferred bank';
//     }

//     if (!bookingData.ownershipStatus) {
//       newErrors.ownershipStatus = 'Please select ownership status';
//     }

//     if (!bookingData.acceptTerms) {
//       newErrors.acceptTerms = 'You must accept the terms and conditions';
//     }

//     return newErrors;
//   };

//   const handleDealerPincodeChange = (pincode: string) => {
//     setDealerData(prev => ({ ...prev, pincode }));
    
//     if (validatePincode(pincode)) {
//       const locationData = pincodeLocationData[pincode];
      
//       if (locationData) {
//         setDealerData(prev => ({
//           ...prev,
//           city: locationData.city,
//           state: locationData.state,
//         }));
//         setDeliveryAvailable(locationData.hasDelivery);
        
//         if (locationData.hasDelivery) {
//           const dealers = mockDealers[pincode] || [];
//           setAvailableDealers(dealers);
//         } else {
//           setAvailableDealers([]);
//         }
//       } else {
//         setDealerData(prev => ({ ...prev, city: '', state: '' }));
//         setAvailableDealers([]);
//         setDeliveryAvailable(true);
//       }
//     } else {
//       setDealerData(prev => ({ ...prev, city: '', state: '', selectedDealer: null }));
//       setAvailableDealers([]);
//       setDeliveryAvailable(true);
//     }
    
//     // Clear errors
//     if (errors.dealerPincode) {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors.dealerPincode;
//         return newErrors;
//       });
//     }
//   };

//   const handleDealerSelect = (dealerId: string) => {
//     setDealerData(prev => ({ ...prev, selectedDealer: dealerId }));
//     if (errors.selectedDealer) {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors.selectedDealer;
//         return newErrors;
//       });
//     }
//   };

//   const handleBookingInputChange = (field: keyof BookingFormData, value: string | boolean | FinanceOption | OwnershipStatus) => {
//     setBookingData(prev => ({ ...prev, [field]: value }));
    
//     if (errors[field as keyof FormErrors]) {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors[field as keyof FormErrors];
//         return newErrors;
//       });
//     }
//   };

//   const handleBlur = (field: string) => {
//     setTouched(prev => ({ ...prev, [field]: true }));
//   };

//   const handleBookingPincodeChange = (pincode: string) => {
//     handleBookingInputChange('pincode', pincode);
    
//     if (validatePincode(pincode)) {
//       const locationData = pincodeLocationData[pincode];
//       if (locationData) {
//         setBookingData(prev => ({
//           ...prev,
//           city: locationData.city,
//           state: locationData.state,
//         }));
//       }
//     }
//   };

//   const handleContinueFromDealer = () => {
//     const allFields = { dealerPincode: true, selectedDealer: true };
//     setTouched(allFields);

//     const newErrors = validateDealerStep();
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setCurrentStep('details');
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   const handleContinueFromBooking = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const allFields = Object.keys(bookingData).reduce((acc, key) => {
//       acc[key] = true;
//       return acc;
//     }, {} as Record<string, boolean>);
//     setTouched(allFields);

//     const newErrors = validateBookingStep();
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setIsSubmitting(true);
      
//       console.log('Booking submitted:', { 
//         dealerData, 
//         bookingData, 
//         selectedColor 
//       });
      
//       setTimeout(() => {
//         setIsSubmitting(false);
//         setCurrentStep('confirmation');
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }, 1500);
//     } else {
//       const firstErrorField = Object.keys(newErrors)[0];
//       const element = document.getElementById(firstErrorField);
//       element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   const showError = (field: keyof FormErrors) => {
//     return touched[field] && errors[field];
//   };

//   const canContinueFromDealer = dealerData.pincode.length === 6 && 
//                                  dealerData.selectedDealer !== null && 
//                                  deliveryAvailable;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <button 
//             onClick={() => {
//               if (currentStep === 'details') {
//                 setCurrentStep('dealer');
//               }
//             }}
//             className="flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors"
//           >
//             <ChevronLeft className="w-5 h-5" />
//             <span className="font-medium">Book your FF.C6</span>
//           </button>
//         </div>
//       </header>

//       {/* Progress Steps */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 py-8">
//           <div className="flex items-center justify-center gap-8 max-w-3xl mx-auto">
//             {/* Step 1 - Choose Dealer */}
//             <div className="flex flex-col items-center gap-3 flex-1">
//               <div className="relative">
//                 <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
//                   currentStep === 'dealer' 
//                     ? 'border-[#3AA76D] bg-white' 
//                     : 'border-[#3AA76D] bg-[#3AA76D]'
//                 }`}>
//                   {currentStep !== 'dealer' ? (
//                     <Check className="w-6 h-6 text-white" />
//                   ) : (
//                     <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
//                       <path d={svgPaths.p21096670} stroke="#3AA76D" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                   )}
//                 </div>
//               </div>
//               <p className="text-xs font-bold uppercase text-center">Choose a<br />Dealer</p>
//             </div>

//             {/* Connector 1 */}
//             <div className={`flex-1 h-0.5 -mt-8 ${
//               currentStep !== 'dealer' ? 'bg-[#3AA76D]' : 'bg-gray-300'
//             }`} />

//             {/* Step 2 - Booking Details */}
//             <div className="flex flex-col items-center gap-3 flex-1">
//               <div className="relative">
//                 <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
//                   currentStep === 'details' 
//                     ? 'border-[#3AA76D] bg-white' 
//                     : currentStep === 'confirmation'
//                     ? 'border-[#3AA76D] bg-[#3AA76D]'
//                     : 'bg-gray-200 border-gray-200'
//                 }`}>
//                   {currentStep === 'confirmation' ? (
//                     <Check className="w-6 h-6 text-white" />
//                   ) : currentStep === 'details' ? (
//                     <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
//                       <path d={svgPaths.p24fb3980} stroke="#3AA76D" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                   ) : (
//                     <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
//                       <path d={svgPaths.p24fb3980} stroke="#4D4D4D" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                   )}
//                 </div>
//               </div>
//               <p className={`text-xs font-bold uppercase text-center ${
//                 currentStep === 'dealer' ? 'text-gray-400' : 'text-black'
//               }`}>Booking<br />Details</p>
//             </div>

//             {/* Connector 2 */}
//             <div className={`flex-1 h-0.5 -mt-8 ${
//               currentStep === 'confirmation' ? 'bg-[#3AA76D]' : 'bg-gray-300'
//             }`} />

//             {/* Step 3 - Confirmation */}
//             <div className="flex flex-col items-center gap-3 flex-1">
//               <div className="relative">
//                 <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
//                   currentStep === 'confirmation'
//                     ? 'border-2 border-[#3AA76D] bg-white'
//                     : 'bg-gray-200'
//                 }`}>
//                   <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
//                     <path d={svgPaths.p934900} stroke={currentStep === 'confirmation' ? '#3AA76D' : '#4D4D4D'} strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </div>
//               </div>
//               <p className="text-xs font-bold uppercase text-center text-gray-400">Confirmation</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {/* STEP 1: Choose a Dealer */}
//         {currentStep === 'dealer' && (
//           <div className="max-w-md mx-auto">
//             <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
//               {/* Pincode Input */}
//               <div id="dealerPincode">
//                 <label className="block text-sm text-gray-700 mb-2">Pincode*</label>
//                 <input 
//                   type="text" 
//                   value={dealerData.pincode}
//                   onChange={(e) => {
//                     const value = e.target.value.replace(/\D/g, '').slice(0, 6);
//                     handleDealerPincodeChange(value);
//                   }}
//                   onBlur={() => handleBlur('dealerPincode')}
//                   className={`w-full pb-2 border-b ${showError('dealerPincode') ? 'border-red-500' : 'border-gray-300'} focus:border-gray-900 outline-none transition-colors text-lg`}
//                   placeholder="Enter pincode"
//                   maxLength={6}
//                 />
//                 {showError('dealerPincode') && (
//                   <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
//                     <AlertCircle className="w-3 h-3" />
//                     {errors.dealerPincode}
//                   </p>
//                 )}
//               </div>

//               {/* Delivery Warning */}
//               {dealerData.pincode.length === 6 && !deliveryAvailable && (
//                 <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
//                   <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
//                   <p className="text-sm text-amber-800">
//                     Motorcycle delivery is currently available in the limited cities only.
//                   </p>
//                 </div>
//               )}

//               {/* City and State Display */}
//               {dealerData.city && (
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm text-gray-600 mb-1">City</label>
//                     <p className="text-base font-medium">{dealerData.city}</p>
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-600 mb-1">State</label>
//                     <p className="text-base font-medium">{dealerData.state}</p>
//                   </div>
//                 </div>
//               )}

//               {/* Dealer Selection */}
//               {availableDealers.length > 0 && (
//                 <div id="selectedDealer">
//                   <label className="block text-sm font-medium text-gray-900 mb-4">Select a dealer</label>
//                   <div className="space-y-3">
//                     {availableDealers.map((dealer) => (
//                       <button
//                         key={dealer.id}
//                         type="button"
//                         onClick={() => handleDealerSelect(dealer.id)}
//                         className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
//                           dealerData.selectedDealer === dealer.id
//                             ? 'border-[#05a8a3] bg-teal-50'
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                       >
//                         <div className="flex items-start justify-between">
//                           <div className="flex-1">
//                             <h3 className="font-bold text-base mb-1">{dealer.name}</h3>
//                             <p className="text-sm text-gray-600 mb-0">Address</p>
//                             <p className="text-sm text-gray-900">{dealer.address}</p>
//                           </div>
//                           <MapPin className={`w-5 h-5 shrink-0 ml-3 ${
//                             dealerData.selectedDealer === dealer.id ? 'text-[#05a8a3]' : 'text-gray-400'
//                           }`} />
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                   {showError('selectedDealer') && (
//                     <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
//                       <AlertCircle className="w-3 h-3" />
//                       {errors.selectedDealer}
//                     </p>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Price and Continue */}
//             <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
//               <div className="bg-gradient-to-b from-teal-50 to-white p-6 border-b border-gray-200">
//                 <div className="flex items-baseline gap-2 mb-1">
//                   <span className="text-2xl font-bold">₹X,XX,000</span>
//                   <span className="text-sm text-gray-600">
//                     Starts at <span className="font-bold text-[#00a8a3]">₹X,000/Month</span>
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-600">Booking amount to be paid ₹X,000</p>
//               </div>
              
//               <div className="p-6">
//                 <button
//                   type="button"
//                   onClick={handleContinueFromDealer}
//                   disabled={!canContinueFromDealer}
//                   className="w-full bg-[#05a8a3] hover:bg-[#048f8a] disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-extrabold py-4 rounded-lg transition-all tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:shadow-none"
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* STEP 2: Booking Details */}
//         {currentStep === 'details' && (
//           <form onSubmit={handleContinueFromBooking}>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//               {/* Left Column - Motorcycle Selection */}
//               <div className="lg:col-span-1">
//                 <div className="bg-white rounded-xl shadow-sm p-8 sticky top-32">
//                   <h2 className="text-xl font-bold mb-6">SELECT MOTORCYCLE COLOR</h2>
                  
//                   <div className="relative mb-6">
//                     <img 
//                       src={imgFlyingFleaRhsProfileTimeless} 
//                       alt="Flying Flea Motorcycle" 
//                       className="w-full h-auto"
//                     />
//                   </div>

//                   <div className="flex gap-3 mb-8">
//                     <button
//                       type="button"
//                       onClick={() => setSelectedColor('teal')}
//                       className={`relative w-10 h-10 bg-[#05a8a3] rounded flex items-center justify-center cursor-pointer transition-all ${
//                         selectedColor === 'teal' ? 'ring-2 ring-[#05a8a3] ring-offset-2' : 'hover:ring-2 hover:ring-[#05a8a3] hover:ring-offset-2'
//                       }`}
//                       aria-label="Select teal color"
//                     >
//                       {selectedColor === 'teal' && <Check className="w-5 h-5 text-white" />}
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setSelectedColor('lime')}
//                       className={`w-10 h-10 bg-[#acdd00] rounded cursor-pointer transition-all ${
//                         selectedColor === 'lime' ? 'ring-2 ring-[#acdd00] ring-offset-2' : 'hover:ring-2 hover:ring-[#acdd00] hover:ring-offset-2'
//                       }`}
//                       aria-label="Select lime color"
//                     >
//                       {selectedColor === 'lime' && <Check className="w-5 h-5 text-black" />}
//                     </button>
//                   </div>

//                   <div className="border-t border-gray-200 pt-6">
//                     <div className="flex items-baseline gap-2 mb-2">
//                       <span className="text-2xl font-bold">₹X,XX,000</span>
//                       <span className="text-sm text-gray-600">Starts at <span className="font-bold text-[#00a8a3]">₹X,000/Month</span></span>
//                     </div>
//                     <p className="text-sm text-gray-600">Booking amount to be paid ₹X,000</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Column - Forms */}
//               <div className="lg:col-span-2 space-y-8">
//                 {/* Personal Details */}
//                 <div className="bg-white rounded-xl shadow-sm p-8">
//                   <h2 className="text-xl font-bold mb-2">Personal Details</h2>
//                   <p className="text-sm italic text-gray-600 mb-6">Enter the name as per the Government issued ID Proof</p>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div id="firstName">
//                       <label className="block text-sm text-gray-700 mb-2">First name*</label>
//                       <input 
//                         type="text" 
//                         value={bookingData.firstName}
//                         onChange={(e) => handleBookingInputChange('firstName', e.target.value)}
//                         onBlur={() => handleBlur('firstName')}
//                         className={`w-full pb-2 border-b ${showError('firstName') ? 'border-red-500' : 'border-gray-300'} focus:border-gray-900 outline-none transition-colors`}
//                         placeholder="Enter first name"
//                       />
//                       {showError('firstName') && (
//                         <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
//                           <AlertCircle className="w-3 h-3" />
//                           {errors.firstName}
//                         </p>
//                       )}
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm text-gray-700 mb-2">Middle name</label>
//                       <input 
//                         type="text" 
//                         value={bookingData.middleName}
//                         onChange={(e) => handleBookingInputChange('middleName', e.target.value)}
//                         className="w-full pb-2 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors"
//                         placeholder="Enter middle name"
//                       />
//                     </div>

//                     <div id="lastName">
//                       <label className="block text-sm text-gray-700 mb-2">Last name*</label>
//                       <input 
//                         type="text" 
//                         value={bookingData.lastName}
//                         onChange={(e) => handleBookingInputChange('lastName', e.target.value)}
//                         onBlur={() => handleBlur('lastName')}
//                         className={`w-full pb-2 border-b ${showError('lastName') ? 'border-red-500' : 'border-gray-300'} focus:border-gray-900 outline-none transition-colors`}
//                         placeholder="Enter last name"
//                       />
//                       {showError('lastName') && (
//                         <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
//                           <AlertCircle className="w-3 h-3" />
//                           {errors.lastName}
//                         </p>
//                       )}
//                     </div>

//                     <div>
//                       <label className="block text-sm text-gray-700 mb-2">Father name</label>
//                       <input 
//                         type="text" 
//                         value={bookingData.fatherName}
//                         onChange={(e) => handleBookingInputChange('fatherName', e.target.value)}
//                         className="w-full pb-2 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors"
//                         placeholder="Enter father's name"
//                       />
//                     </div>

//                     <div id="email">
//                       <label className="block text-sm text-gray-700 mb-2">Email address*</label>
//                       <input 
//                         type="email" 
//                         value={bookingData.email}
//                         onChange={(e) => handleBookingInputChange('email', e.target.value)}
//                         onBlur={() => handleBlur('email')}
//                         className={`w-full pb-2 border-b ${showError('email') ? 'border-red-500' : 'border-gray-300'} focus:border-gray-900 outline-none transition-colors`}
//                         placeholder="Enter email address"
//                       />
//                       {showError('email') && (
//                         <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
//                           <AlertCircle className="w-3 h-3" />
//                           {errors.email}
//                         </p>
//                       )}
//                     </div>

//                     <div id="mobile">
//                       <label className="block text-sm text-gray-700 mb-2">Mobile number*</label>
//                       <input 
//                         type="tel" 
//                         value={bookingData.mobile}
//                         onChange={(e) => {
//                           const value = e.target.value.replace(/\D/g, '').slice(0, 10);
//                           handleBookingInputChange('mobile', value);
//                         }}
//                         onBlur={() => handleBlur('mobile')}
//                         className={`w-full pb-2 border-b ${showError('mobile') ? 'border-red-500' : 'border-gray-300'} focus:border-gray-900 outline-none transition-colors`}
//                         placeholder="Enter 10-digit mobile number"
//                         maxLength={10}
//                       />
//                       {showError('mobile') && (
//                         <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
//                           <AlertCircle className="w-3 h-3" />
//                           {errors.mobile}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Address Details */}
//                 <div className="bg-white rounded-xl shadow-sm p-8">
//                   <h2 className="text-xl font-bold mb-6">Address Details</h2>
                  
//                   <div className="space-y-6">
//                     <div id="addressLine1">
//                       <label className="block text-sm text-gray-700 mb-2">Address line 1*</label>
//                       <input 
//                         type="text" 
//                         value={bookingData.addressLine1}
//                         onChange={(e) => handleBookingInputChange('addressLine1', e.target.value)}
//                         onBlur={() => handleBlur('addressLine1')}
//                         className={`w-full pb-2 border-b ${showError('addressLine1') ? 'border-red-500' : 'border-gray-300'} focus:border-gray-900 outline-none transition-colors`}
//                         placeholder="Enter address line 1"
//                       />
//                       {showError('addressLine1') && (
//                         <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
//                           <AlertCircle className="w-3 h-3" />
//                           {errors.addressLine1}
//                         </p>
//                       )}
//                     </div>

//                     <div>
//                       <label className="block text-sm text-gray-700 mb-2">Address line 2</label>
//                       <input 
//                         type="text" 
//                         value={bookingData.addressLine2}
//                         onChange={(e) => handleBookingInputChange('addressLine2', e.target.value)}
//                         className="w-full pb-2 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors"
//                         placeholder="Enter address line 2 (optional)"
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                       <div id="pincode">
//                         <label className="block text-sm text-gray-700 mb-2">Pincode</label>
//                         <input 
//                           type="text" 
//                           value={bookingData.pincode}
//                           onChange={(e) => {
//                             const value = e.target.value.replace(/\D/g, '').slice(0, 6);
//                             handleBookingPincodeChange(value);
//                           }}
//                           onBlur={() => handleBlur('pincode')}
//                           className={`w-full pb-2 border-b ${showError('pincode') ? 'border-red-500' : 'border-gray-300'} focus:border-gray-900 outline-none transition-colors`}
//                           placeholder="Enter pincode"
//                           maxLength={6}
//                         />
//                         {showError('pincode') && (
//                           <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
//                             <AlertCircle className="w-3 h-3" />
//                             {errors.pincode}
//                           </p>
//                         )}
//                       </div>

//                       <div>
//                         <label className="block text-sm text-gray-700 mb-2">City</label>
//                         <div className="pb-2 text-gray-600">{bookingData.city || '-'}</div>
//                       </div>

//                       <div>
//                         <label className="block text-sm text-gray-700 mb-2">State</label>
//                         <div className="pb-2 text-gray-600">{bookingData.state || '-'}</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Finance Requirement */}
//                 <div className="bg-white rounded-xl shadow-sm p-8">
//                   <h2 className="text-xl font-bold mb-6">FINANCE REQUIREMENT</h2>
                  
//                   <div className="space-y-6">
//                     <div id="requireFinance">
//                       <label className="block text-sm text-gray-700 mb-4">Do you require finances?*</label>
//                       <div className="space-y-4">
//                         <label className="flex items-center gap-3 cursor-pointer">
//                           <input
//                             type="radio"
//                             name="requireFinance"
//                             checked={bookingData.requireFinance === 'yes'}
//                             onChange={() => handleBookingInputChange('requireFinance', 'yes')}
//                             className="sr-only"
//                           />
//                           <div className="relative">
//                             <div className={`w-6 h-6 rounded-full border-2 transition-all ${
//                               bookingData.requireFinance === 'yes' 
//                                 ? 'border-[#ACDD00] bg-[#ACDD00]' 
//                                 : 'border-gray-400'
//                             }`}>
//                               {bookingData.requireFinance === 'yes' && (
//                                 <div className="absolute inset-0 flex items-center justify-center">
//                                   <div className="w-3 h-3 rounded-full bg-black" />
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                           <span className="text-sm font-medium">Yes, I require</span>
//                         </label>

//                         <label className="flex items-center gap-3 cursor-pointer">
//                           <input
//                             type="radio"
//                             name="requireFinance"
//                             checked={bookingData.requireFinance === 'no'}
//                             onChange={() => {
//                               handleBookingInputChange('requireFinance', 'no');
//                               handleBookingInputChange('preferredBank', '');
//                             }}
//                             className="sr-only"
//                           />
//                           <div className={`w-6 h-6 rounded-full border-2 transition-all ${
//                             bookingData.requireFinance === 'no' 
//                               ? 'border-[#ACDD00] bg-[#ACDD00]' 
//                               : 'border-gray-400'
//                           }`}>
//                             {bookingData.requireFinance === 'no' && (
//                               <div className="absolute inset-0 flex items-center justify-center">
//                                 <div className="w-3 h-3 rounded-full bg-black" />
//                               </div>
//                             )}
//                           </div>
//                           <span className="text-sm font-medium">No, I don't require</span>
//                         </label>
//                       </div>
//                       {showError('requireFinance') && (
//                         <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
//                           <AlertCircle className="w-3 h-3" />
//                           {errors.requireFinance}
//                         </p>
//                       )}
//                     </div>

//                     {bookingData.requireFinance === 'yes' && (
//                       <div id="preferredBank">
//                         <label className="block text-sm text-gray-700 mb-2">Select preferred bank*</label>
//                         <div className="relative">
//                           <select 
//                             value={bookingData.preferredBank}
//                             onChange={(e) => handleBookingInputChange('preferredBank', e.target.value)}
//                             onBlur={() => handleBlur('preferredBank')}
//                             className={`w-full pb-2 border-b ${showError('preferredBank') ? 'border-red-500' : 'border-gray-300'} focus:border-gray-900 outline-none transition-colors appearance-none bg-transparent pr-8 cursor-pointer`}
//                           >
//                             <option value="">Select a bank</option>
//                             <option value="HDFC Bank">HDFC Bank</option>
//                             <option value="ICICI Bank">ICICI Bank</option>
//                             <option value="SBI">State Bank of India</option>
//                             <option value="Axis Bank">Axis Bank</option>
//                             <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
//                             <option value="Punjab National Bank">Punjab National Bank</option>
//                           </select>
//                           <ChevronDown className="absolute right-0 bottom-3 w-5 h-5 text-gray-600 pointer-events-none" />
//                         </div>
//                         {showError('preferredBank') && (
//                           <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
//                             <AlertCircle className="w-3 h-3" />
//                             {errors.preferredBank}
//                           </p>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Ownership Status */}
//                 <div className="bg-white rounded-xl shadow-sm p-8">
//                   <h2 className="text-xl font-bold mb-6">Ownership Status</h2>
                  
//                   <div id="ownershipStatus">
//                     <label className="block text-sm text-gray-700 mb-4">Select your ownership status*</label>
//                     <div className="space-y-4">
//                       <label className="flex items-center gap-3 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="ownershipStatus"
//                           checked={bookingData.ownershipStatus === 'first-motorcycle'}
//                           onChange={() => handleBookingInputChange('ownershipStatus', 'first-motorcycle')}
//                           className="sr-only"
//                         />
//                         <div className="relative">
//                           <div className={`w-6 h-6 rounded-full border-2 transition-all ${
//                             bookingData.ownershipStatus === 'first-motorcycle' 
//                               ? 'border-[#ACDD00] bg-[#ACDD00]' 
//                               : 'border-gray-400'
//                           }`}>
//                             {bookingData.ownershipStatus === 'first-motorcycle' && (
//                               <div className="absolute inset-0 flex items-center justify-center">
//                                 <div className="w-3 h-3 rounded-full bg-black" />
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                         <span className="text-sm font-medium">First motorcycle</span>
//                       </label>

//                       <label className="flex items-center gap-3 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="ownershipStatus"
//                           checked={bookingData.ownershipStatus === 'first-flea'}
//                           onChange={() => handleBookingInputChange('ownershipStatus', 'first-flea')}
//                           className="sr-only"
//                         />
//                         <div className={`w-6 h-6 rounded-full border-2 transition-all ${
//                           bookingData.ownershipStatus === 'first-flea' 
//                             ? 'border-[#ACDD00] bg-[#ACDD00]' 
//                             : 'border-gray-400'
//                         }`}>
//                           {bookingData.ownershipStatus === 'first-flea' && (
//                             <div className="absolute inset-0 flex items-center justify-center">
//                               <div className="w-3 h-3 rounded-full bg-black" />
//                             </div>
//                           )}
//                         </div>
//                         <span className="text-sm font-medium">First Flying Flea bike</span>
//                       </label>

//                       <label className="flex items-center gap-3 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="ownershipStatus"
//                           checked={bookingData.ownershipStatus === 'existing-owner'}
//                           onChange={() => handleBookingInputChange('ownershipStatus', 'existing-owner')}
//                           className="sr-only"
//                         />
//                         <div className={`w-6 h-6 rounded-full border-2 transition-all ${
//                           bookingData.ownershipStatus === 'existing-owner' 
//                             ? 'border-[#ACDD00] bg-[#ACDD00]' 
//                             : 'border-gray-400'
//                         }`}>
//                           {bookingData.ownershipStatus === 'existing-owner' && (
//                             <div className="absolute inset-0 flex items-center justify-center">
//                               <div className="w-3 h-3 rounded-full bg-black" />
//                             </div>
//                           )}
//                         </div>
//                         <span className="text-sm font-medium">Existing motorcycle owner</span>
//                       </label>
//                     </div>
//                     {showError('ownershipStatus') && (
//                       <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
//                         <AlertCircle className="w-3 h-3" />
//                         {errors.ownershipStatus}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Disclaimer */}
//                 <div className="bg-white rounded-xl shadow-sm p-8">
//                   <h3 className="text-sm font-bold mb-4">Disclaimer</h3>
                  
//                   <p className="text-xs text-gray-700 leading-relaxed mb-4">
//                     By signing this form/checking this box, you acknowledge and agree that we may use the information you share with us, to communicate with you through e-mails, text messages and calls, in order to provide our product or service related information and/or for promotional and marketing purposes. All information provided will be secured and processed as per our privacy policy.
//                   </p>

//                   <div id="acceptTerms">
//                     <label className="flex items-start gap-3 cursor-pointer group">
//                       <input
//                         type="checkbox"
//                         checked={bookingData.acceptTerms}
//                         onChange={(e) => handleBookingInputChange('acceptTerms', e.target.checked)}
//                         onBlur={() => handleBlur('acceptTerms')}
//                         className="sr-only"
//                       />
//                       <div className="shrink-0 mt-0.5">
//                         <div className={`w-6 h-6 rounded border transition-all ${
//                           bookingData.acceptTerms 
//                             ? 'border-[#ACDD00] bg-[#ACDD00]' 
//                             : showError('acceptTerms')
//                             ? 'border-red-500'
//                             : 'border-gray-300 group-hover:border-gray-400'
//                         } flex items-center justify-center`}>
//                           {bookingData.acceptTerms && <Check className="w-4 h-4 text-black" />}
//                         </div>
//                       </div>
//                       <span className="text-sm">
//                         <span className="font-light">I accept the </span>
//                         <span className="font-semibold">terms and conditions</span>
//                       </span>
//                     </label>
//                     {showError('acceptTerms') && (
//                       <p className="text-red-500 text-xs mt-2 flex items-center gap-1 ml-9">
//                         <AlertCircle className="w-3 h-3" />
//                         {errors.acceptTerms}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Continue Button */}
//                 <div className="flex justify-end">
//                   <button 
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="bg-[#05a8a3] hover:bg-[#048f8a] disabled:bg-gray-400 disabled:cursor-not-allowed text-black font-extrabold px-16 py-4 rounded-lg transition-all tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//                   >
//                     {isSubmitting ? 'Processing...' : 'Continue'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         )}

//         {/* STEP 3: Confirmation */}
//         {currentStep === 'confirmation' && (
//           <div className="max-w-2xl mx-auto text-center">
//             <div className="bg-white rounded-xl shadow-sm p-12">
//               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Check className="w-10 h-10 text-green-600" />
//               </div>
//               <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
//               <p className="text-gray-600 mb-8">
//                 Thank you for booking your FF.C6. You will receive a confirmation email shortly with all the details.
//               </p>
//               <div className="bg-gray-50 rounded-lg p-6 text-left space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Selected Dealer:</span>
//                   <span className="font-medium">
//                     {availableDealers.find(d => d.id === dealerData.selectedDealer)?.name}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Color:</span>
//                   <span className="font-medium capitalize">{selectedColor}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Email:</span>
//                   <span className="font-medium">{bookingData.email}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Mobile:</span>
//                   <span className="font-medium">{bookingData.mobile}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
