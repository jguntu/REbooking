import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image, category } = action.payload;

      // 🔐 Normalize price once
      const numericPrice =
        typeof price === "string"
          ? Number(price.replace(/[₹,]/g, ""))
          : Number(price);

      const existingIndex = state.items.findIndex(
        (item) => item.category === category
      );

      const newItem = {
        id,
        name,
        price: numericPrice, // ✅ always number
        image,
        category,
      };

      if (existingIndex !== -1) {
        state.items[existingIndex] = newItem;
      } else {
        state.items.push(newItem);
        state.totalCount += 1;
      }
    },

    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        state.items.splice(index, 1);
        state.totalCount -= 1;
      }
    },

    removeByCategory: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.category === action.payload
      );

      if (index !== -1) {
        state.items.splice(index, 1);
        state.totalCount -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  removeByCategory,
} = cartSlice.actions;

export default cartSlice.reducer;


// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.totalCount;

export const selectItemByCategory = (state, category) =>
  state.cart.items.find((item) => item.category === category);

export const selectTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);
