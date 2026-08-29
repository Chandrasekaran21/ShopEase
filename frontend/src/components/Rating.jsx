import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({value, text}) => {
  
    return (
    <div>
        <div className="flex items-center gap-2 mb-2">
            <span>{value >= 1 ? <FaStar/> : value > 0.5 ? <FaStarHalfAlt />  : <FaRegStar/> }</span>
            <span>{value >= 2 ? <FaStar/> : value > 1.5 ? <FaStarHalfAlt />  : <FaRegStar/> }</span>
            <span>{value >= 3 ? <FaStar/> : value > 2.5 ? <FaStarHalfAlt />  : <FaRegStar/> }</span>
            <span>{value >= 4 ? <FaStar/> : value > 3.5 ? <FaStarHalfAlt />  : <FaRegStar/> }</span>
            <span>{value >= 5 ? <FaStar/> : value > 4.5 ? <FaStarHalfAlt />  : <FaRegStar/> }</span>
        </div>
        <div>
            reviews {text}
        </div>
    </div>
  )
}

export default Rating