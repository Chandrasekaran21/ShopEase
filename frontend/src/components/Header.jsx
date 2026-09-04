import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";


const Header = () => {

  const {cartItem} = useSelector((state)=> state.cart);

  const {theme, changeTheme} = useTheme();
  
  return (
    
    <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-auto">
                <Link to='/' className="btn btn-ghost text-xl">ShopEase</Link>
          </div>

        <div className="flex-none flex items-center gap-2">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-96 " />
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/cart" >Cart 
                  <span>
                    {cartItem.length > 0 ? cartItem.length : 0 }
                  </span>
                </Link>
            </li>
            <li>
              <details className="dropdown dropdown-end" >
                <summary>Chandru</summary>
              </details>
            </li>
          </ul>
          <label className="toggle text-base-content" style={{ '--tglbg': '#2563eb' }}
              onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    className="theme-controller"
                    checked={theme === 'dark'}
                    onChange={(e) => changeTheme(e.target.checked ? 'dark' : 'light')}
                  />
                  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
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
                  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </g>
                  </svg>
                </label>
        </div>
      </div>
  )
}

export default Header