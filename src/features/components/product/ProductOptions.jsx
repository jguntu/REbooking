import { Plus } from "lucide-react";
import { productData } from "../../../data/productData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectItemByCategory } from "../../../store/cartSlice";

export function ProductOptions({ category }) {
  const dispatch = useDispatch();

  const selectedItem = useSelector((state) =>
    selectItemByCategory(state, category),
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
      }),
    );
  };

  return (
    <div className="bg-[#0c0c0c] px-4 py-3">
      {/* MOBILE: very small horizontal cards | WEB: unchanged */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide md:flex-col md:overflow-visible">
        {options.map((option) => {
          const isSelected = selectedItem?.id === option.id;

          return (
            <div
              key={option.id}
              className={`
                relative shrink-0 rounded-xl
                p-2 md:p-4
                w-[120px] h-[160px]
                md:w-full md:h-[210px]
                transition-all
                ${
                  isSelected
                    ? "bg-[#211f23] ring-2 ring-[#d0fd0a]"
                    : "hover:bg-[#151317]"
                }
              `}
            >
              {/* Add Button */}
              <button
                onClick={() => handleAdd(option)}
                className={`
                  absolute top-1.5 right-1.5
                  md:top-3 md:right-3
                  w-6 h-6 md:w-8 md:h-8
                  rounded-full flex items-center justify-center
                  ${isSelected ? "bg-[#d0fd0a]" : "bg-[#00a8a3]"}
                `}
              >
                <Plus className="w-3.5 h-3.5 md:w-5 md:h-5 text-black" />
              </button>

              {/* Content */}
              <div className="flex flex-col items-center justify-center h-full gap-1.5 md:gap-3">
                {/* Image */}
                <img
                  src={option.image}
                  alt={option.name}
                  className="
                    w-[80px] h-[50px]
                    md:w-[120px] md:h-[80px]
                    object-contain
                  "
                />

                {/* Text */}
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
