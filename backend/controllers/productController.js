import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../model/productModel.js';

const getProducts = asyncHandler(async(req, res)=>{

    const products = await Product.find({});

    res.json(products);
});


const getProductById = asyncHandler(async(req, res)=>{

    const productData = await Product.findById(req.params.id);

    if(productData){

        res.json(productData);
    } else{

        res.status(404).json({message:"page not found"})
    }

    
});

export {getProducts, getProductById};