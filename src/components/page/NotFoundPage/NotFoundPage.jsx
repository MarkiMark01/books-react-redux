import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./stylesNoPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.nopage}>
      <p>"Oops, something went wrong... Error 404" 🕵️</p>
      <section className={styles.nopageLink}>
        <NavLink to="/">"Go to books"</NavLink>
      </section>
    </div>
  );
};

export default NotFoundPage;
