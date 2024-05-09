import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/auth/authOperations";
import { getAuthError } from "../../redux/auth/authSelectors";
import useAuth from "../../shared/hooks/useAuth";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { status, message } = useSelector(getAuthError);
  const isLogin = useAuth();

  const onRegister = (e) => {
    e.preventDefault();

    // if (email.trim() === "" || password.trim() === "" || name.trim() === "") {
    //   alert("Enter your login and password or sign up, please :)");
    //   return;
    // }
    const data = { name, email, password };
    dispatch(signup(data));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <main>
        <section className={styles.login}>
          <form onSubmit={onRegister} className={styles.login__container2}>
            <h1 className={styles.login__title}>Sign In</h1>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.login__name}
              required
            />
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
                onClick={handleReturnBack}
                className={styles.login__btn}
              >
                Back
              </button>
              <button
                type="button"
                className={styles.login__btn}
                onClick={handleReturnLogin}
              >
                Log in
              </button>
              <button type="submit" className={styles.login__btn}>
                Register
              </button>
            </section>
            <section className={styles.login__text}>
              <div>
                <span>Already have an account?</span>
              </div>
            </section>
          </form>
          {status && <p className={styles.login__status}>{message}</p>}
        </section>
      </main>
    </>
  );
};

export default Signin;
