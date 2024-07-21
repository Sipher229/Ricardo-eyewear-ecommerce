import { useState } from 'react'
import './AddProduts.css'
import axios from 'axios'


function AddProducts() {

    const [file, setFile] = useState({file: undefined})
    const [pDetails, setpDetails] = useState({
        productName: '',
        manufacturer: '',
        color: '',
        price: '',
        quantity: '',
        currency: '',
        gender: '',
        type: '',
        category: '',
        size: '',
    })
    const [loading, setLoading] = useState(false)

    const handleDetails = (event) => {
        const {name, value} = event.target

        switch (name) {
            case 'productName':
                setpDetails((prev) => {
                    return {...prev, productName: value}})
                break;
            case 'manufacturer':
                setpDetails((prev) => {
                    return {...prev, manufacturer: value}
                })
                break;
            case 'color':
                setpDetails((prev) => {
                    return {...prev, color: value}
                })
                break;
            case 'price':
                setpDetails((prev) => {
                    return {...prev, price: value}
                })
                break;
            case 'quantity':
                setpDetails((prev) => {
                    return {...prev, quantity: value}
                })
                break;
            case 'currency':
                setpDetails((prev) => {
                    return {...prev, currency: value}
                })
                break;
            case 'size':
                setpDetails((prev) => {
                    return {...prev, size: value}
                })
                break;
            case 'type':
                setpDetails((prev) => {
                    return {...prev, type: value}
                })
                break;
            case 'category':
                setpDetails((prev) => {
                    return {...prev, category: value}
                })
                break;
            case 'gender':
                setpDetails((prev) => {
                    return {...prev, gender: value}
                })
                break;

            default:
                break;
        }
    }

    const handleFile = (event) => {
        const {files} = event.target
        const image = files[0]
        console.log(image)
        setFile(() => {
            return {file: image}
        })
        
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        setLoading(true)
        const {
            productName, 
            size, 
            currency, 
            gender, 
            color, 
            price, 
            quantity, 
            category, 
            type, 
            manufacturer} = pDetails
        
        const headers = new Headers()
        headers.append('Content-Type', 'multipart/form-data')

        const formData = new FormData()

        {
            formData.append('productName', productName)
            formData.append('quantity', quantity)
            formData.append('size', size)
            formData.append('gender', gender)
            formData.append('category', category)
            formData.append('type', type)
            formData.append('manufacturer', manufacturer)
            formData.append('currency', currency)
            formData.append('color', color)
            formData.append('price', parseInt(price))
            formData.append('image', file.file)
        }

        axios.post('http://localhost:3000/products/addproducts', formData, {withCredentials: true, headers: {'Content-Type': 'multipart/form-data'}}).then((resp)=> {
            console.log(resp.data)
            setLoading(false)
        }).catch(error => {
            console.log(error.message)
        })

        

    }

  return (
    <> 
        <div className='w-full h-[7.7rem]'>

        </div>
        <div className='bg-gray-50 w-full h-[40rem] flex flex-col gap-5 justify-center items-center my-5'>

            <h1 className="text-4xl font-bold text-center w-full">
                Add products
            </h1>
            <form className='h-5/6 w-full flex flex-col justify-center items-center gap-4'>
                <div className='bg-white shadow-lg rounded-md w-3/5 h-4/5 flex flex-col p-10'>
                    <div id='textInputs' className='w-full min-h-5 flex flex-wrap gap-3'>
                        <div id= 'labelInputGroup'>
                            <label htmlFor="productName" required>Product Name</label>
                            <input className='text-inputs' name='productName' value={pDetails.productName}  type='text' id="productName" onChange={handleDetails}/>
                        </div>

                        <div id= 'labelInputGroup'>  
                            <label htmlFor="manufacturer" required>Manufacturer</label>
                            <input className='text-inputs' name='manufacturer' value={pDetails.manufacturer} onChange={handleDetails}  type="text" id="manufacturer" />
                        </div>

                        <div id= 'labelInputGroup'>
                            <label htmlFor="color" required>Product Color</label>
                            <input className='text-inputs' name='color' value={pDetails.color} onChange={handleDetails}  type="text" id="color" />
                        </div>
                    </div>

            

                    <div id="numberRelated">
                        <div id='labelInputGroup'>
                            <label htmlFor="price">Price</label>
                            <input name='price' value={pDetails.price} onChange={handleDetails} className='w-24 h-8 rounded-lg border-2 border-gray-200 outline-none px-1' type="number" id="price" />
                        </div>

                        <div id='labelInputGroup'>    
                            <label htmlFor="quantity">Amount/Qty</label>
                            <input name='quantity' value={pDetails.quantity} onChange={handleDetails} className='w-24 h-8 rounded-lg border-2 border-gray-200 outline-none px-1' type="number" id="quantity" />
                        </div>
                        <div id='labelInputGroup'>    
                            <label htmlFor="size">Product Size</label>
                            <input name='size' value={pDetails.size} onChange={handleDetails} className='w-24 h-8 rounded-lg border-2 border-gray-200 outline-none px-1' type="text" id="size" />
                        </div>
                    </div>

                    <div id="selectInputs">
                        <select name='currency' id="currencies" value={pDetails.currency} onChange={handleDetails}>
                            <option>EUR</option>
                            <option>USD</option>
                        </select>

                        <select name='gender' id="gender" onChange={handleDetails} value={pDetails.gender}>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Either</option>  
                        </select>

                        <select name='type' id="type" onChange={handleDetails} value={pDetails.type}>
                            <option>Sun glasses</option>
                            <option>Normal glasses</option>
                        </select>

                        <select name='category' id="category" onChange={handleDetails} value={pDetails.category}>
                            <option>Category 1</option>
                            <option>Category 2</option>
                            <option>Category 3</option>
                        </select>
                    </div>

                    <div id='labelInputGroup'>
                        <label className=' my-4' htmlFor="image">Upload Product Image</label>
                        <input name='image' className='w-64' type="file" id="image" onChange={handleFile}/>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                <button type='submit' className="border border-black w-24 h-10 hover:bg-black hover:text-white group flex justify-center items-center" onClick={handleSubmit}> 
                {loading? 
                    <div className='loader group-hover:bg-white'></div>
                    :
                    'Submit'
                }
                </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default AddProducts


