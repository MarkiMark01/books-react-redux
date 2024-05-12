import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              className={styles.login__log}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
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
            </section>
            <section className={styles.login__text}>
              <div>
                <span>Don't have an account?</span>
              </div>
            </section>
          </form>
        </section>
      </main>
    </>
  );
};
export default Login;
