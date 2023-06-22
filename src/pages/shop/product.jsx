import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  const navigate = useNavigate();

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <h4>
            <b className="price">{productName}</b>
          </h4>
        </p>
        <p className="price"> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      <br />
      <button className="goToCart" onClick={() => navigate("/cart")}>
        {" "}
        Go to Cart{" "}
      </button>
    </div>
  );
};
