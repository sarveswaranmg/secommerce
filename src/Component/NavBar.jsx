import React from "react";
import StyleObj from "../style.module.css";
import { Route, Routes, Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
function NavBar() {
  const { cartQuantity } = useSelector((store) => store.cartState);
  return (
    <>
      <ul className={StyleObj.navbar}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/cart">
          <li>
            <ShoppingCartIcon></ShoppingCartIcon>
            {cartQuantity}
          </li>
        </Link>
      </ul>
    </>
  );
}

export default NavBar;
