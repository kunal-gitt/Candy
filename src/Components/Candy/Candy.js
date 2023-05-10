import React, { Fragment } from "react";
import AvailableCandy from "./AvailableCandy";
import AddProduct from "./AddProduct";

const Candy = (props) => {
  return (
    <Fragment>
      <AddProduct></AddProduct>
      <AvailableCandy />
    </Fragment>
  );
};

export default Candy;
