import { Link, useParams } from "react-router-dom";
// import products from "../products";
// import { useEffect, useState } from "react";
import Rating from "../components/Rating";
import { useGetAllProductsQuery } from "../slices/productApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "../slices/cartSlice";
// import axios from "axios";

const ProductDetails = () => {
  const { id:productId } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const addToCartHandler = () =>{

    dispatch(addToCart({...productData, qty}))
  }

  const { data:productData, error, isLoading} = useGetAllProductsQuery(productId);

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Error:{error.message}</p>

//   const [productData, setProductData] = useState({});

  
  
//   useEffect(() => {

//     const fetchProduct = async () =>{

//       const {data} = await axios.get(`http://localhost:5000/api/product/${id}`);

//       setProductData(data)
// }

//   fetchProduct();

//   },[id])

  

  return (
    <div className="container mx-auto px-4">
      <Link to="/">
        <div className="btn btn-neutral">Go Back Home</div>
      </Link>
      <div className="flex flex-col md:flex-row gap-10 mt-8">
        <div className=" w-full md:w-1/2 flex justify-center">
          <img className=" w-full max-w-1/2 md:max-w-full h-64 sm:h-80 md:h-96 lg:h-[500px]" src={productData.image} alt={productData.name} />
        </div>
        <div className="w-full md:w-0.5 flex flex-col flex-auto">
          <div className="card-body">
            <div className="card-title">
              <h2>{productData.name}</h2>
            </div>
            <p>{productData.description}</p>
            <p>{productData.price}</p>
            <Rating
              value={productData.rating}
              text={productData.numReviews}
            ></Rating>
            <p>{productData.countInStock > 0 ? "In Stock" : "out of stock"}</p>
            {productData.countInStock > 0 && (
              <div className="mt-4">
                <h4>Qty</h4>
                <form className="mt-2">
                    <select onChange={(e)=> setQty(Number(e.target.value))}
                      className="select select-neutral">
                        {
                          [...Array(productData.countInStock).keys()].map((item)=>(
                            <option key={item+1}>{item+1}</option>
                          ))
                        }
                      
                    </select>
                </form>
              </div>
            )}
            <div className="card-action mt-4">
              <button>
              <div onClick={addToCartHandler} disabled={productData.countInStock === 0} 
              className="btn btn-primary">Add Cart</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
