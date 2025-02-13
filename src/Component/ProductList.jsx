import React from "react";
import StyleObj from "../style.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/cartSlice";
function ProductList({ product }) {
  const { cartQuantity, cartProducts } = useSelector(
    (store) => store.cartState
  );
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(actions.addToCart(product));
  };
  const handleRemove = (product) => {
    dispatch(actions.removeFromCart(product));
  };
  return (
    <div className={StyleObj.product} key={product.id}>
      <img src={product.image} alt="" className={StyleObj.product_image}></img>
      <div className={StyleObj.title}>{product.title}</div>
      <div className={StyleObj.price}>$ {product.price}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0.5rem",
        }}
      >
        <button
          onClick={() => {
            handleAdd(product);
          }}
        >
          <AddIcon></AddIcon>
        </button>
        <p
          style={{
            alignContent: "center",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          {<IndQty cartProducts={cartProducts} id={product.id}></IndQty>}
        </p>
        <button onClick={() => handleRemove(product)}>
          <RemoveIcon></RemoveIcon>
        </button>
      </div>
    </div>
  );
}
function IndQty({ cartProducts, id }) {
  let qty = 0;
  cartProducts.forEach((product) => {
    if (product.id == id) {
      qty = product.qty;
    }
  });
  return <>{qty}</>;
}
export default ProductList;
