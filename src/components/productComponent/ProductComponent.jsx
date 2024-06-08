/* eslint-disable react/prop-types */

import AddToCart from "./AddToCart"



function ProductComponent({src = "", price =99.99, productName ="Some Name", rating = "⭐⭐⭐⭐", id= 1, count = 1 }) {
  return (
    <>
        <div className="flex flex-col h-[27rem] justify-center gap-5 relative" >

            <AddToCart src={src} price={price} productName={productName} rating={rating} id={id} count={count} />

            <img src={src} className="w-96 h-80 " />

            <div className="flex flex-col">
                <p>{rating}</p>
                <p className="font-bold font-serif text-xl">{productName}</p>
            </div>

            <p className="font-semibold border rounded-md w-16" >{price}</p>
        </div>
    </>
  )
}

export default ProductComponent