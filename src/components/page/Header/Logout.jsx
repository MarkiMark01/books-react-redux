// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getUser } from "../../redux/auth/auth-selectors";
// import { logout } from "../../redux/auth/auth-operations";
// import { useTranslation } from "react-i18next";
// import styles from "../Header/stylesHeader.module.scss";

// import icon from "../../../Assets/pngegg.png";
// import usa from "../../../Assets/usa.png";
// import ua from "../../../Assets/ua.png";

// const LANGUAGE_KEY = "language";

// const Logout = () => {
//   const { name } = useSelector(getUser);
//   const dispatch = useDispatch();
//   const { t, i18n } = useTranslation();

//   const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

//   useEffect(() => {
//     localStorage.setItem(LANGUAGE_KEY, selectedLanguage);
//   }, [selectedLanguage]);

//   const onLogout = () => {
//     dispatch(logout());
//   };

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setSelectedLanguage(lng);
//   };

//   return (
//     <section className={styles.logout}>
//       <section className={styles.btnFlags}>
//         <img
//           src={usa}
//           alt="USA flag"
//           aria-label="Change language to English"
//           className={styles.flags}
//           onClick={() => changeLanguage("en")}
//           style={{ opacity: selectedLanguage === "en" ? 0.6 : 1 }}
//         />
//         <img
//           src={ua}
//           alt="Ukraine flag"
//           aria-label="Change language to Ukrainian"
//           className={styles.flags}
//           onClick={() => changeLanguage("uk")}
//           style={{ opacity: selectedLanguage === "uk" ? 0.6 : 1 }}
//         />
//       </section>
//       <img src={icon} alt="Icon" className={styles.logout__icon} />
//       <span className={styles.logout__name}>{name}</span>
//       <button type="button" onClick={onLogout} className={styles.logout__btn}>
//         {t("Log out")}
//       </button>
//     </section>
//   );
// };

// export default Logout;

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getUser, isGoogleAuth } from "../../redux/auth/auth-selectors";
// import { logout } from "../../redux/auth/auth-operations";
// import { googleLogout } from "../../redux/auth/auth-slice"; // Import the googleLogout action
// import { useTranslation } from "react-i18next";
// import styles from "../Header/stylesHeader.module.scss";

// import icon from "../../../Assets/pngegg.png";
// import usa from "../../../Assets/usa.png";
// import ua from "../../../Assets/ua.png";

// const LANGUAGE_KEY = "language";

// const Logout = () => {
//   const { name } = useSelector(getUser);
//   const isGoogleLogin = useSelector(isGoogleAuth);
//   const dispatch = useDispatch();
//   const { t, i18n } = useTranslation();

//   const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

//   useEffect(() => {
//     localStorage.setItem(LANGUAGE_KEY, selectedLanguage);
//   }, [selectedLanguage]);

//   const onLogout = () => {
//     if (isGoogleLogin) {
//       dispatch(googleLogout());
//     } else {
//       dispatch(logout());
//     }
//   };

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setSelectedLanguage(lng);
//   };

//   return (
//     <section className={styles.logout}>
//       <section className={styles.btnFlags}>
//         <img
//           src={usa}
//           alt="USA flag"
//           aria-label="Change language to English"
//           className={styles.flags}
//           onClick={() => changeLanguage("en")}
//           style={{ opacity: selectedLanguage === "en" ? 0.6 : 1 }}
//         />
//         <img
//           src={ua}
//           alt="Ukraine flag"
//           aria-label="Change language to Ukrainian"
//           className={styles.flags}
//           onClick={() => changeLanguage("uk")}
//           style={{ opacity: selectedLanguage === "uk" ? 0.6 : 1 }}
//         />
//       </section>
//       <img src={icon} alt="Icon" className={styles.logout__icon} />
//       <span className={styles.logout__name}>{name}</span>
//       <button type="button" onClick={onLogout} className={styles.logout__btn}>
//         {t("Log out")}
//       </button>
//     </section>
//   );
// };

// export default Logout;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isGoogleAuth, getGoogleUser } from "../../redux/auth/auth-selectors";
import { googleLogout } from "../../redux/auth/auth-slice"; // Import the googleLogout action
import { useTranslation } from "react-i18next";
import styles from "../Header/stylesHeader.module.scss";

import icon from "../../../Assets/pngegg.png";
import usa from "../../../Assets/usa.png";
import ua from "../../../Assets/ua.png";

const LANGUAGE_KEY = "language";

const Logout = () => {
  const googleUser = useSelector(getGoogleUser);
  const isGoogleLogin = useSelector(isGoogleAuth);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, selectedLanguage);
  }, [selectedLanguage]);

  const onLogout = () => {
    if (isGoogleLogin) {
      dispatch(googleLogout());
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <section className={styles.logout}>
      <section className={styles.btnFlags}>
        <img
          src={usa}
          alt="USA flag"
          aria-label="Change language to English"
          className={styles.flags}
          onClick={() => changeLanguage("en")}
          style={{ opacity: selectedLanguage === "en" ? 0.6 : 1 }}
        />
        <img
          src={ua}
          alt="Ukraine flag"
          aria-label="Change language to Ukrainian"
          className={styles.flags}
          onClick={() => changeLanguage("uk")}
          style={{ opacity: selectedLanguage === "uk" ? 0.6 : 1 }}
        />
      </section>
      <img src={icon} alt="Icon" className={styles.logout__icon} />
      <span className={styles.logout__name}>
        {isGoogleLogin ? googleUser.name : ""}
      </span>
      <button type="button" onClick={onLogout} className={styles.logout__btn}>
        {t("Log out")}
      </button>
    </section>
  );
};

export default Logout;
