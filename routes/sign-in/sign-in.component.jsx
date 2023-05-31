import React from "react";
import SignUpForm from "../../components/signup-form/signup-form.component";
import {
  auth,
  createUserDocFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logUser = async () => {
    const { user } = await signInWithGooglePopup(auth);
    const userDocRef = await createUserDocFromAuth(user);
  };
  return (
    <div>
      <h1>SignIn</h1>
      <button type="button" onClick={logUser}>
        Sign In With Popup
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
