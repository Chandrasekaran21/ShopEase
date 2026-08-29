import { Link } from "react-router-dom";
import Rating from "./Rating";


const Product = ({product}) => {


  return (
    <Link to={`/product/${product._id}`} >
      <div className="card bg-base-100 w-96 shadow-sm mt-8">
        <figure>
            <img
            src={`${product.image}`}
            alt={product.name}
            className='h-[500px]' />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p className='line-clamp-2' >{product.description}</p>
            <Rating value={product.rating} text={product.numReviews} />
            <h3 className='card-title badge badge-primary' >{product.price}</h3>
            
        </div>
    </div>
    </Link>
  )
}

export default Product