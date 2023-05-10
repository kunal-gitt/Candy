import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../Store/CartContext";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  let Quantity = 0;
  ctx.items.forEach((item) => {
    Quantity = Quantity + Number(item.quantity);
  });

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{Quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
