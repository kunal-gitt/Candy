import { useContext, useState } from "react";
import classes from "./AddProduct.module.css";
import CartContext from "../Store/CartContext";

const AddProduct = (props) => {
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState("");

  const ctx = useContext(CartContext);

  const addtolisthandler = (e) => {
    e.preventDefault();

    const obj = {
      id: Math.random(),
      name: name,
      description: desc,
      price: Number(price),
    };

    ctx.setproductlist((prev) => {
      // repeated name data
      return [obj, ...prev];
    });
  };
  const onprice = (e) => {
    setprice(e.target.value);
  };

  const onname = (e) => {
    setname(e.target.value);
  };

  const ondesc = (e) => {
    setdesc(e.target.value);
  };

  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form>
        <label>Candy name : </label>
        <input type="text" onChange={onname}></input>
        <label>Description : </label>
        <input type="text" onChange={ondesc}></input>
        <label>Price : </label>
        <input type="number" onChange={onprice}></input>
        <button className={classes.button} onClick={addtolisthandler}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
