import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout as logoutAction} from "../slices/authSlice";

const Header = () => {

  const {cartItem} = useSelector((state)=> state.cart);

  const { userInfo } = useSelector((state)=> state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout] = useLogoutMutation();

  const logoutHandler = async() =>{

    try{

      await logout();
      dispatch(logoutAction());
      navigate("/login");


    }catch(error){

      console.log(error);
    }
  }

  const {theme, changeTheme} = useTheme();
  
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-auto">
        <Link to="/" className="btn btn-ghost text-xl">
          ShopEase
        </Link>
      </div>

      <div className="flex-none flex items-center gap-2">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <Link to="/cart">
              Cart
              <span>{cartItem.length > 0 ? cartItem.length : 0}</span>
            </Link>
          </li>
          
            {userInfo ?
            (<li>
              <details>
                <summary>{userInfo.name}</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li onClick={logoutHandler}><a>Logout</a></li>
                </ul>
              </details>
            </li>) :
              (<li>
                <Link to={"/login"}>Sign In</Link>
              </li>)
            
            }
          
        </ul>
        <label
          className="swap swap-rotate"
          style={{ "--tglbg": "#2563eb" }}
        >
          <input
            type="checkbox"
            className="theme-controller"
            checked={theme === "dark"}
            onChange={(e) => changeTheme(e.target.checked ? "dark" : "light")}
          />
          <svg
            className="swap-off h-8 w-8 fill-current"
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>
          <svg
            className="swap-on h-8 w-8 fill-current"
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
}

export default Header