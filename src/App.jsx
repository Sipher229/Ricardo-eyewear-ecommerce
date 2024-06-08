import { useState } from 'react'
import Navbar from './components/navAndFooter/navbar/Navbar'
import Footer from './components/navAndFooter/footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [showCart, setShowCart] = useState(false)
  const handleShowCart = () => {
      setShowCart((prev) => !prev)
  }

  return (
    <>
      <div id='appWrapper' className='w-full h-full'>
          <Navbar showCart = {showCart} handleShowCart={handleShowCart}/>
          <div id='mainContainer' className={`flex flex-col ${showCart ? 'brightness-50' : ''}`} onClick = {() => setShowCart(false)}>
              <Outlet />
          </div>
        <Footer />
      </div>
      
    </>
  )
}

export default App
