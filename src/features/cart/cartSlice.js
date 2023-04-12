import { createSlice } from '@reduxjs/toolkit';
import cartItem from '../../cartItems';

const initialState = {
  cartItems: cartItem,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== id),
      }
    },
    increaseAmount: (state, action) => {
      const id = action.payload;
      const newCart = state.cartItems.find((item) => item.id === id);
      newCart.amount += 1;
    },
    decreaseAmount: (state, action) => {
      const id = action.payload;
      const newCart = state.cartItems.find((item) => item.id === id);
      newCart.amount -= 1;
    },
    calculateTotal: (state) => {
      state.total = state.cartItems.reduce((total, item) => {
        return (total += item.price * item.amount);
      }, 0);
      state.amount = state.cartItems.reduce((total, item) => {
        return (total += item.amount);
      }, 0);
    }
  },
});

export const { clearCart, removeItem, increaseAmount, decreaseAmount, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;