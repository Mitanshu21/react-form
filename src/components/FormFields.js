import React from "react";
import Input from "./UI/Input";
import Select from "./UI/Select";
import styles from "./FormFields.module.css";
import countryList from "./store/countryList";

function FormFields({ formInput, handleInput,  error, checked }) {
  return (
    <>
      <h2 className={styles.heading}> React Form</h2>
      <div className={styles.twofield}>
        <Input
          label="firstname"
          type="text"
          name="firstname"
          placeholder="firstname"
          value={formInput.firstname}
          onchange={handleInput}
          error={error.firstname}
        />
        <Input
          label="lastname"
          type="text"
          name="lastname"
          placeholder="lastname"
          value={formInput.lastname}
          onchange={handleInput}
          error={error.lastname}
        />
      </div>
      <Input
        label="email"
        type="email"
        name="email"
        placeholder="xyz@domain.com"
        value={formInput.email}
        onchange={handleInput}
        error={error.email}
      />

      <Input
        label="mobile no"
        type="number"
        name="mobileno"
        placeholder="xxxx xxxx xxx"
        value={formInput.mobileno}
        onchange={handleInput}
        error={error.mobileno}
      />
      <Input
        label="password"
        type="password"
        name="password"
        placeholder="password"
        value={formInput.password}
        onchange={handleInput}
        error={error.password}
      />
      <Input
        label="date of birth"
        type="date"
        name="dob"
        max="2022-04-01"
        value={formInput.dob}
        onchange={handleInput}
        error={error.dob}
      />
      <div className={styles.gender}>
        <Input
          label="male"
          type="radio"
          name="gender"
          value="male"
          checked={checked}
          onchange={handleInput}
          error={error.gender}
        />
        <Input
          label="female"
          type="radio"
          name="gender"
          value="female"
          checked={checked}
          onchange={handleInput}
        />
      </div>

      <div className={styles.twofield}>
        <Input
          label="city"
          type="text"
          name="city"
          value={formInput.city}
          onchange={handleInput}
          error={error.city}
        />
        <Input
          label="state"
          type="text"
          name="state"
          value={formInput.state}
          onchange={handleInput}
          error={error.state}
        />
      </div>
      <div className={styles.twofield}>
        <Select
          label="country"
          type="text"
          name="country"
          value={formInput.country}
          onchange={handleInput}
          optionsList={countryList}
          error={error.country}
        />

        <Input
          label="pincode"
          type="number"
          name="pincode"
          value={formInput.pincode}
          onchange={handleInput}
          error={error.pincode}
        />
      </div>


    </>
  );
}

export default FormFields;
