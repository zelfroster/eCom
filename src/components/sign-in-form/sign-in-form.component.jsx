import { useState } from "react";

import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../buttons/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields(
      (formFields) => (formFields = { ...formFields, [name]: value })
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Wrong Email, Please check the email you entered");
          break;
        case "auth/wrong-password":
          alert("Wrong Password, Please check the password you entered");
          break;
        default:
          console.error("error in signing in ", error);
      }
    }
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={signInWithGooglePopup}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
