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