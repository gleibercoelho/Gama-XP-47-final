import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === newItem.id);
      if (itemIndex === -1) {
        state.items.push(newItem);
      } else {
        state.items[itemIndex].quantity += newItem.quantity;
      }
      state.totalPrice += newItem.quantity;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        const itemQuantity = state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
        state.totalPrice -= itemQuantity;
      }
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
