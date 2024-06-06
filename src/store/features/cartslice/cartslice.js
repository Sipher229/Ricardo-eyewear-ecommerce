import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    totalItems: 0, 
    totalPrice: 99.99,
    items: [
        {
            id: -1,
            productName: "product name",
            imageSrc: "",
            rating: "⭐⭐⭐⭐⭐",
            price: 99.99
        }
    ],

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart: (state, action) => {
            state.items = [...state.items, action.payload]
        }
    }
})

export default cartSlice.reducer 