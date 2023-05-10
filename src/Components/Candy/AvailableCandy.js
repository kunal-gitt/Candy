import Card from "../UI/Card";
import CandyItem from "./CandyItem";
import classes from "./AvailableCandy.module.css";
import { useContext } from "react";
import CartContext from "../Store/CartContext";

const AvailableCandy = () => {
  const ctx = useContext(CartContext);

  const medicinelist = ctx.productlist.map((medicine) => (
    <CandyItem
      id={medicine.id}
      key={medicine.id}
      name={medicine.name}
      description={medicine.description}
      price={medicine.price}
    />
  ));

  return (
    <section className={classes.medicine}>
      <Card>
        <ul>{medicinelist}</ul>
      </Card>
    </section>
  );
};

export default AvailableCandy;
