import { useEffect, useState } from "react";
import { LocationModal } from "../../home/LocationModal";

const PriceInfo = () => {

   const [showLocationModal, setShowLocationModal] = useState(false);
    const [currentLocation, setCurrentLocation] = useState('Tamil Nadu');
  
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
     <div className="absolute bottom-8 left-8 z-20 text-white">
        <p className="text-xs text-white/60">
          On-road price{" "}
          <span className="text-teal-400 font-medium underline"  onClick={() => setShowLocationModal(true)}>{currentLocation}</span>
        </p>

        <p className="mt-1 text-xl font-semibold">
          ₹2,57,284{" "}
          <span className="text-sm text-white/60 font-normal">or</span>{" "}
          <span className="text-teal-400 font-semibold underline">
            ₹4,942/mo
          </span>
        </p>
        <LocationModal
                isOpen={showLocationModal}
                onClose={() => setShowLocationModal(false)}
                onLocationUpdate={handleLocationUpdate}
                currentLocation={currentLocation}
              />
      </div>
  );
};

export default PriceInfo;
