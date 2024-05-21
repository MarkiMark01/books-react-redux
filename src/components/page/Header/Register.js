import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./stylesHeader.module.scss";
import { useTranslation } from "react-i18next";

const Register = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };

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
                                onClick={() => changeLanguage("en")}
                                disabled={selectedLanguage === "en"}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => changeLanguage("uk")}
                                disabled={selectedLanguage === "uk"}
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