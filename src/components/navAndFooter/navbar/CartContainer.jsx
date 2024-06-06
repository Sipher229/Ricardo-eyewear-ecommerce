/* eslint-disable react/prop-types */

import CartItem from "./cartItem/CartItem"

function CartContainer({showCart= false, handleShowCart}) {
  return (
    <>
        <div id="cartContainer" className={` bg-white border-2 ${showCart? '' : 'hidden'}`}>

            <div className="h-9 w-full flex justify-between border-b px-3">
                <p className="font-semibold text-xl">Shopping Cart</p>

                <button onClick={handleShowCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>   

            </div>
            <div className="flex justify-center items-center w-full min-h-[30rem] px-3">
                {/* <h1>No items in the Shopping cart</h1> */}
                <CartItem />

            </div>
            <div className="flex flex-col justify-center gap-3 w-full h-1/6 px-3">

                <button className="border border-black w-full h-10 hover:bg-black hover:text-white">View Cart</button>                
                <button className="border border-black w-full h-10 hover:bg-black hover:text-white">Check Out</button>

            </div>
        </div>
    </>
  )
}

export default CartContainer