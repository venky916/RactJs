import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const  store = configureStore({
    reducer :{
        cart : cartSlice,
    }
});

export default store;










/**
 * creted store 
 *  -configureStore()-RTK
 * 
 * Provider my store to app
 *  -<Provider store ={store} /> ->import from rect-redux
 * 
 * Slice 
 *  - RTK  createSlice({
 *          name : "",
 *          initialState: 
 *          reducers : {
 *              addItem : (state,action)=>{state=action.paylod}}
 *              })
 *              
 *         export const {addItem,removeItem} = cartSlice.actions;
 *         export default reducer
 *      
 * put that slice into Store
 *  -{
 *     reducer :{
 *          cart : cartSlice
 *           }
 *  }
 *  
 */