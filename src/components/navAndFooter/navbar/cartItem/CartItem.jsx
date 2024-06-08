/* eslint-disable react/prop-types */


import DeleteIcon from "../../../Icons/DeleteIcon"
import { useDispatch } from "react-redux"
import { decrementItem, incrementItem } from "../../../../store/features/cartslice/cartslice"


function CartItem({imgSrc = "", price= 99.99, countNum = 1, id = 1}) {

    const dispatch = useDispatch()

    const handleIncrement =  () => {
        // setCount((prev) => prev + 1)
        dispatch(incrementItem({id: id}))
        console.log(countNum)
    }

    const handleDecrement = () => {
        // setCount((prev) => prev - 1)
        dispatch(decrementItem({id: id}))
        console.log(countNum)
    }



    
  return (
    <>
        <div className="w-full h-24 flex justify-center items-center border">

            <div className="w-2/6 h-full border p-2">
                <img src={imgSrc} alt="product image" className="w-full h-full" />
            </div>
            
            <div className="w-3/6 h-full flex flex-col justify-center items-around border">
                
                <div className="flex w-full h-1/2 justify-between px-2">
                    <button className="w-1/3 h-full border" onClick={handleDecrement}>-</button>
                    <input type= "text" readOnly className="w-1/3 h-full border text-center" value={countNum}/>
                    <button className="w-1/3 h-full border" onClick={handleIncrement}>+</button>
                </div>
            </div>

            <div className="w-1/6 h-full flex flex-col justify-center items-center gap-2 border p-1">
                <div className="border rounded-full h-6 w-6 text-gray-500 flex justify-center items-center">
                    <DeleteIcon size="6" handleClick={handleDecrement} />
                </div>
                <input type= "text" readOnly className="w-full h-full text-center" value={price * countNum}/>
            </div>
        </div>
    </>
  )
}

export default CartItem