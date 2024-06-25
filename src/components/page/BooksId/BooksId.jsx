import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addNewCart, getUniqueBooks } from "../../redux/books/booksOperations";
import BooksIdComponents from "./BooksIdComponents";

const BooksId = () => {
  // if (!uniqueBook) {
  //   return (
  //     <section className={styles.bookId__emptyBlock}>
  //       <p className={styles.bookId__empty}>
  //         The book has not been selected yet...
  //       </p>
  //     </section>
  //   );
  // }

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
