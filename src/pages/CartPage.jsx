
import { CartPanel } from "../features/components/cart/CartPanel";
import { MotorcycleInfo } from "../features/components/cart/MotorcycleInfo";
import { MotorcycleShowcase } from "../features/home/MotorcycleShowcase";


export default function CartPage() {

  const vehiclePrice = 258999;
  const roadTax = 22999;

  return (
    <div className="w-full min-h-screen bg-[#f2f2f2]">

      {/* DESKTOP */}
      <div className="hidden lg:flex h-screen">
        <MotorcycleShowcase
          variant="Teal"
          state="Tamil Nadu"
          onRoadPrice="₹2,57,284"
        />

        <div className="w-[422px] bg-white shadow-[-10px_0_14px_0_rgba(0,0,0,0.06)]">
          <CartPanel
            // cartItems={cartItems}
            // onDeleteItem={handleDeleteItem}
            vehiclePrice={vehiclePrice}
            roadTax={roadTax}
          />
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden min-h-screen bg-white">
        <div className="w-full p-[16px]">
          <MotorcycleInfo />
        </div>

        {/* <div className="h-[8px] bg-[#f2f2f2]" /> */}

        <CartPanel
          // cartItems={cartItems}
          // onDeleteItem={handleDeleteItem}
          vehiclePrice={vehiclePrice}
          roadTax={roadTax}
        />
      </div>
    </div>
  );
}
