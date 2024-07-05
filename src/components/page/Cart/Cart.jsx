// Inside Cart component

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteCart,
  fetchCart,
  clearAllCart,
} from "../../redux/books/booksOperations";
import { useNavigate } from "react-router-dom";
import CartComponents from "./CartComponents";

const Cart = () => {


  return (

      goToBack={goToBack}
      goToHome={goToHome}
      handleClearCart={handleClearCart}
      cart={cart}
      totalPrice={totalPrice}
      handleRemoveFromCart={handleRemoveFromCart}
    />
  );
};

export default Cart;