import asyncHandler from "./asyncHandler.js"
import User from "../model/userModel.js"
import jwt from "jsonwebtoken"

// protect routes

const protect = asyncHandler(async(req, res, next) =>{

    let token = req.cookies.jwt;

    console.log(token);

    if(!token){

        res.status(401);
        throw new Error ("Not auth, No Token")
    }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);

        req.user = await User.findById(decoded.userId).select("-password")
        next();


    }catch(err){

        res.status(401);

        console.log(err);

        throw new Error ("Not auth, token failed");

    }
} )

// Admin routes

const admin = (req, res, next) => {

    if(req.user && req.user.isAdmin){

        next();

    } else{

        res.status(401);

        throw new Error("Not auth as admin");
    }

}


export { protect, admin };