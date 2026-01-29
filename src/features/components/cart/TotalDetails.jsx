import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSelector } from "react-redux";


export function TotalDetails({ vehiclePrice, roadTax }) {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const cartItems = useSelector(state => state.cart.items);
  const selectedState = useSelector((state) => state.location.state);

  const accessoriesTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const grandTotal = vehiclePrice + roadTax + accessoriesTotal;

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full mt-2">
      <div className="bg-white relative rounded-[12px] shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[12px]"
        />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
            {/* Total Header */}
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-between w-full cursor-pointer
             hover:opacity-70 transition-opacity"
              >
                <p className="font-interBold text-[14px] text-black">Total</p>

                {/* Toggle Arrow */}
                {isExpanded ? (
                  <ChevronUp
                    className="size-[20px] text-[#05A8A3]"
                    strokeWidth={2}
                  />
                ) : (
                  <ChevronDown
                    className="size-[20px] text-[#05A8A3]"
                    strokeWidth={2}
                  />
                )}
              </button>

              <p className="css-ew64yg font-interBold leading-[normal] not-italic relative shrink-0 text-[18px] text-black">
                ₹{grandTotal.toLocaleString("en-IN")}
              </p>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="flex flex-col justify-center font-interRegular text-[10px] font-normal leading-[12px] text-[#666]">
                  <p className="mb-0">
                    The indicated insurance price covers only basic coverage;
                    additional charges apply for zero depreciation and other
                  </p>
                  <p>add-ons.</p>
                </div>
              </div>
            </div>

            {/* Expandable Details */}
            {isExpanded && (
              <>
                {/* Price Breakdown */}
                <div className="w-full border-t border-dashed border-[#e6e6e6]" />

                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  {/* Ex-showroom price */}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <div className="css-g0mm18 flex flex-col font-interRegular justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px]">
                        <p className="css-ew64yg text-[#333333] leading-[14px]">
                          Ex-showroom price
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-col font-interSemiBold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#333] text-[14px] text-right">
                      <p className="css-4hzbpn leading-[14px]">
                        ₹{vehiclePrice.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  {/* Road tax */}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <div className="css-g0mm18 flex flex-col font-interRegular justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px]">
                        <p className="css-ew64yg text-[#333333] leading-[14px]">
                          Road tax
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-col font-interSemiBold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#333] text-[14px] text-right">
                      <p className="css-4hzbpn leading-[14px]">
                        ₹{roadTax.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  {/* Accessories */}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <div className="css-g0mm18 flex flex-col font-interRegular justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px]">
                        <p className="css-ew64yg text-[#333333]leading-[14px]">
                          Accessories
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-col font-interSemiBold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#333] text-[14px] text-right">
                      <p className="css-4hzbpn leading-[14px]">
                        ₹{accessoriesTotal.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full border-t border-dashed border-[#e6e6e6]" />

                  {/* On-road price */}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <div className="css-g0mm18 flex flex-col font-interRegular justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px]">
                        <p className="css-ew64yg text-[#333333] leading-[14px]">
                          On-road price - {selectedState}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-col font-interSemiBold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#333] text-[14px] text-right">
                      <p className="css-4hzbpn leading-[14px]">
                        ₹{grandTotal.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
<div className="w-full border-t border-dashed border-[#e6e6e6]" />
                     <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <div className="css-g0mm18 flex flex-col font-interSemiBold justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px]">
                        <p className="css-ew64yg text-[#333333] leading-[14px]">
                          Booking amount
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-col font-interSemiBold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#333] text-[14px] text-right gap-1">
                      <p className="css-4hzbpn leading-[14px]">
                        ₹20,000
                      </p>
                      <p className="css-4hzbpn leading-[14px] text-[#808080] font-interRegular">
                        Non-refundable
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Monthly payment info */}
    </div>
  );
}
