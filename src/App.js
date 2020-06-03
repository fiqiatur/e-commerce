import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "./components/header/header.component";
import Sign from "./pages/singn-singup/signin-up";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends Component {
   constructor() {
      super();

      this.state = {
         currentUser: null,
      };
   }

   unsubscribeFromAuth = null;

   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
         this.setState({ currentUser: user });

         console.log(user);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
               <Route exact path="/" component={Homepage} />
               <Route path="/shop" component={ShopPage} />
               <Route path="/signin" component={Sign} />
            </Switch>
         </div>
      );   
   }
}

export default App;
