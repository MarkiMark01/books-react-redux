import React from "react";
import { createPortal } from "react-dom";
import styles from "./stylesModal.module.scss";
import useModal from "../../shared/hooks/useModal";

const modalRoot = document.querySelector("#modal-root");

export default function ModalWindow({ onClose }) {
  useModal(onClose);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.modal__backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal__content2}>
        <section className={styles.modal__login}>
          <article>Enter your login and password or sign up, please :)</article>
          <button className={styles.modal__ok} onClick={handleBackdropClick}>
            Ok
          </button>
        </section>
      </div>
    </div>,
    modalRoot
  );
}
