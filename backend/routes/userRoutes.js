import express from 'express';

const router = express.Router();

import{
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUsersById,
    deleteUser,
    updateUser
} from "../controllers/userController.js";


router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser)
router.post('/login', authUser);
router.route("/profile").post(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUsersById).put(updateUser);