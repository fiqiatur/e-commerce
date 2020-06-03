import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "./components/header/header.component";
import Sign from "./pages/singn-singup/signin-up";
import "./App.css";
import { auth } from "./firebase/firebase.utils";

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

   componentWillMount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div>
            <Header />
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
