import React from "react";
import { useSelector } from "react-redux";
import ProductList from "../Component/ProductList";

function Cart() {
  const { cartProducts } = useSelector((store) => store.cartState);
  return (
    <>
      <h1>Cart</h1>
      <div className="cart-product-wrapper">
        {cartProducts.map((product) => {
          return <ProductList key={product.id} product={product}></ProductList>;
        })}
      </div>
    </>
  );
}

export default Cart;
