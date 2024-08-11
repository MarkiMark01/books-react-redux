import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useGoogleLogin } from "@react-oauth/google";

import useAuth from "../../shared/hooks/useAuth";
import { login } from "../../redux/auth/auth-operations";
import { googleLoginSuccess } from "../../redux/auth/auth-slice";
import styles from "./stylesLogin.module.scss";
import IconGoogle from "../../../Assets/IconGoogle";
import ModalWindow from "../Modal/ModalLogin";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import google from "../../../Assets/google.png";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const isLogin = useAuth();
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert(t("Enter your login and password or sign up, please :)"));
      return;
    }
    const data = { email, password };
    dispatch(login(data));
    setEmail("");
    setPassword("");
  };

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   navigate("/register");
  // };

  // const goHome = (e) => {
  //   e.preventDefault();
  //   navigate("/");
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
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLogin) {
    return navigate(-1);
  }

  return (
    <>
      <main>
        <section className={styles.login}>
          <section className={styles.loginBox}>
            <form onSubmit={onLogin} className={styles.login__container}>
              <h1 className={styles.login__title}>{t("Log in")}</h1>
              <p>
                {t(
                  "Log in now to unlock your exclusive access to content and offers"
                )}
              </p>
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
                  onClick={goHome}
                  className={styles.login__btn}
                >
                  {t("Back")}
                </button> */}
                <button type="submit" className={styles.login__btn}>
                  {t("Log in")}
                </button>
                {/* <button
                  type="button"
                  onClick={handleSignup}
                  className={styles.login__btn}
                >
                  {t("Sign up")}
                </button> */}
              </section>
              <section className={styles.googleLoginButton}>
                {/* <GoogleLogin
                className={styles.container}
                onSuccess={(credentialResponse) => {
                  if (credentialResponse && credentialResponse.credential) {
                    const decoded = jwtDecode(credentialResponse.credential);
                    dispatch(googleLoginSuccess(decoded));
                    navigate("/");
                  } else {
                  }
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              /> */}
              </section>
            </form>
            <button onClick={loginGoogle} className={styles.googleBtn}>
              <IconGoogle />
              Sign in with Google
            </button>
            <section className={styles.login__text}>
              <div>
                <span>{t("Don't have an account?")}</span>
              </div>
            </section>
            <NavLink to={"/register"} className={styles.login__link}>
              {t("Register Now")}
            </NavLink>
          </section>
        </section>
      </main>
    </>
  );
};

export default Login;
