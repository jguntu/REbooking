import { useState } from "react"

const categories = [
  { id: "seat", name: "Seat" },
  { id: "split", name: "Split" },
//   { id: "metal", name: "Metal" },
//   { id: "leather", name: "Leather" },
//   { id: "stepped", name: "Stepped" },
//   { id: "sport", name: "Sport" },
//   { id: "cover", name: "Cover" },
  { id: "color", name: "Color" }
]

export function CategoryTabs({ onCategoryChange }) {
  const [activeCategory, setActiveCategory] = useState("seat")

  const handleCategoryClick = categoryId => {
    setActiveCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm px-4 lg:px-24 py-4">
      <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`
              px-5 py-3.5 rounded-2xl whitespace-nowrap transition-colors
              ${
                activeCategory === category.id
                  ? "text-[#d0fd0a] font-bold"
                  : "text-[#b3b3b3] hover:text-white"
              }
            `}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}
