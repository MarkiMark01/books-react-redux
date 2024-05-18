import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../shared/hooks/useAuth";
import useMenuItems from "../../shared/hooks/useMenuItems"; // Import the custom hook
import Register from "./Register";
import Logout from "./Logout";
import styles from "./stylesHeader.module.scss";
import ModalHeader from "./ModalHeader";



const Header = () => {


  
  const isLogin = useAuth();

  return (
    <>
      {isLogin ? (
        <header className={styles.header}>
          <section className={styles.header2}>
            <nav
              className={`${styles.header__burger} ${
                burgerActive ? styles.active : ""
              }`}

            >
              <span className={styles.header__burgerSpan}></span>
            </nav>
            <Logout />
          </section>
        </header>
      ) : (
      <section>Register</section>
      )}
    
    </>
  );
};

export default Header;