import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { productData } from "../../../data/productData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectItemByCategory } from "../../../store/cartSlice";

export function ProductOptions({ category }) {
  const dispatch = useDispatch();
  const [hoveredId, setHoveredId] = useState(null);

  const selectedItem = useSelector((state) =>
    selectItemByCategory(state, category)
  );

  const options = productData[category] || productData.seat;

  const handleAdd = (option) => {
    dispatch(
      addToCart({
        id: option.id,
        name: option.name,
        price: option.price,
        image: option.image,
        category,
      })
    );
  };

  return (
    <div className="bg-[#0c0c0c] px-4 py-3">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide md:flex-col md:overflow-visible">
        {options.map((option) => {
          const isSelected = selectedItem?.id === option.id;
          const isHovered = hoveredId === option.id;

          return (
            <div
              key={option.id}
              onMouseEnter={() => setHoveredId(option.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`
                relative shrink-0 rounded-xl
                p-2 md:p-4
                w-[120px] h-[160px]
                md:w-full md:h-[210px]
                transition-all
                ${isHovered || isSelected? "bg-[#151317]" : ""}
              `}
            >
              {/* Add / Remove Button */}
              {(isHovered || isSelected) && (
                <button
                  onClick={() => handleAdd(option)}
                  className={`
                    absolute top-1.5 right-1.5
                    md:top-3 md:right-3
                    w-6 h-6 md:w-8 md:h-8
                    rounded-full flex items-center justify-center
                    ${isSelected ? "bg-gray-500" : "bg-[#00a8a3]"}
                  `}
                >
                  {isSelected ? (
                    <Minus className="w-3.5 h-3.5 md:w-5 md:h-5 text-black" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 md:w-5 md:h-5 text-black" />
                  )}
                </button>
              )}

              {/* Content */}
              <div className="flex flex-col items-center justify-center h-full gap-1.5 md:gap-3">
                <img
                  src={option.image}
                  alt={option.name}
                  className="
                    w-[80px] h-[50px]
                    md:w-[120px] md:h-[80px]
                    object-contain
                  "
                />

                <div className="text-center leading-tight">
                  <p className="text-[#cfcfcf] text-[11px] md:text-sm">
                    {option.name}
                  </p>
                  <p className="text-white text-xs md:text-base font-bold">
                    {option.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
