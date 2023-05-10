import classes from "./CandyItem.module.css";
import CandyItemForm from "./CandyItemform";

const CandyItem = (props) => {
  const price = `Rs${props.price}`;

  return (
    <li className={classes.medicine}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <CandyItemForm id={props.id} item={props} />
      </div>
    </li>
  );
};

export default CandyItem;
