import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = JSON.parse(localStorage.getItem('cartItem')) || [];

const cartSlice = createSlice({
      name : 'cart',
      initialState: JSON.parse(localStorage.getItem('cartItem')) || [],
      reducers:{
            addItem : (state,action)=>{
                  state.push(action.payload)
                  
                  toast.success('Product Added Successfully !!')
                  localStorage.setItem('cartItem',JSON.stringify(state))
            },
            
            removeItem:(state,action)=>{
                  if(confirm('Are You Sure You Want to delete'))
                  {
                        const updateCart =  state.filter((item)=> (item.id != action.payload));

                        toast.error("Deleted Product");

                        localStorage.setItem('cartItem', JSON.stringify(updateCart)); // update storage

                        return updateCart;
                        
                  }
                  return state
                 
                  
            }
            
      }
})

export const {addItem,removeItem} = cartSlice.actions
export default cartSlice.reducer