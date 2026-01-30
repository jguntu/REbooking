import { useState } from "react";
import { Plus } from "lucide-react";
import { ProductViewer } from "../features/components/product/ProductViewer";
import { CategoryTabs } from "../features/components/product/CategoryTabs";
import { ProductOptions } from "../features/components/product/ProductOptions";
import { productData } from "../data/productData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectItemByCategory } from "../store/cartSlice";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("seat");
  const dispatch = useDispatch();

  const selectedItem = useSelector((state) =>
    selectItemByCategory(state, selectedCategory),
  );

  return (
    <div className="min-h-screen bg-black">
      {/* <Header /> */}

      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Main Content Area */}
        <div className="flex-1">
          <ProductViewer />
          {/* <CategoryTabs onCategoryChange={setSelectedCategory} /> */}
        </div>

        {/* Right Sidebar - Product Options */}
        {/* <aside className="w-[180px] h-[calc(100vh-80px)] overflow-y-auto sticky top-20">
          <ProductOptions category={selectedCategory} />
        </aside> */}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <ProductViewer />

        {/* Mobile Product Options - Horizontal Scroll */}
        <div className="hidden lg:block bg-[#0c0c0c] py-6 overflow-x-auto">
          <div className="flex gap-4 px-4">
            {productData[selectedCategory]?.map((option) => {
              const isSelected = selectedItem?.id === option.id;

              return (
                <div
                  key={option.id}
                  className={`
        flex-shrink-0 w-[154px] h-[208px] rounded-2xl relative transition-all
        ${isSelected ? "bg-[#211f23] ring-2 ring-[#d0fd0a]" : "bg-transparent"}
      `}
                >
                  <div className="h-full flex flex-col items-center justify-center p-4">
                    <div className="h-[75px] mb-4 flex items-center justify-center">
                      <img
                        src={option.image}
                        alt={option.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="text-center">
                      <p className="text-[#ccc] text-base mb-1">
                        {option.name}
                      </p>
                      <p className="text-white text-lg font-bold">
                        {option.price}
                      </p>
                    </div>

                    {/* Add / Selected Button */}
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: option.id,
                            name: option.name,
                            price: option.price,
                            image: option.image,
                            category: selectedCategory,
                          }),
                        )
                      }
                      className={`
            absolute top-3 right-3 w-8 h-8 rounded-full
            flex items-center justify-center transition-all
            ${isSelected ? "bg-[#d0fd0a]" : "bg-[#00a8a3]"}
          `}
                    >
                      <Plus className="w-5 h-5 text-black" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <CategoryTabs onCategoryChange={setSelectedCategory} /> */}
      </div>
    </div>
  );
}
