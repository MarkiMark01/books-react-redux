import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/auth/auth-selectors";
import { logout } from "../../redux/auth/auth-operations";
import styles from "../Header/stylesHeader.module.scss";

import icon from "../../../Assets/pngegg.png";

const Logout = () => {
  return (
    <section className={styles.logout}>
      <img src={icon} alt="Icon" className={styles.logout__icon} />
      <span className={styles.logout__name}>{name}</span>
      <button type="button" onClick={onLogout} className={styles.logout__btn}>
        Log out
      </button>
    </section>
  );
};
export default Logout;
