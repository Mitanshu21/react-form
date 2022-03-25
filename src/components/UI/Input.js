import React from "react";
import styles from "./Input.module.css";

const Input = ({
  label,
  name,
  type,
  placeholder,
  value,
  onchange,
  max,
  error,
  checked,
}) => {
  return (
    <>
      <div className={styles.input}>
        <label htmlFor={name}>{label}</label>

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onFocus={onchange}
          onChange={onchange}
          className={error && styles.input_error}
          max={max}
          checked={checked && checked === value}
          // autoComplete="off"
          required
        />
        {error ? (
          <p className={styles.error}>{error}</p>
        ) : (
          <div className={styles.emptyerr}></div>
        )}
      </div>
    </>
  );
};

Input.defaultProps = {
  className: "",
};

export default Input;
