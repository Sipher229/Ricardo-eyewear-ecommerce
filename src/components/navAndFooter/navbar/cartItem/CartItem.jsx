/* eslint-disable react/prop-types */

import { useState } from "react"
import DeleteIcon from "../../../Icons/DeleteIcon"


function CartItem({imgSrc = "", price= "99.99"}) {
    const [items, setItems] = useState([])
    const [count, setCount] = useState(1)

    
  return (
    <>
        <div className="w-full h-24 flex justify-center items-center border">

            <div className="w-2/6 h-full border">
                <img src={imgSrc} alt="product image" />
            </div>
            
            <div className="w-3/6 h-full flex flex-col justify-center items-around border">
                
                <div className="flex w-full h-1/2 justify-between px-2">
                    <button className="w-1/3 h-full border" onClick={() => setCount((prev) => prev - 1)}>-</button>
                    <input type= "text" readOnly className="w-1/3 h-full border text-center" value={count}/>
                    <button className="w-1/3 h-full border" onClick={() => setCount((prev) => prev + 1)}>+</button>
                </div>
            </div>

            <div className="w-1/6 h-full flex flex-col justify-center items-center gap-2 border p-1">
                <div className="border rounded-full h-6 w-6 text-gray-500 flex justify-center items-center">
                    <DeleteIcon size="6" handleClick={() => setItems([])} />
                </div>
                <input type= "text" readOnly className="w-full h-full text-center" value={parseInt(price) *count}/>
            </div>
        </div>
    </>
  )
}

export default CartItem