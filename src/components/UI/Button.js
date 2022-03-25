import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, submit, valid, ...rest }) => {
  const newButton = valid ? (
    <button type={type} onClick={submit} className={styles.button}>
      {rest.children}
    </button>
  ) : (
    <button className={styles.button_disabled} disabled>
      {rest.children}
    </button>
  );

  return <>{newButton}</>;
};

export default Button;
