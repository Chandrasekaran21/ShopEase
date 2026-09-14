import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/userApiSlice";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";

const RegisterScreen = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [register, {isLoading}] = useRegisterMutation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async (e) =>{

        e.preventDefault();

        if(name === "" || email === "" || password === ""){

            toast.error("Please fill all the fields");
            
            return;

        }

        if(password.length < 6 ){

            toast.error("Password must be atleast 6 characters");
            return;
        }

        if ( password !== confirmPassword ){

            toast.error("Password do not match");
            return;
        }

        try{
            const res = await register({name, email, password}).unwrap();
            dispatch(setCredentials({...res}));
            navigate("/");

        }catch(error){

            toast.error(error?.data?.message || "Something went wrong")
        }

    };


    return (

        <div className="px-20">
            <h1 className="text-4xl font-bold mb-5 mt-5">Register</h1>
            <form className="w-full flex flex-col" onSubmit={submitHandler}>
                <label className="input w-full mb-5 flex">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Name" />
                </label>
                <label className="input w-full mb-5 flex">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" />
                </label>
                <label className="input w-full mb-5 flex">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                </label>
                <label className="input w-full mb-5 flex">
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password" />
                </label>
                <button type="submit" className="btn btn-primary mt-5 p-5" disabled={isLoading} >
                    {isLoading ? "Registering...." : "Register"}
                </button>
            </form>
            <p className="mt-4 text-center">
                Already have an account?{" "}
                <Link to="/login" className="link link-primary" >
                    Sign In
                </Link> 
            </p>
        </div>
    )
}

export default RegisterScreen;