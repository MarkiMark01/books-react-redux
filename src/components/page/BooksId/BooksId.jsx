import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addNewCart, getUniqueBooks } from "../../redux/books/booksOperations";
import BooksIdComponents from "./BooksIdComponents";

const BooksId = () => {
  const calculateTotalPrice = (quantity, price) => {
    const total = quantity * price;
    setTotalPrice(total.toFixed(2));
  };

  const handleQuantity = (e) => {
    const count = e.target.value;
    let newQuantity;
    if (count === "") {
      newQuantity = "";
    } else {
      newQuantity = isNaN(count) ? 1 : Math.max(1, Math.floor(Number(count)));
    }

    setQuantity(newQuantity);
    calculateTotalPrice(newQuantity, uniqueBook.price);
  };

  return (
    <BooksIdComponents
      uniqueBook={uniqueBook}
      handleQuantity={handleQuantity}
      quantity={quantity}
      totalPrice={totalPrice}
      handlePurchase={handlePurchase}
    />
  );
};

export default BooksId;
