/* eslint-disable react/prop-types */
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTocart } from "../../store/features/cartslice/cartslice"


function AddToCart({src = "", price =99.99, productName ="Some Name", rating = "⭐⭐⭐⭐", id= 1, count = 1}) {
  const [added, setAdded] = useState(false)
  const dispatch = useDispatch()


  const handleClick =  () => {
      setAdded(true)
      dispatch(addTocart({
        id: id,
        productName: productName,
        count: count,
        imageSrc: src,
        rating: rating,
        price: price
      }))
      setTimeout(() => {
        setAdded(false)
      }, 400);
      
  }
  return (
    <>
        <div id="addToCart" className=" group absolute top-1 right-2 w-9 h-9 bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer active:scale-90" onClick={handleClick}>
            <p className="absolute top-2 right-12 opacity-0 group-hover:opacity-100 group-hover:ease-in-out group-hover:duration-100 text-white bg-black w-24 text-center rounded-md "> Add to cart</p>
            {
              !added ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg> 
              
              :

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>




            }


        </div>
    </>
  )
}

export default AddToCart