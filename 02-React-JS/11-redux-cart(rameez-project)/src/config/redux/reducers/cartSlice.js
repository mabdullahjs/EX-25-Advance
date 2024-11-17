import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addItem: (state , action)=>{
            const index = state.cart.findIndex(item => item.id === action.payload.id)
            if(index === -1){
                console.log('item mujood nahi ha.');
                action.payload.quantity = 1
                state.cart.push(action.payload)
            }else{
                console.log('item mujood ha.');
                state.cart[index].quantity += 1
                
            }
        },
        removeItem: (state , action)=>{
            const index = state.cart.findIndex(item => item.id === action.payload.id);

            state.cart.splice(index , 1)
        },
        addQuantity: (state , action) =>{
            const index = state.cart.findIndex(item => item.id === action.payload.id);

            state.cart[index].quantity += 1
        },
        lessQuantity: (state , action) =>{
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            if(state.cart[index].quantity === 0){
                state.cart.splice(index , 1)
                return
            }
            state.cart[index].quantity -= 1
        },
    }
})

export const { addItem , removeItem, lessQuantity, addQuantity  } = cartSlice.actions
export default cartSlice.reducer