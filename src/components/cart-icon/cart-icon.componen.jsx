import React from "react";

import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import { ReactComponent as ShopingIcon } from "../../asset/11.2 shopping-bag.svg.svg";

import "./cart-icon.styles.scss";
import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden }) => (
   <div className="cart-icon" onClick={toggleCartHidden}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">0</span>
   </div>
);

const mapDispatchToProps = (dispatch) => ({
   toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
