import React from "react";
import { slide as Menu } from "react-burger-menu";

import {NavLink} from "react-router-dom";
export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      
          <NavLink to="/" className="side-nav-link">
            <a className="bm-item">
                Home
             </a>
          </NavLink>

          <NavLink to="/shop" className="side-nav-link">
          <a className="bm-item">
                Shop
             </a>
          </NavLink>
             
          <NavLink to="/cart" className="side-nav-link">
          <a className="bm-item">
                Cart
             </a>
          </NavLink>

          <NavLink to="/wishlist" className="side-nav-link">
          <a className="bm-item">
                WishList
             </a>
          </NavLink>
    </Menu>
  );
};
