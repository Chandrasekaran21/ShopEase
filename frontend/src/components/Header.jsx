import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import { useState } from "react";


const Header = () => {

  const {cartItem} = useSelector((state)=> state.cart);

  const themes = ['light', 'dark', 'cupcake', 'synthwave'];

  const {theme, changeTheme} = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (t)=>{

    changeTheme(theme);
    setIsOpen(false);
  }
  
  return (
    
    <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-auto">
                <Link to='/' className="btn btn-ghost text-xl">ShopEase</Link>
          </div>

        <div className="flex-none">
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
                <summary >{theme}</summary>
                <ul className="bg-base-100 rounded-box w-52 z-[1] p-2 dropdown-content menu shadow">
                  {themes.map((theme)=>(

                    <li key={theme} onClick={() => changeTheme(theme)}>
                      {theme}
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Header