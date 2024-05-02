import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
