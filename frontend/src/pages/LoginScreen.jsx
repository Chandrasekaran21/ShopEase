import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/userApiSlice";
import {useLocation, useNavigate} from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import { useState } from "react";
import {toast} from "react-toastify";

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, {isLoading}] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const submitHandler = async (e)=>{

    e.preventDefault();

    if(email === '' || password === '' ){

      alert ("Please fill the fields")
    } else{

      try{

        const res = await login({email, password}).unwrap();

        dispatch(setCredentials({...res}));
        navigate("/");

      } catch(error){

        toast.error(error?.data?.message);
      }
    }

  }

  return (
    <div className="px-20">
      <h1 className="text-4xl font-bold mb-5 mt-5">Log In</h1>
      <form  className="w-full" onSubmit={submitHandler}>
        <label className="input w-full mb-5">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            
            minLength="3"
            maxLength="30"
          />
        </label>
        <label className="input w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            
          />
        </label>
        <button type="submit" className="btn btn-primary mt-5 p-5">Log In</button>
      </form>
    </div>
  );
}

export default LoginScreen;