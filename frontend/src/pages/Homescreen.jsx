// import products from "../products"
import Product from "../components/Product"
import { useGetProductsQuery } from "../slices/productApiSlice"
// import { useEffect, useState } from "react"
// import axios from "axios"

const Homescreen = () => {

  const { data:product, error, isLoading } = useGetProductsQuery();

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>

//   const [product, setProduct] = useState([]);

// useEffect (()=>{

//   const fetchProduct = async () =>{

//      const {data} = await axios.get('http://localhost:5000/api/product');
     

//      setProduct(data);
// }

//   fetchProduct();

// },[])

  return (
    <>
      <h1 className='text-3xl my-2 text-center'>All Products</h1>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          product.map((product)=>(

            <Product key={product._id} product={product} />
          ))
        }
      </div>
    </>
  )
}

export default Homescreen