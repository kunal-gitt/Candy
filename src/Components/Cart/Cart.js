import { useContext } from "react";
import CartContext from "../Store/CartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalprice = `Rs${ctx.totalAmount.toFixed(2)}`;

  const hasitems = ctx.items.length > 0;

  const cartItemRemoveHandler = (item) => {
    ctx.removeitem({ ...item, quantity: 1 });
  };

  const cartItemAddHandler = (item) => {
    ctx.additem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={Math.random()}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalprice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasitems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
