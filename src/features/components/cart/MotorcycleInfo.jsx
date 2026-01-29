import { useSelector } from "react-redux";
import imgFlyingFleaLhsProfileTimeless from "/flyingflea.png";
 
export function MotorcycleInfo() {
  const selectedState = useSelector((state) => state.location.state);
  return (
    <>
    <div className="flex md:hidden items-center gap-[16px] w-full">
        <button className="size-[24px] cursor-pointer hover:opacity-70 transition-opacity">
          <img src="/chevron-left.png" alt="arrow" />
        </button>
 
        <h1 className="font-interMedium text-[16px] text-black">
          Your cart
        </h1>
      </div>
 
 
    <div className="w-full bg-white rounded-[16px] overflow-hidden">
 
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 ">
        <p className="text-[13px] font-flea_bold tracking-wide uppercase text-black">
          MOTORCYCLE
        </p>
 
        <button className="text-[#05a8a3] pr-4">
          <img
              src="/Edit_Icon.png"
              alt="Flying Flea Motorcycle"
              className="w-full h-auto object-contain"
            />
        </button>
      </div>
 
      {/* Content Card */}
      <div
  className="m-4 rounded-[12px] py-4"
  style={{
    background:
      "linear-gradient(0.27deg, #F7F7F7 -8.33%, #E6F6F2 134.05%)",
    boxShadow: "0px 0px 14px 0px #00000024",
  }}
>
 
        <div className="flex gap-6 items-center justtify-between">
 
          {/* Bike Image */}
          <div className="w-[44%]">
            <img
              src={imgFlyingFleaLhsProfileTimeless}
              alt="Flying Flea Motorcycle"
              className="w-full h-auto object-contain"
            />
          </div>
 
          {/* Info */}
          <div className="w-[40%] flex flex-col gap-[6px]">
 
            {/* Model Logo */}
            <img src="/icon.svg" alt="FF C6" className="w-20" />
 
            {/* Color */}
            <p className="text-[14px] text-black font-interSemiBold">
              Teal
            </p>
 
            {/* On-road label */}
            <p className="text-[12px] text-[#666] font-interRegular">
              On-road price
            </p>
 
            {/* State */}
            <p className="text-[14px] font-interMedium text-black">
              {selectedState}
            </p>
 
            {/* Price */}
            <p className="text-[20px] font-interBold text-[#05a8a3] leading-tight">
              ₹2,57,284
            </p>
 
          </div>
        </div>
      </div>
    </div>
    </>
  );
}