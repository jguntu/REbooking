import { ChevronLeft, ChevronRight, Grid3x3, RefreshCw, ShoppingCart } from "lucide-react"
import { useSelector } from "react-redux"
import { selectCartCount } from "../../../store/cartSlice"
import { useEffect, useState } from "react";
import { LocationModal } from "../../home/LocationModal";
import { useNavigate } from "react-router-dom";

export function Configurator3d() {
  const cartCount = useSelector(selectCartCount);
   const [showLocationModal, setShowLocationModal] = useState(false);
    const [currentLocation, setCurrentLocation] = useState('Tamil Nadu');
    const navigate = useNavigate();
 
    // Show modal on initial load/refresh
    useEffect(() => {
      // Check if we're on the product route (or just show it always for this demo)
      const hasShownModal = sessionStorage.getItem('locationModalShown');
     
      if (!hasShownModal) {
        setShowLocationModal(true);
        sessionStorage.setItem('locationModalShown', 'true');
      }
    }, []);
 
    const handleLocationUpdate = (newLocation) => {
      setCurrentLocation(newLocation);
      // Here you can also update pricing or other location-dependent data
      console.log('Location updated to:', newLocation);
    };

  return (
    <div className="relative bg-black">
      {/* Main Image Container */}
      <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background gradient overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-[174px] bg-gradient-to-b from-black/0 to-black opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 h-[219px] bg-gradient-to-t from-black/0 to-black opacity-100" />
        </div>

        {/* Motorcycle Image */}
        <div className="absolute inset-0 flex items-center justify-center">
         <iframe
  src="https://content.hmxmedia.com/RE/Flying_Flea_EV/index.html"
  title="Flying Flea 3D Configurator"
  className="w-full h-full max-h-full max-w-full"
  frameBorder="0"
  allow="fullscreen; autoplay; xr-spatial-tracking"
  allowFullScreen
/>

          
        </div>

        {/* Top Left Navigation */}
        <div className="absolute top-4 lg:top-8 left-4 lg:left-8 flex items-center gap-4">
          <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Top Right Controls */}
        <div className="absolute top-4 lg:top-8 right-4 lg:right-8 flex items-center gap-3">
          <button className="w-14 h-14 rounded-full bg-gray-600/46 backdrop-blur-md flex items-center justify-center text-white hover:bg-gray-600/60 transition-colors">
            
            <img src="/Pin_Icon.png" alt="Pin Icon" className="w-10 h-10" />
          </button>
          <button onClick={() => navigate("/cart")} className="w-14 h-14 rounded-full bg-gray-600/46 backdrop-blur-md flex items-center justify-center text-white hover:bg-gray-600/60 transition-colors">
            <ShoppingCart className="w-5 h-5" />
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
      {cartCount}
    </span>
  )}


          </button>
        </div>

        {/* Product Title and Disclaimer */}
      <div className="absolute top-10 left-20 p-2 z-20 max-w-sm text-white">
        <img
          src="/Product_Configurator_2.png"
          alt="FFV6"
          className="h-8 mb-1"
        />
        <p className="text-xs text-white/70 leading-tight">
          Motorcycle shown may be different from the actual product received.
        </p>
      </div>

        {/* Pricing Information - Bottom Left */}
        <div className="absolute bottom-8 lg:bottom-12 left-4 lg:left-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#999] text-lg lg:text-xl">
                On-road price
              </span>
              <a
                href="#"
                className="text-[#00a8a3] text-lg lg:text-xl font-bold underline"
                onClick={() => setShowLocationModal(true)}
              >
                {currentLocation}
              </a>
            </div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl">
              <span className="text-white">₹2,57,284 or</span>
              <a href="#" className="text-[#00a8a3] font-bold underline">
                ₹4,942/mo
              </a>
            </div>
          </div>
        </div>

        {/* Action Buttons - Bottom Right */}
        <div className="absolute bottom-8 lg:bottom-12 right-4 lg:right-12 flex items-center gap-4">
          <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
          <button onClick={() => navigate("/cart")} className="w-14 h-14 rounded-full bg-[#00a8a3] flex items-center justify-center text-black hover:bg-[#00a8a3]/90 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <LocationModal
                isOpen={showLocationModal}
                onClose={() => setShowLocationModal(false)}
                onLocationUpdate={handleLocationUpdate}
                currentLocation={currentLocation}
              />
    </div>
  )
}
