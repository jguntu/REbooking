import { Plus } from "lucide-react";
import { productData } from "../../../data/productData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectItemByCategory } from "../../../store/cartSlice";

export function ProductOptions({ category }) {
  const dispatch = useDispatch();

  // Get currently selected item for this category
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
    <div className="bg-[#0c0c0c] py-8 px-4">
      <div className="space-y-0">
        {options.map((option) => (
          <div
            key={option.id}
            className={`
    relative rounded-2xl h-[208px] transition-colors
    ${
      selectedItem?.id === option.id
        ? "bg-[#211f23] ring-2 ring-[#d0fd0a]"
        : "bg-transparent hover:bg-[#211f23]"
    }
  `}
          >
            <div className="relative h-full flex items-center justify-center">
              {/* Product Image */}
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="h-[75px] flex items-center justify-center">
                  <img
                    src={option.image}
                    alt={option.name}
                    className="max-h-full max-w-[110px] object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-[#ccc] text-lg">{option.name}</p>
                  <p className="text-white text-xl font-bold">{option.price}</p>
                </div>
              </div>

              <button
                onClick={() => handleAdd(option)}
                className={`
    absolute top-3 right-3 w-8 h-8 rounded-full
    flex items-center justify-center transition-all
    ${
      selectedItem?.id === option.id
        ? "bg-[#d0fd0a]"
        : "bg-[#00a8a3] hover:bg-[#00a8a3]/90"
    }
  `}
              >
                <Plus className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
