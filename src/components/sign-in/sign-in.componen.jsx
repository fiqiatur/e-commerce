import React, { Component } from "react";
import "./sign-in.componen.style.scss";
import FormInput from "../form-input/form-input.componen";
import CustomButton from "../custom-button/custom-button-componen";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
   constructor(props) {
      super(props);

      this.state = {
         email: "",
         password: "",
      };
   }

   handleSubmit = (e) => {
      e.preventDefault();

      this.setState({ email: "", password: "" });
   };

   handleChange = (e) => {
      const { value, name } = e.target;
      this.setState({ [name]: value });
   };

   render() {
      return (
         <div className="sign-in">
            <h2>I alredy</h2>
            <span>Signin wit email & password</span>

            <form onSubmit={this.handleSubmit} autocomplete="off">
               <FormInput
                  type="email"
                  name="email"
                  value={this.state.email}
                  handleChange={this.handleChange}
                  label="email"
                  required
               />

               <FormInput
                  type="password"
                  name="password"
                  value={this.state.password}
                  handleChange={this.handleChange}
                  label="password"
                  required
               />
               <div className="buttons">
                  <CustomButton type="submit"> SIGN IN </CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                     {" "}
                     OR SIGN IN WITH GOOGLE{" "}
                  </CustomButton>
               </div>
            </form>
         </div>
      );
   }
}

export default SignIn;
