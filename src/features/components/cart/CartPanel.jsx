import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { TotalDetails } from "./TotalDetails";
import { useNavigate } from "react-router-dom";

export function CartPanel({ vehiclePrice, roadTax }) {
   const cartItems = useSelector((state) => state.cart.items);
    const navigate = useNavigate();

  const accessoriesTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white h-full flex flex-col">
      {/* ================= SCROLLABLE CONTENT ================= */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-start px-6 pb-6 gap-6">
          {/* Header */}
         
 
          {/* Accessories Section */}
          <div className="flex flex-col w-full">
             <div className="hidden lg:flex items-center gap-[16px] w-full py-4">
            <button onClick={() => navigate(-1)} className="size-[24px] cursor-pointer hover:opacity-70 transition-opacity">
              <img src="/arrow-left.svg" alt="arrow" />
            </button>
 
            <h1 className="font-interMedium text-[16px] text-black">
              Your cart
            </h1>
          </div>
            <div className="flex items-center justify-between w-full mb-2">
              <p className="font-fl font-bold text-[18px] text-black">
                ACCESSORIES ({cartItems.length})
              </p>
 
              <p className="text-[16px] text-[#4d4d4d] font-interMedium">
                Total{" "}
                <span className="font-bold text-[#00a8a3]">
                  ₹{accessoriesTotal.toLocaleString("en-IN")}
                </span>
              </p>
            </div>
 
            {/* Cart Items */}
            <div className="flex flex-col gap-[16px] w-full">
              {cartItems.length === 0 ? (
                <div className="w-full text-center py-8 text-[#666]">
                  Your cart is empty
                </div>
              ) : (
                cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))
              )}
            </div>
          </div>
          <div className="hidden md:block w-full h-px bg-[#E0E0E0]" />
 
          {/* Total Details */}
          <div className="flex flex-col w-full">
            <p className="font-fl text-[18px] text-black">TOTAL DETAILS</p>
 
            <TotalDetails
              cartItems={cartItems}
              vehiclePrice={vehiclePrice}
              roadTax={roadTax}
            />
          </div>
        </div>
      </div>
 
      {/* ================= STICKY BOTTOM ================= */}
      <div className="sticky bottom-0 z-20 w-full bg-white
                shadow-[0px_-9px_14px_0px_#0000000F]">
        {/* Price / Starts At Section */}
        <div className="bg-[#E6F7F6] px-[24px] py-[12px]">
          <div className="flex items-center">
            <p className="font-interExtraBold text-[18px] text-black">
              ₹X,XX,000
            </p>
 
            <p className="font-interMedium text-[14px] text-[#4d4d4d] p-2">
              Starts at{" "}
              <span className="font-interBold text-[#05a8a3]">₹X,000/Month</span>
            </p>
          </div>
        </div>
 
        {/* Buttons Section */}
        <div className="px-[24px] py-[16px] bg-white">
          <div className="flex gap-[16px]">
            {/* Save Button */}
            <button
              className="flex-1 h-[48px] rounded-[10px]
                   border border-black
                   font-extrabold text-[16px]
                   font-interExtraBold
                   text-black
                   hover:bg-gray-50 transition"
            >
              Save
            </button>
 
            {/* Continue Button */}
            <button
              className="flex-1 h-[48px] rounded-[10px]
                   bg-[#05A8A3]
                   font-extrabold text-[16px]
                   font-interExtraBold
                   text-black
                   hover:opacity-90 transition"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
