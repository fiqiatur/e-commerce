import React, { Component } from "react";
import "./sign-in.componen.style.scss";

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

            <form onSubmit={this.handleSubmit}>
               <label>Email</label>
               <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
               />
               <label>Password</label>

               <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
               />

               <input type="submit" value="Login" />
            </form>
         </div>
      );
   }
}

export default SignIn;
