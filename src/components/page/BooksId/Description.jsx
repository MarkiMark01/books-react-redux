import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueBooks } from "../../redux/books/booksOperations";
import styles from "./styles.BookId.module.scss";
import { useTranslation } from "react-i18next";

const Description = () => {
  return (
    <main>
      {book && (
        <>
          <section>
            <p style={{ fontFamily: "Salsa" }}>{t(book.description)}</p>
          </section>
          <section></section>
        </>
      )}
    </main>
  );
};

export default Description;
