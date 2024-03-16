import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id;
      let check = -1;
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i].id === id) {
          check = i;
          break;
        }
      }
      if (check !== -1) {
        state.cartItems[check].quantity += 1;
      } else {
        let newObj = {
          id: id,
          quantity: 1,
          price: action.payload.price,
          title: action.payload.title,
          desc: action.payload.desc,
          image: action.payload.img
        };
        state.cartItems.push(newObj);
      }
    },
    Decrease : (state , action)=>{
      const id = action.payload;
      let check = -1;
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i].id === id) {
          check = i;
          break;
        }
      }
      if(state.cartItems[check].quantity===1){
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
      else{
        state.cartItems[check].quantity-=1;
      }

    },
    Increase : (state,action)=>{
      const id = action.payload;
      let check = -1;
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i].id === id) {
          check = i;
          break;
        }
      }
      state.cartItems[check].quantity+=1;
    }
  }
});

export const { addToCart,Decrease,Increase } = cartSlice.actions;
export default cartSlice.reducer;
