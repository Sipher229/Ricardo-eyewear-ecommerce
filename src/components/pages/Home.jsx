import eyeglasses_person from "../../assets/eyewear_e-commerce/eyeglasses_person3.jpg"
import glasses_many from "../../assets/eyewear_e-commerce/glass_many.jpg"
import eyeglassesPerson from "../../assets/eyewear_e-commerce/eyeglasses_person2.jpg"
import featuredGlasses from "../../assets/eyewear_e-commerce/glasses-1.png"
import  { productArray } from "../../assets/eyewear_e-commerce/products.js"

import "./Home.css"
import ProductComponent from "../productComponent/ProductComponent"

function Home() {
  return (
    <main className="w-full h-full">

      <div id="homeHero" className="w-full h-[40rem] flex flex-col justify-center p-11 gap-7">

        <h1 className="text-6xl font-serif font-black w-96 leading-relaxed">
        Original Sunglasses
        </h1>

        <p className="roboto-light">
          Some lorem Ipsum text. And Some more giberrish and more <br />
          and more lorem Ipsum
        </p>

        <button className="border border-black w-24 h-10 hover:bg-black hover:text-white">Shop Now</button>

      </div>
      <div id="fewWords"  className="h-[40rem] w-full flex justify-center items center p-11 gap-8">
        <div className=" w-1/4 h-full flex flex-col justify-center gap-7">

          <small className=" font-semibold">Some text</small>

          <h1 className="font-serif text-5xl font-black leading-relaxed">A Few Words About Us</h1>

          <p className="roboto-light"> los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, <br />
           como por ejemplo Aldus PageMaker.</p>

           <button className="border border-black w-24 h-10 hover:bg-black hover:text-white" >Read More</button>
        </div>

        <img src = {eyeglasses_person}  className="object-cover w-1/3 h-full" />

        <img src = {glasses_many}  className="object-cover w-1/3 h-full" />
      </div>


      <div id="beDifferent" className="w-full h-[40rem] p-11 flex flex-col justify-center gap-4">

        <small className="font-semibold">Add Your Heading</small>

        <h1 className="text-6xl font-serif font-black leading-normal">
        Be Different <br /> in your own <br /> way !
        </h1>

        <p className="roboto-light">
        Neque porro quisquam  est qui dolorem ipsum quia dolor sit amet, <br />Neque porro quisquam
        </p>

        <button className="border border-black w-24 h-10 hover:bg-black hover:text-white">Shop Now</button>

      </div>


      <div id="featuredProduct" className="w-full h-[40rem] flex justify-start p-11 gap-20">

        <img src={eyeglassesPerson} className="h-full w-1/2 object-cover" />


        <div className="w-1/3 h-full flex flex-col justify-center gap-8">

          <div className="h-72 flex flex-col gap-5 ">
            <img src={featuredGlasses} className="h-64 w-80 object-cover" />
            <p className="font-semibold border rounded-md w-16">$130.99</p>
          </div>

          <h2 className="font-bold text-2xl">Glasses-v#004</h2>

          <p className="roboto-light">Neque porro quisquam  est qui dolorem ipsum quia dolor sit amet Neque porro</p>

          <button className="border border-black w-24 h-10 hover:bg-black hover:text-white">Add to Cart</button>

        </div>

      </div>


      <div id="reviews" className=" w-full h-[40rem]  flex flex-col items-center gap-10">

        <div className="flex flex-col items-center w-full">
        <small className="roboto-medium  ">{"Clients'"} reviews</small>
        <h1 className="font-black font-serif text-6xl my-3">Testimonials</h1>
        </div>
  
        <p className="roboto-medium leading-loose text-xl text-center">
        ⭐⭐⭐⭐⭐<br />
        Eos corporis sunt in minima aliquid est  neque recusandae <br /> sit quod ducimus aut <br /> 
        velit rerum est omnis incidunt et nemo facilis. Ut porro vero cum quod quod  <br /> 
        est voluptatem aliquid et deserunt quaerat <br /> ad debitis blanditiis ex autem  <br /> 
        consequuntur hic amet neque. 
        </p>

        <p className="roboto-medium text-gray-500">Ricardo Banks</p>

        <button className="border border-black w-24 h-10 hover:bg-black hover:text-white">Read More</button>

      </div>


      <div id="trending" className="flex flex-col justify-center h-[40rem] w-full gap-4">

      <div className="flex flex-col items-center w-full">
        <small className="roboto-medium  "> Some Heading</small>
        <h1 className="font-black font-serif text-6xl my-3">Trending Now</h1>
      
      </div>

      <div className="flex justify-center flex-wrap w-full gap-4">
        {
          productArray.slice(4).map((item) => {
            return <ProductComponent key= {item.id} src={item.imageSrc} price={item.price} count={item.count} id={item.id} rating={item.rating} productName={item.productName} />
          })
        }

      </div>
      </div>


    </main>
  )
}

export default Home