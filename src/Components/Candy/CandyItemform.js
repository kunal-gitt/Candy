import classes from "./CandyItemform.module.css";
import CartContext from "../Store/CartContext";
import { useContext, useState } from "react";

const CandyItemForm = (props) => {
  const cartctx = useContext(CartContext);

  const [currentquantity, setcurrentquantity] = useState(1);

  const addItemToCart = (event) => {
    event.preventDefault();

    cartctx.additem({ ...props.item, quantity: currentquantity });

    setcurrentquantity((prev) => {
      return prev + 1;
    });
  };

  return (
    <form className={classes.form}>
      <button onClick={addItemToCart}>ADD TO CART</button>
    </form>
  );
};

export default CandyItemForm;
