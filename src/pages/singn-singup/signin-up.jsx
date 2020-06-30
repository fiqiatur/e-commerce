import React from "react";
import "./signin-up.style.scss";
import SignIn from "../../components/sign-in/sign-in.componen";
import SignUp from "../../components/sign-up/sign-up.componen";

const SignInUp = () => {
   return (
      <div className="sign-in-and-sign-up">
         <SignIn />
         <SignUp />
      </div>
   );
};

export default SignInUp;
