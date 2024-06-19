import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuth from "../../shared/hooks/useAuth";
import { login } from "../../redux/auth/auth-operations";
import styles from "./stylesLogin.module.scss";
import { useGoogleLogin } from "@react-oauth/google";
import IconGoogle from "../../../Assets/IconGoogle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const isLogin = useAuth();

  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Enter your login and password or sign up, please :)");
      return;
    }
    const data = { email, password };
    dispatch(login(data));
    setEmail("");
    setPassword("");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  const goHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

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
          <form onSubmit={onLogin} className={styles.login__container}>
            <h1 className={styles.login__title}>Log in</h1>
            <p>
              Log in now to unlock your exclusive access to content and offers
            </p>
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.login__log}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.login__sign}
            />
            <section className={styles.login__buttons}>
              <button
                type="button"
                onClick={goHome}
                className={styles.login__btn}
              >
                Back
              </button>
              <button type="submit" className={styles.login__btn}>
                Log in
              </button>
              <button
                type="button"
                onClick={handleSignup}
                className={styles.login__btn}
              >
                Sign up
              </button>
              <button onClick={loginGoogle} className={styles.googleBtn}>
                <IconGoogle />
                Sign in with Google
              </button>
            </section>
            <section className={styles.login__text}>
              <div>
                <span>Don't have an account?</span>
              </div>
            </section>
            <NavLink to={"/register"} className={styles.login__link}>
              Register Now
            </NavLink>
          </form>
        </section>
      </main>
    </>
  );
};
export default Login;
