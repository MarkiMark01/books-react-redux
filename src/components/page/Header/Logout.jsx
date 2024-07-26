import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUser,
  isGoogleAuth,
  getGoogleUser,
} from "../../redux/auth/auth-selectors";
import { logout } from "../../redux/auth/auth-operations";
import { googleLogout } from "../../redux/auth/auth-slice"; // Import the googleLogout action
import { useTranslation } from "react-i18next";
import styles from "../Header/stylesHeader.module.scss";

import icon from "../../../Assets/pngegg.png";
import usa from "../../../Assets/usa.png";
import ua from "../../../Assets/ua.png";

const LANGUAGE_KEY = "language";

const Logout = () => {
  const { name } = useSelector(getUser);

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    // return <Navigate to={"/"} />;
  };

  return (
    <section className={styles.logout}>
      <img src={icon} alt="Icon" className={styles.logout__icon} />
      <span className={styles.logout__name}>{name}</span>
      <button type="button" onClick={onLogout} className={styles.logout__btn}>
        Log out
      </button>
    </section>
  );
};
export default Logout;
