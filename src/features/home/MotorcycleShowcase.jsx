import { LocationModal } from "./LocationModal";
import { useSelector } from "react-redux";

export function MotorcycleShowcase({
  imageSrc = "/flyingflea.png",
  logoSrc = "/icon.svg",
  variant = "Teal",
  //state = "Tamil Nadu",
  onRoadPrice = "₹2,57,284",
}) {

 const selectedState = useSelector((state) => state.location.state);

  return (
    <div className="flex-1 relative overflow-hidden bg-[#f2f2f2]">

      {/* Bike Image */}
      <div className="absolute inset-0 flex items-start justify-center z-10 pt-[5px]">
        <div className="relative w-full max-w-[800px] h-[500px]">
          <img
            src={imageSrc}
            alt="Motorcycle"
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>

      {/* Details Overlay */}
      <div
        className="
          absolute bottom-[80px] left-1/2
          -translate-x-1/2
          flex flex-col items-center gap-[20px]
          z-30
        "
      >
        {/* Variant */}
        <div className="flex gap-[4px] items-end justify-center">
          <img src={logoSrc} alt="logo" className="w-40" />
          <p className="text-[18px] text-black">{variant}</p>
        </div>

        {/* Price */}
        <div className="flex gap-[12px] items-center">
          <p className="text-[#7e7e7e] text-[14px]">On-road price</p>
          <p className="text-[16px] text-black font-bold">{selectedState}</p>
         
          <p className="text-[#05a8a3] text-[20px] font-bold">
            {onRoadPrice}
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        className="
          absolute bottom-0 left-0 right-0 h-[174px]
          bg-gradient-to-b
          from-transparent
          via-[#d9d9d9] via-[33%]
          to-[#f2f2f2]
          z-20 pointer-events-none
        "
      />
     
    </div>
  );
}
