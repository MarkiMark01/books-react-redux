import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./stylesHeader.module.scss";
import { useTranslation } from "react-i18next";

const Register = () => {


    return (
        <>
            <header className={styles.headerRegister}>
                <section className={styles.headerRegister2}>
                    <NavLink to={"/"} className={styles.logo}>
                        BookStore
                    </NavLink>
                    <nav className={styles.navRegister}>
                        <section style={{ display: "flex" }}>
                            <button

                            >
                                EN
                            </button>
                            <button

                            >
                                UKR
                            </button>
                        </section>
                        <section className={styles.navReg}>
                            <NavLink to="/login">Log in </NavLink>
                        </section>
                        |
                        <section className={styles.navReg}>
                            <NavLink to="/register"> Sign up</NavLink>
                        </section>
                    </nav>
                </section>
            </header>
            <section className={styles.head}></section>
        </>
    );
};
export default Register;