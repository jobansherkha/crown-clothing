import React, { useState } from "react";
import './SignUp.scss'
import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/Utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Button from "../button/Button";
import { Form } from "../form-input/Form.Component";




const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  cPassword: "",
};

export const SignUp = () => {
  const [formFields, setformfields] = useState(defaultformFields);
  const { displayName, email, password, cPassword } = formFields;
  const resetForm = () => {
    setformfields(defaultformFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== cPassword) {
      alert("password does not match");
      return;
    }
    try {
      const response = await createAuthWithEmailAndPassword(email, password);
      console.log(response);
      await createUserDocumentFromAuth(response.user, { displayName });
      setformfields(defaultformFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformfields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    <>
       <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
      
        <Form
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <Form
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <Form
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <Form
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={cPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
    </>
  );
};
