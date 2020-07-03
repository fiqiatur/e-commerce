import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "./components/header/header.component";
// import Sign from "./pages/singn-singup/signin-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";
import { setCurrentUser } from "./redux/user/user.actions";
import SignInUp from "./pages/singn-singup/signin-up";
// import SignIn from "./components/sign-in/sign-in.componen";

class App extends Component {
   unsubscribeFromAuth = null;

   componentDidMount() {
      const { setCurrentUser } = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot((snapShot) => {
               setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data(),
               });
            });
         }
         setCurrentUser(userAuth);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path="/" component={Homepage} />
               <Route path="/shop" component={ShopPage} />
               <Route
                  exact
                  path="/signin"
                  render={() =>
                     this.props.currentUser ? <Redirect to="/" /> : <SignInUp />
                  }
               />
            </Switch>
         </div>
      );
   }
}

const mapStateToProps = ({ user }) => ({
   currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
