import React from "react";
import styles from "./Select.module.css";

function Select({
  label,
  name,
  type,
  placeholder,
  value,
  onchange,
  style,
  error,
  className,
  optionsList,
}) {
  const options = optionsList.map((data) => (
    <option key={data.id} value={data.name}>
      {data.name}
    </option>
  ));

  return (
    <>
      <div className={styles.select}>
        <label htmlFor={name}>{label}</label>

        <select
          name={name}
          value={value}
          className={styles.style}
          onChange={onchange}
          required
        >
          <option key={0} value="" disabled>
            Select {name}
          </option>
          {options}
        </select>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </>
  );
}

export default Select;
