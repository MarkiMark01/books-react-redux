import React, { useState } from "react";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

            <section className={styles.login__text}>
              <div>
                <span>Already have an account?</span>
              </div>
            </section>
          </form>
        </section>
      </main>
    </>
  );
};

export default Signin;
