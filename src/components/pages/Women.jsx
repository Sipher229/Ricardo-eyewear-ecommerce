import { productArray } from "../../assets/eyewear_e-commerce/products"
import ProductComponent from "../productComponent/ProductComponent"


function Women() {
  return (
    <>
      <div>

        <div className="h-64 w-full bg-white">

        </div>

        <div className="h-80 w-full bg-white p-11">
          <h1 className="text-8xl font-serif font-black">Women</h1>
          
        </div>


        <div className="min-h-[50rem] w-full flex flex-col">
          <div className="h-8 w-full flex justify-between items-center border border-x-0 px-11">
            <p className="text-gray-800 text-xl">Showing all results</p>
            <select id="sort" className="outline-gray-300 h-6">
              <option> Default sorting</option>
              <option> Sort by popularity</option>
              <option> Sort by average rating</option>
              <option> price: low to high</option>
              <option> price: high to low</option>
            </select>
          </div>
          <div id="allProducts" className="h-5/6 w-full p-11 flex flex-wrap jutify-between gap-5 ">
            {
              productArray.map((prod) => {
                return <ProductComponent src={prod.imageSrc} key={prod.id} price = {prod.price}  rating={prod.rating} productName={prod.productName} id={prod.id} count={prod.count} /> 
              })
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Women