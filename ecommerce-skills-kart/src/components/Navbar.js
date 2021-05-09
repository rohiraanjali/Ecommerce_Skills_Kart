import React from 'react'
import "../App.css";
import {NavLink} from "react-router-dom";
import { useCart } from '../contexts/Cart-context';
import { useWishList } from '../contexts/WishList-context';
import logo from "./logo.png";
const Navbar = () => {
    const [colorText , setColorText] =  React.useState({color: "#333"})
const items = useCart(); 
const WishListItems = useWishList();

    const [isDesktop, setDesktop] = React.useState(window.innerWidth > 1450);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 1450);
    };
  
    React.useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
    return (
        <div>
        <nav className="navbar">
          <ul className="header-nav-ul">
          <NavLink  to="/" className="header-nav-link">
         <li>
          <img className="nav-logo-img"style={{width: "30%" }} src={logo} />
         </li>
         </NavLink>
        
        {isDesktop ? (<NavLink to="/" className="header-nav-link">
        <li>
           <span style={colorText} onClick={() => setColorText({color: "#4caf50"})} className="nav-link-text home">Home</span>
         </li>
         </NavLink>) : null}

         {isDesktop ? (<NavLink to="/shop" className="header-nav-link">
        <li>
           <span  style={colorText} onClick={() => setColorText({color: "#4caf50"})} className="nav-link-text shop">Shop</span>
         </li>
         </NavLink>) : null}

        
         {isDesktop ? (<NavLink to="/" className="header-nav-link nav-icon">
        <li>
        <i class="fa fa-user"></i>
         </li>
         </NavLink>) : null}

         <NavLink to="/wishlist"  className="header-nav-link nav-icon">
             <li>
             <i className="fa fa-heart"> </i>
           <span></span> {WishListItems.length > 0 && <span className="count-badge">
             {WishListItems.length} </span>}
              </li>
              </NavLink>
        
        <NavLink to="/cart" className="header-nav-link nav-icon">
             <li>
             <i className="fa fa-shopping-cart"></i>
             {items.length >0 &&<span className="count-badge">
             {items.length}
               </span>}
              </li>
              </NavLink>
        
            
       </ul>
       </nav>
        </div>
    )
}

export default Navbar
