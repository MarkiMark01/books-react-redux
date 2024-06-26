import axios from "axios";
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useGoogleLogin } from "@react-oauth/google";

import { signup } from "../../redux/auth/auth-operations";
import { getAuthError } from "../../redux/auth/auth-selectors";
import { googleLoginSuccess } from "../../redux/auth/auth-slice";
import useAuth from "../../shared/hooks/useAuth";
import styles from "./stylesSignin.module.scss";
import IconGoogle from "../../../Assets/IconGoogle";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status, message } = useSelector(getAuthError);
  const isLogin = useAuth();

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();

    const data = { name, email, password };
    dispatch(signup(data));
    setName("");
    setEmail("");
    setPassword("");
  };

  // const handleReturnLogin = () => {
  //   navigate("/login");
  // };

  // const handleReturnBack = () => {
  //   navigate(-1);
  // };

  const loginGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        dispatch(
          googleLoginSuccess({
            data: {
              name: res.data.name,
              email: res.data.email,
            },
          })
        );
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLogin) {
    navigate("/");
  }

  return (
    <>
      <main>
        <section className={styles.login}>
          <section className={styles.loginBox}>
            <form onSubmit={onRegister} className={styles.login__container2}>
              <h1 className={styles.login__title}>{t("Sign up")}</h1>
              <input
                type="text"
                placeholder={t("Your name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.login__name}
                required
              />
              <input
                type="text"
                placeholder={t("Email address")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.login__log}
              />
              <input
                type="password"
                placeholder={t("Password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.login__sign}
              />
              <section className={styles.login__buttons}>
                {/* <button
                  type="button"
                  onClick={handleReturnBack}
                  className={styles.login__btn}
                >
                  {t("Back")}
                </button>
                <button
                  type="button"
                  className={styles.login__btn}
                  onClick={handleReturnLogin}
                >
                  {t("Log in")}
                </button> */}
                <button type="submit" className={styles.login__btn}>
                  {t("Register")}
                </button>
              </section>
            </form>
            <button onClick={loginGoogle} className={styles.googleBtn}>
              <IconGoogle />
              Sign in with Google
            </button>
            <section className={styles.login__text}>
              <div>
                <span>{t("Already have an account?")}</span>
              </div>
            </section>
            <NavLink to={"/login"} className={styles.login__link}>
              {t("Log in")}
            </NavLink>
          </section>
          {status && <p className={styles.login__status}>{message}</p>}
        </section>
      </main>
    </>
  );
};

export default Signin;
