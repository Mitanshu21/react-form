import React, { useState } from "react";
import FormFields from "./FormFields";
import styles from "./Form.module.css";
import Button from "./UI/Button";

const Form = () => {
  const [formInput, setFormInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobileno: "",
    password: "",
    dob: "",
    gender: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
    checkerror(name, value);
  };

  const checkerror = (name, value) => {
    let err = {};

    if (name === "firstname")
      if (value.length < 3)
        err.firstname = "firstname should atleast 3 character long!";
      else err.firstname = undefined;

    if (name === "lastname")
      if (value.length < 3)
        err.lastname = "lastname should atleast 3 character long!";
      else err.lastname = undefined;

    if (name === "email")
      if (
        value.length === 0 ||
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
      )
        err.email = "email is Invalid";
      else err.email = undefined;

    if (name === "mobileno")
      if (value.length === 0) err.mobileno = "please enter your mobile number.";
      else if (value.length < 10)
        err.mobileno = "Mobile no should have atleast 10 numbers.";
      else err.mobileno = undefined;

    if (name === "password")
      if (value.length < 8 || value.length > 16)
        err.password = "password should between 8 to 16 character long.";
      else err.password = undefined;

    if (name === "dob")
      if (value.length === 0) err.dob = "please enter your birthdate";
      else err.dob = undefined;

    if (name === "gender")
      if (value.length === 0) err.gender = "Please select your gender.";
      else err.gender = undefined;

    if (name === "city")
      if (value.length === 0) err.city = "please enter your city";
      else err.city = undefined;

    if (name === "state")
      if (value.length === 0) err.state = "please enter your state";
      else err.state = undefined;

    if (name === "country")
      if (value === 0) err.state = "please enter your country";
      else err.country = undefined;

    if (name === "pincode")
      if (value.length === 0) err.pincode = "please enter your pincode";
      else if (value.length < 5)
        err.pincode = "Pincode should have atleast 5 numbers.";
      else if (value.length > 9)
        err.pincode = "Pincode should not longer than 9 numbers.";
      else err.pincode = undefined;

    setError({ ...error, ...err });
    let nerror = { ...error, ...err };
    let valid = false;
    if (Object.keys(nerror).length === 11) {
      for (const val of Object.values(nerror)) {
        if (val === undefined) {
          valid = true;
        } else {
          valid = false;
          break;
        }
      }
    }
    setIsValid(valid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      // console.log(formInput);

      fetch("http://localhost:5000/register", {
        method: "post",
        body: JSON.stringify({ ...formInput }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.emailerror) {
            alert(result.emailerror);
            setError({ ...error, email: "Email already exist." });
          } else if (result.error) {
            alert(result.error);
          } else if (result) {
            alert("Data saved successfully");

            setFormInput({
              firstname: "",
              lastname: "",
              email: "",
              mobileno: "",
              password: "",
              dob: "",
              gender: "",
              city: "",
              state: "",
              country: "",
              pincode: "",
            });
            setError({});
            setIsValid(false);
          }
        })
        .catch((err) => console.log(err));
    } else return;
  };

  return (
    <form className={styles.form}>
      <FormFields
        formInput={formInput}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        error={error}
        checked={formInput.gender}
      />
      <Button type="submit" submit={handleSubmit} valid={isValid}>
        submit
      </Button>
    </form>
  );
};

export default Form;
