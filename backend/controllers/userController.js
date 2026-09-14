import asyncHandler from "../middleware/asyncHandler.js";
import User from '../model/userModel.js'
import jwt from "jsonwebtoken";

const authUser = asyncHandler(async(req, res) => {

    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password)) ){

        const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET, {expiresIn:"30d"});

        res.cookie('jwt', token, {

            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000

        })

        // set jwt as http

        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
    } else{

        res.status(401);

        throw new Error ("invalid Email or Password")
    }

    
});

const registerUser = asyncHandler(async(req, res) => {

    const {name, email, password} = req.body;

    const userExist = await User.findOne({ email });

    if(userExist){

        res.status(400);

        throw new Error("User already exist")
    }

    const user = await User.create({

        name,
        email,
        password
    });

    if(user){

        const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET, {expiresIn:"30d"});

        res.cookie("jwt", token, {

            httpOnly: true,
            secure:false,
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 10000
        })

        res.status(201).json({

            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else{

        res.status(400);

        throw new Error ("Invalid user data");
    }

    res.send("Register User");
});

const logoutUser = asyncHandler(async(req, res) => {

    res.cookie("jwt", "", {
        httpOnly:true,
        expire: new Date(0),
    
    })

    res.status(200).json({message: "Logged Out Successfully"});


});


const getUserProfile = asyncHandler(async(req, res) => {

    res.send("Get User Profile");
});

const updateUserProfile = asyncHandler(async(req, res) => {

    res.send("Update User Profile");
});

const getUsers = asyncHandler(async(req, res) => {

    res.send("Get Users");
});


const getUsersById = asyncHandler(async(req, res) => {

    res.send("Get Users by ID");
});


const deleteUser = asyncHandler(async(req, res) => {

    res.send("Delete user");
});

const updateUser = asyncHandler(async(req, res) => {

    res.send("Update user");
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUsersById,
    deleteUser,
    updateUser
}

