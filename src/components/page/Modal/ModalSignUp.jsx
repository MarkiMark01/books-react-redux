import React from "react";
import styles from "./stylesModal.module.scss";
import useModal from "../../shared/hooks/useModal";

export default function ModalWindow({ onClose }) {
  useModal(onClose);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    (
      <div className={styles.modal__backdrop} onClick={handleBackdropClick}>
        <div className={styles.modal__content2}>
          <section className={styles.modal__login}>
            <article>
              Enter your email and password or log in, please :)
            </article>
            <button className={styles.modal__ok} onClick={handleBackdropClick}>
              Ok
            </button>
          </section>
        </div>
      </div>
    ),
    modalRoot
  );
}
