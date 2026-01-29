//import { useState, useEffect } from "react";
import { X, MapPin } from "lucide-react";
import { useLocationData } from "../../hooks/useLocationData";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../store/locationSlice";

export function LocationModal({
  isOpen,
  onClose,
}) {
  // 🔥 Fetch states from Firestore
  const { states, loading } = useLocationData("IN");
  console.log("States loaded:", states);

  const dispatch = useDispatch();
const selectedState = useSelector((state) => state.location.state);


  // Selected state (display name)
  //const [selectedState, setSelectedState] = useState(currentLocation);

  // Sync when modal opens / location changes
  // useEffect(() => {
  //   setSelectedState(currentLocation);
  // }, [currentLocation]);

  if (!isOpen) return null;

  const handleUpdate = () => {
    //onLocationUpdate(selectedState);
     dispatch(setLocation(selectedState));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative flex flex-col w-[342px] h-fit rounded-[10px] py-6 px-4 gap-2.5 bg-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-600 transition-colors p-4"
        >
          <X className="size-5" />
        </button>

        {/* Content */}
        <div className="py-6 px-4">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="size-12 bg-[#00A8A3]/10 flex items-center justify-center w-12 h-12 rounded-lg">
              <MapPin className="size-6 text-[#00A8A3]" />
            </div>
          </div>

          {/* Title */}
          <h2 className="w-[310px] h-[22px] font-bold text-gray-900 mb-2 pr-4 text-center">
            Change location!
          </h2>

          {/* Description */}
          <p className="text-sm text-center font-interRegular text-gray-600">
            Changing state might affect on <br />
            road price of motorcycle
          </p>
          {/* State Dropdown */}
          <div className="mb-6 pt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State*
            </label>

            <div className="relative">
              <select
                value={selectedState}
   onChange={(e) => dispatch(setLocation(e.target.value))}
                className="
        w-full
        bg-transparent
        border-0 border-b border-gray-300
        pb-2 pr-8
        text-gray-900
        appearance-none
        cursor-pointer
        focus:outline-none
        focus:border-[#00A8A3]
      "
              >
                {loading ? (
                  <option value="">Loading states...</option>
                ) : (
                  states.map((state) => (
                    <option key={state.code} value={state.label}>
                      {state.label}
                    </option>
                  ))
                )}
              </select>

              {/* Arrow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="size-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Update Button */}
          <button
            onClick={handleUpdate}
            disabled={loading || !selectedState}
            className="w-full max-w-[310px] h-12 bg-[#00A8A3] text-black font-interExtraBold rounded-lg"
          >
            Update location
          </button>
        </div>
      </div>
    </div>
  );
}
