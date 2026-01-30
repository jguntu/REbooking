import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useSelector} from "react-redux";
import {
  selectCartCount
} from "../../../store/cartSlice";
import { useEffect, useState } from "react";
import { LocationModal } from "../../home/LocationModal";
import { EMICalculatorModal } from "../EMICalculator/EMICalculatorModal";
import { useNavigate } from "react-router-dom";
import { ProductOptions } from "./ProductOptions";
import { CategoryTabs } from "./CategoryTabs";
import { selectEMICalculations } from "../../../store/emiSlice";

export function ProductViewer() {
  const cartCount = useSelector(selectCartCount);
  const selectedState = useSelector((state) => state.location.state);
  const { emi } = useSelector(selectEMICalculations);

  const navigate = useNavigate();

  const [showLocationModal, setShowLocationModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Tamil Nadu");
  const [selectedCategory, setSelectedCategory] = useState("seat");


  const formatCurrency = (amount) => {
    return `₹${amount?.toLocaleString("en-IN")}`;
  };

  useEffect(() => {
    sessionStorage.removeItem("locationModalShown");

    const hasShown = sessionStorage.getItem("locationModalShown");
    if (!hasShown) {
      setShowLocationModal(true);
      sessionStorage.setItem("locationModalShown", "true");
    }
  }, []);

  const handleLocationUpdate = (newLocation) => {
    setCurrentLocation(newLocation);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="relative w-full bg-black">
      {/* ================= IMAGE CONTAINER ================= */}
      <div className="relative w-full h-[420px] sm:h-[480px] lg:h-screen overflow-hidden">

        <img
          src="/Product_bike-configurator.png"
          alt="FF Motorcycle"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(2,1,6,0)_5.33%,#000000_106.36%)]" />

        {/* ================= RIGHT OPTIONS (DESKTOP) ================= */}
        <div className="hidden lg:block fixed top-0 right-0 z-50 bg-[#0c0c0c] w-[183.08px] h-screen overflow-y-auto overflow-x-hidden">
          <ProductOptions category={selectedCategory} compact />
        </div>

        {/* ================= TOP LEFT ================= */}
        <div className="absolute top-4 left-4 lg:top-8 lg:left-16 z-40">
          <button className="w-[56.21px] h-[56.21px] rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white">
            <ChevronLeft />
          </button>
        </div>

        {/* ================= TOP RIGHT ================= */}
        <div className="absolute top-4 right-4 lg:top-8 lg:right-72 z-40 flex gap-4">
          <button className="w-[56.21px] h-[56.21px] rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
            <img src="/Pin_Icon.png" alt="Pin Icon" className="w-10 h-10" />
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="relative w-[56.21px] h-[56.21px] bg-white/10 rounded-full backdrop-blur-md flex items-center justify-center text-white"
          >
            <img src="/Cart_Icon.png" alt="Cart" className="w-5 h-5" />

            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-green-500 text-xs w-5 h-5 rounded-full flex items-center justify-center text-white font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* ================= PRODUCT TITLE ================= */}
        <div className="absolute top-10 left-36 z-40 text-white">
          <img
            src="/Product_Configurator_2.png"
            alt="FFV6"
            className="h-8 mb-1"
          />
          <p className="text-xs text-white/70">
            Motorcycle shown may be different from actual product.
          </p>
        </div>

        {/* ================= DESKTOP PRICE ================= */}
        <div className="hidden lg:block absolute bottom-24 left-20 z-40 text-white">
          <div className="flex gap-2 items-center">
            <span className="text-gray-300 text-lg">On-road price</span>
            <button
              className="text-[#00a8a3] text-lg underline"
              onClick={() => setShowLocationModal(true)}
            >
              {selectedState}
            </button>
          </div>

          <div className="flex gap-2 mt-1">
            <span className="text-lg">₹2,57,284 or</span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[#00a8a3] text-lg underline"
            >
              {formatCurrency(emi)}/mo
            </button>
          </div>
        </div>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden lg:flex absolute bottom-24 right-72 z-40 gap-4">
          <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="w-14 h-14 rounded-full bg-[#00a8a3] flex items-center justify-center text-black"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* ================= DESKTOP TABS ================= */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0">
          <CategoryTabs onCategoryChange={handleCategoryChange} />
        </div>
      </div>

      {/* ================= MOBILE OPTIONS (✅ FIXED) ================= */}
      <div className="lg:hidden pt-4 pb-[96px] bg-[#0c0c0c] relative z-40">
        <div className="overflow-x-auto">
          <ProductOptions category={selectedCategory} compact />
        </div>

        <div className="mt-4">
          <CategoryTabs onCategoryChange={handleCategoryChange} />
        </div>
      </div>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0c0c0c]/95 backdrop-blur px-4 py-3 flex justify-between items-center">
        <div className="text-white">
          <div className="flex gap-2 text-xs text-gray-300">
            <span>On-road price</span>
            <button
              onClick={() => setShowLocationModal(true)}
              className="text-[#00a8a3] underline"
            >
              {selectedState}
            </button>
          </div>

          <div className="text-sm">
            ₹2,57,284 or{" "}
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[#00a8a3] underline"
            >
              {formatCurrency(emi)}/mo
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="w-14 h-14 rounded-full bg-[#00a8a3] flex items-center justify-center text-black"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* ================= MODALS ================= */}
      <LocationModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        onLocationUpdate={handleLocationUpdate}
        currentLocation={currentLocation}
      />

      <EMICalculatorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
