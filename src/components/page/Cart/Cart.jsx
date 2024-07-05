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
  const totalPrice = useSelector((state) =>
    state.books.cart.reduce((sum, item) => sum + parseFloat(item.totalPrice), 0)
  );

  const handleRemoveFromCart = (item) => {
    dispatch(deleteCart(item.id));
  };

  const handleClearCart = () => {
    dispatch(clearAllCart());
  };
  return <></>;
};

export default Cart;
