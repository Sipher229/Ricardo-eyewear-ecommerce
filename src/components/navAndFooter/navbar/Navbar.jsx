/* eslint-disable react/prop-types */

import {NavLink} from "react-router-dom"
import "./Navbar.css"
import CartIcon from "../../Icons/CartIcon"
import { useEffect } from "react"
import CartItem from "./cartItem/CartItem"
import CartContainer from "./CartContainer"

function Navbar({showCart = false, handleShowCart}) {
  useEffect(() =>{
    if(showCart){
        document.body.style.overflow = "hidden"
    } else{ 
        document.body.style.overflow = "auto"
    }
  }, [showCart])
  return (
    <>
        <header className="z-10 w-full h-36 border-b pb-6">
            <nav className="w-full h-full flex items-center justify-around">
                <div id = "navlinks" className="w-2/6 h-full flex justify-center flex-wrap gap-4">
                  <NavLink to={"/"} className={({isActive}) => isActive ? "text-black" : "text-gray-500"}><div id= "link-wrapper" className={`flex flex-col h-1/2 justify-start gap-2 `}><span className="roboto-regular text-xl pt-3">Home</span> <div id="bottom-border"></div></div></NavLink>
                  <NavLink to={"/men"} className={({isActive}) => isActive ? "text-black" : "text-gray-500"}><div id= "link-wrapper" className={`flex flex-col h-1/2 justify-start gap-2 `}><span className="roboto-regular text-xl pt-3">Men</span> <div id="bottom-border"></div></div></NavLink>
                  <NavLink to={"/women"} className={({isActive}) => isActive ? "text-black" : "text-gray-500"}><div id= "link-wrapper" className={`flex flex-col h-1/2 justify-start gap-2 `}><span className="roboto-regular text-xl pt-3">Women</span> <div id="bottom-border"></div></div></NavLink>
                  <NavLink to={"/about"} className={({isActive}) => isActive ? "text-black" : "text-gray-500"}><div id= "link-wrapper" className={`flex flex-col h-1/2 justify-start gap-2 `}><span className="roboto-regular text-xl pt-3">About Us</span> <div id="bottom-border"></div></div></NavLink>
                  <NavLink to={"/"} className={({isActive}) => isActive ? "text-black" : "text-gray-500"}><div id= "link-wrapper" className={`flex flex-col h-1/2 justify-start gap-2 `}><span className="roboto-regular text-xl pt-3">Contact</span> <div id="bottom-border"></div></div></NavLink>
                </div>
                <div id = "logo" className="w-1/5 flex flex-col justify-end items-center h-full gap-2">
                    <h1 className="text-3xl font-serif font-black">Ricardo</h1>
                    <p className="roboto-light text-gray-500">Eye Wear</p>
                </div>
                <div id="far-right" className="w-2/5 h-full flex justify-center items-end gap-8">
                    <p id="cartAmount">$0.00</p>
                    <CartIcon handleClick={handleShowCart} />
                    <button href="#" className="roboto-regular text-xl">Login</button>
                    <button href="#" className="roboto-regular text-xl">Register</button>

                </div>
            </nav>
            <CartContainer showCart={showCart} handleShowCart={handleShowCart} />
        </header>
    </>
  )
}

export default Navbar