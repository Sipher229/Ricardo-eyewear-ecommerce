import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cartslice/cartslice'

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})