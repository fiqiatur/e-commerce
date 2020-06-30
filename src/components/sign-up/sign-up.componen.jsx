import React, { Component } from "react";
import FromInput from "../form-input/form-input.componen";
import CustomButton from "../custom-button/custom-button-componen";
import {
   auth,
   createUserProfileDocument,
} from "../../firebase/firebase.utils.js";
import "./sign-up.styles.scss";

export class SignUp extends Component {
   constructor() {
      super();

      this.state = {
         displayName: "",
         email: "",
         password: "",
         confrimPassword: "",
      };
   }

   handleSubmit = async (event) => {
      event.preventDefault();

      const { displayName, email, password, confrimPassword } = this.state;

      if (password !== confrimPassword) {
         alert("password don't match");
         return;
      }

      try {
         const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
         );

         await createUserProfileDocument(user, { displayName });

         this.setState({
            displayName: "",
            email: "",
            password: "",
            confrimPassword: "",
         });
      } catch (error) {
         console.error(error);
      }
   };

   handleChange = (event) => {
      const { name, value } = event.target;

      this.setState({ [name]: value });
   };
   render() {
      const { displayName, email, password, confrimPassword } = this.state;
      return (
         <div className="sign-up">
            <h2 className="title">i do not have a account </h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
               <FromInput
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={this.handleChange}
                  label="Display Name"
                  required
               />
               <FromInput
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  label="Email"
                  required
               />
               <FromInput
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  label="Password"
                  required
               />
               <FromInput
                  type="confrimPassword"
                  name="confrimPassword"
                  value={confrimPassword}
                  onChange={this.handleChange}
                  label="confrim Password"
                  required
               />
               <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
         </div>
      );
   }
}

export default SignUp;
