import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { loadStripe } from "@stripe/stripe-js";
import { PRODUCTS } from "../../products";

// Backend payment with Stripe to be implemented:

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

// const Checkout = () => {
//   const { cartItems } = useContext(ShopContext);

//   useEffect(() => {
//     const handleCheckout = async () => {
//       const stripe = await stripePromise;

//       const lineItems = [];

//       for (const item in cartItems) {
//         if (cartItems[item] > 0) {
//           const product = PRODUCTS.find(
//             (product) => product.id === Number(item)
//           );
//           lineItems.push({
//             price: product.price.toString(),
//             quantity: cartItems[item],
//           });
//         }
//       }

//       const session = await stripe.redirectToCheckout({
//         lineItems,
//         mode: "payment",
//         successUrl: `${window.location.origin}/success`,
//         cancelUrl: `${window.location.origin}/cancel`,
//       });

//       if (session.error) {
//         console.error("Stripe checkout error:", session.error.message);
//       }
//     };

//     handleCheckout();
//   }, [cartItems]);

const Checkout = () => {
  return (
    <>
      <h2 className="processing">Processing payment...</h2>
      <div class="container">
        <div class="loader"></div>
      </div>
    </>
  );
};

export default Checkout;
