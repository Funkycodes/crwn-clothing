import React, { useState, useEffect } from "react";
import {
  auth,
  createUserAuthWithEmail,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./signup-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!(password === confirmPassword)) return;

    try {
      const { user } = await createUserAuthWithEmail(formFields);
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      const { code } = error;
      if (code === "auth/email-already-in-use")
        alert("Account with email already exists");
    }
  };
  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setFormFields((state) => {
      return { ...state, [name]: value };
    });
  };
  const resetFormFields = () => setFormFields(() => defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          onChange={handleChange}
          type="text"
          name="displayName"
          value={displayName}
          required
        />

        <FormInput
          label="Email"
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          required
        />

        <FormInput
          label="Confirm Password"
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
