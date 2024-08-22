import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useGoogleLogin } from "@react-oauth/google";

import useAuth from "../../shared/hooks/useAuth";
import { googleLoginSuccess } from "../../redux/auth/auth-slice";
import styles from "./stylesLogin.module.scss";
import IconGoogle from "../../../Assets/IconGoogle";
import ModalWindow from "../Modal/ModalLogin";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import google from "../../../Assets/google.png";
// import { supabase } from "../../../client";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const isLogin = useAuth();
  const dispatch = useDispatch();

  const openModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      openModal();
    }
    // const data = { email, password };
    // dispatch(login(data));
    setEmail("");
    setPassword("");
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

  // useEffect(() => {
  //   checkUser();
  //   window.addEventListener("hashchange", function () {
  //     checkUser();
  //   });
  // }, []);

  // const checkUser = async () => {
  //   const {
  //     data: { session },
  //     error,
  //   } = await supabase.auth.getSession();
  //   if (error) {
  //     console.error("Error fetching session:", error);
  //   } else {
  //     setUser(session?.user ?? null);
  //   }
  // };

  // const signInWithGithub = async () => {
  //   await supabase.auth.signInWithOAuth({
  //     provider: "github",
  //   });
  // };
  // const signOutWithGithub = async () => {
  //   await supabase.auth.signOut();
  //   setUser(null);
  // };

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
            {/* <button onClick={loginWithGithub}>Sign in with Github</button> */}
            {/* <button onClick={signInWithGithub}>Sign in with Github</button> */}
          </section>
        </section>
        {isModalOpen && <ModalWindow onClose={closeModal}></ModalWindow>}
      </main>
    </>
  );
};

export default Login;

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useTranslation } from "react-i18next";
// import { useGoogleLogin } from "@react-oauth/google";

// import useAuth from "../../shared/hooks/useAuth";
// import {
//   googleLoginSuccess,
//   githubLoginSuccess,
// } from "../../redux/auth/auth-slice";
// import styles from "./stylesLogin.module.scss";
// import IconGoogle from "../../../Assets/IconGoogle";
// import ModalWindow from "../Modal/ModalLogin";
// import { supabase } from "../../../client";

// // const GITHUB_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;

// const Login = () => {
//   const { t } = useTranslation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   const navigate = useNavigate();
//   const isLogin = useAuth();
//   const dispatch = useDispatch();

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // const onLogin = (e) => {
//   //   e.preventDefault();
//   //   if (email.trim() === "" || password.trim() === "") {
//   //     openModal();
//   //   }
//   //   const data = { email, password };
//   //   setEmail("");
//   //   setPassword("");
//   // };

//   const loginGoogle = useGoogleLogin({
//     onSuccess: async (response) => {
//       try {
//         const res = await axios.get(
//           "https://www.googleapis.com/oauth2/v3/userinfo",
//           {
//             headers: {
//               Authorization: `Bearer ${response.access_token}`,
//             },
//           }
//         );
//         dispatch(
//           googleLoginSuccess({
//             data: {
//               name: res.data.name,
//               email: res.data.email,
//             },
//           })
//         );
//         navigate("/");
//       } catch (error) {
//         console.error("Google login error:", error);
//       }
//     },
//   });

//   // useEffect(() => {
//   //   const checkUser = async () => {
//   //     const {
//   //       data: { user },
//   //       error,
//   //     } = await supabase.auth.getUser();
//   //     if (error) {
//   //       console.error("Error fetching user:", error);
//   //     } else {
//   //       setUser(user);
//   //     }
//   //   };

//   //   checkUser();
//   //   window.addEventListener("hashchange", checkUser);
//   //   return () => window.removeEventListener("hashchange", checkUser);
//   // }, []);

//   // const signInWithGithub = () => {
//   //   supabase.auth.signInWithOAuth({
//   //     provider: "github",
//   //   });
//   // };

//   // const signOutWithGithub = async () => {
//   //   try {
//   //     await supabase.auth.signOut();
//   //     setUser(null);
//   //   } catch (error) {
//   //     console.error("Sign-out error:", error);
//   //   }
//   // };

//   const signInWithGithub = async () => {
//     try {
//       const { data, error } = await supabase.auth.signInWithOAuth({
//         provider: "github",
//       });

//       if (error) {
//         throw error;
//       }

//       dispatch(
//         githubLoginSuccess({
//           name: data.user_metadata.full_name,
//           email: data.user_metadata.email,
//         })
//       );
//       navigate("/");
//     } catch (error) {
//       console.error("GitHub login error:", error);
//     }
//   };

//   useEffect(() => {
//     const checkUser = async () => {
//       const {
//         data: { user },
//         error,
//       } = await supabase.auth.getUser();
//       if (error) {
//         console.error("Error fetching user:", error);
//       } else {
//         setUser(user);
//       }
//     };

//     checkUser();
//     window.addEventListener("hashchange", checkUser);
//     return () => window.removeEventListener("hashchange", checkUser);
//   }, []);

//   if (isLogin) {
//     return navigate(-1);
//   }

//   return (
//     <>
//       <main>
//         <section className={styles.login}>
//           <section className={styles.loginBox}>
//             <form
//               // onSubmit={onLogin}
//               className={styles.login__container}
//             >
//               <h1 className={styles.login__title}>{t("Log in")}</h1>
//               <p>
//                 {t(
//                   "Log in now to unlock your exclusive access to content and offers"
//                 )}
//               </p>
//               <input
//                 type="text"
//                 placeholder={t("Email address")}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className={styles.login__log}
//               />
//               <input
//                 type="password"
//                 placeholder={t("Password")}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className={styles.login__sign}
//               />
//               <section className={styles.login__buttons}>
//                 <button type="submit" className={styles.login__btn}>
//                   {t("Log in")}
//                 </button>
//               </section>
//             </form>
//             <button onClick={loginGoogle} className={styles.googleBtn}>
//               <IconGoogle />
//               Sign in with Google
//             </button>
//             <button onClick={signInWithGithub}>Sign in with Github</button>
//             <section className={styles.login__text}>
//               <div>
//                 <span>{t("Don't have an account?")}</span>
//               </div>
//             </section>
//             <NavLink to={"/register"} className={styles.login__link}>
//               {t("Register Now")}
//             </NavLink>
//           </section>
//         </section>
//         {isModalOpen && <ModalWindow onClose={closeModal}></ModalWindow>}
//       </main>
//     </>
//   );
// };

// export default Login;
