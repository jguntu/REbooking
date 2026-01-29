// hellobfeheffegyfg
// feyeyf7eyf7ey7fye
// dugufuegfgfegeuf
// efufuhfuhef
import PriceInfo from './PriceInfo';

const BikePreview = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-black aspect-[21/9]">

      {/* Bike Image */}
      <img
        src="/Product_bike-configurator.png"
        alt="Bike"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Left Gradient Overlay (Figma style) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Top Left – Back Icon */}
      {/* <button className=" rounded-full flex items-center justify-center shadow-xl"></button> */}
      <button className="absolute top-6 left-6 z-20 rounded-full">
        <img
          src="/Preview_Icon.png"
          alt="Back"
          className="w-8 h-8"
        />
      </button>

      {/* Title + Disclaimer */}
      <div className="absolute top-6 left-20 z-20 max-w-sm text-white">
        <img
          src="/Product_Configurator_2.png"
          alt="FFV6"
          className="h-8 mb-1"
        />
        <p className="text-xs text-white/70 leading-tight">
          Motorcycle shown may be different from the actual product received.
        </p>
      </div>

      {/* Top Right Icons */}
      <div className="absolute top-6 right-6 z-20 flex gap-4">
        <button className=" rounded-full flex items-center justify-center shadow-xl">
          <img
            src="/Pin_Icon.png"
            alt="Pin"
            className="w-8 h-8"
          />
        </button>

        <button className=" rounded-full flex items-center justify-center shadow-xl">
          <img
            src="/Cart_Icon.png"
            alt="Cart"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Bottom Left – Price Info */}
      <PriceInfo />

      {/* Bottom Right – Action Buttons */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-4">
        <button className=" rounded-full flex items-center justify-center shadow-xl">
          <img src="/Save_Icon.png" alt="Save" className="w-8 h-8" />
        </button>

        <button className="rounded-full flex items-center justify-center shadow-xl">
          <img src="/Next_Icon.png" alt="Next" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default BikePreview;
