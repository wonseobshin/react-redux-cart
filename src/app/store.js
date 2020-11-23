// src/app/store.js

import { configureStore } from '@reduxjs/toolkit'
//import rootReducer from '../features/rootReducer'
//instead we can just use cartReducer from feature/cart and not have a separate file.
import cartReducer from '../features/cart/cartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default store