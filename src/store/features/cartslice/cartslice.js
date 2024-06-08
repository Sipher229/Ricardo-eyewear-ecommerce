import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    totalItems: 0, 
    totalPrice: 0,
    items: [
        // {
        //     id: -1,
        //     productName: "product name",
        //     count: 1,
        //     imageSrc: "",
        //     rating: "⭐⭐⭐⭐⭐",
        //     price: 99.99
        // }
    ],

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart: (state, action) => {
            for (let i = 0; i < state.items.length; i++) {
                if(state.items[i].id === action.payload.id){
                    state.items[i].count = state.items[i].count + 1
                    state.totalItems = state.totalItems + 1
                    state.totalPrice = state.totalPrice + state.items[i].price

                    return
                }
                
            }

            state.items = [...state.items, action.payload]

            state.totalItems = state.totalItems + 1
            state.totalPrice = state.totalPrice + action.payload.price

            
        },

        incrementItem: (state, action) => {
            state.items.forEach((item) => {
                if(item.id == action.payload.id){
                    item.count = item.count + 1
                    state.totalPrice = state.totalPrice + item.price
                    state.totalItems = state.totalItems + 1
                }
            })
        },

        decrementItem: (state, action) => {
            let out = []
            let removed = false

            for (let i = 0; i < state.items.length; i++) {
                
                if(state.items[i].id == action.payload.id){
                    let count = state.items[i].count
                    if (count < 2) {
                        removed = true
                        out = state.items.filter((thisItem) => {
                            return thisItem.id !== state.items[i].id
                        })
                        
                        
                    }
                    
                    
                    state.items[i].count = state.items[i].count - 1
                    
                    if(state.totalItems > 0) {
                        state.totalItems = state.totalItems - 1
                    }
                    if(state.totalPrice > 0) {
                        state.totalPrice = state.totalPrice - state.items[i].price
                    }

                    
                   
                    break

                }

                
            }
            if (removed){
                state.items = out
            }


        },

    }
})

export const {addTocart, incrementItem, decrementItem} = cartSlice.actions

export default cartSlice.reducer 