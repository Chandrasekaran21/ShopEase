import asyncHandler from "../middleware/asyncHandler";
import User from '../model/userModel.js'

const authUser = asyncHandler(async(req, res) => {

    const {email, password} = req.body;

    const user = User.findOne({email});

    if(user && (await user.matchPassword(password)) ){

        res.status(200).json({
            id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }

    res.send("Auth User");
});

const registerUser = asyncHandler(async(req, res) => {

    res.send("Register User");
});

const logoutUser = asyncHandler(async(req, res) => {

    res.send("Logout User");
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

