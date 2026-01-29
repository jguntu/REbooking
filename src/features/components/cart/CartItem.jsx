import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../store/cartSlice";

export function CartItem({ item}) {
   const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeFromCart(item.id))
  }
  return (
    <div className="bg-white relative rounded-[12px] w-full">
      <div
        aria-hidden="true"
        className="absolute inset-0 border border-[#e6e6e6] rounded-[12px] pointer-events-none"
      />

      <div className="flex items-center justify-between p-[12px] w-full">
        {/* LEFT: Image + Name + Price */}
        <div className="flex items-center gap-[12px]">
          {/* Image */}
          <div className="shrink-0">
            <div className="h-[46px] w-[72px] relative overflow-hidden">
              <img
                //src={imgImage45284}
                src={item.image}
                alt={item.name}
                //className="absolute h-[193%] left-[-30%] top-[-60%] w-[158%] max-w-none"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-[4px]">
            <p className="text-sm font-body font-interExtraBold text-black leading-none align-middle">
              {item.name}
            </p>

            <p className="text-[14px] font-interMedium text-[#333]">
              ₹{item.price.toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        {/* RIGHT: Delete icon */}
        <button
          onClick={handleDelete}
          className="shrink-0 size-[20px] flex items-center justify-center
                     cursor-pointer hover:opacity-70 transition-opacity"
          aria-label={`Delete ${item.name}`}
        >
          <Trash2 className="size-[18px] text-[#D64545]" strokeWidth={1.6} />
        </button>
      </div>
    </div>
  );
}
