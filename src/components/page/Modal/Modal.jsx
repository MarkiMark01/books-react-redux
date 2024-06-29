import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import gift from "../../../Assets/thanks.jpg";
import useModal from "../../shared/hooks/useModal";

export default function ModalWindow() {
  return createPortal(<div className={styles.modal__backdrop}></div>);
}
