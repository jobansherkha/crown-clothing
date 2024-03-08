import React, { useContext, useState } from "react";
import {
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/Utils";

import { Form } from "../../form-input/Form.Component";
import Button from "../../button/Button";
import "./SignIn.scss";
import { UserContext } from "../../context/UserContext";

const defaultformFields = {
  email: "",
  password: "",
};
export const SignIn = () => {
  const [formFields, setformfields] = useState(defaultformFields);
  const { email, password } = formFields;
  

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
   
   
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      console.log(user);
      setformfields(defaultformFields);
      
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformfields({ ...formFields, [name]: value });
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>Already have and account?</h2>
        <form onSubmit={handleSubmit}>
          <Form
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <Form
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
        </form>
        <div className="buttons-container">
          <Button onClick={handleSubmit} type="Submit">
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google sign in
          </Button>
        </div>
      </div>
    </>
  );
};
