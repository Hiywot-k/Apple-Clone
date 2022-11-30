
import React, { Component } from "react";
import appl from "../commonResource/images/icons/logo-sm.png";
import search from "../commonResource/images/icons/search-icon-sm.png";
import cart from "../commonResource/images/icons/cart-sm.png";
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import NavLinks from "./HeaderLinks";
import {Link} from "react-router-dom"
// import "./Header.css"

function Header() {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              {/* <AppleIcon/> */}
              <img src={appl} alt="logo" />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <NavLinks urlLinks="/Mac" urlName="Mac" />
                <NavLinks urlLinks="/iphone" urlName="iPhone" />
                <NavLinks urlLinks="/iPad" urlName="iPad" />
                <NavLinks urlLinks="/watch" urlName="watch" />
                <NavLinks urlLinks="/tv" urlName="tv" />
                <NavLinks urlLinks="/Music" urlName="Music" />
                <NavLinks urlLinks="/Support" urlName="Support" />

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search/">
                 <SearchIcon />
                    {/* <img src={search} alt="search" /> */}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/">
                  <ShoppingBagOutlinedIcon />
                    {/* <img src={cart} alt="cart" /> */}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Header;
