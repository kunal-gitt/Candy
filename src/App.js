import React, { useState } from "react";
import Candy from "./Components/Candy/Candy";
import "./App.css";
import CartProvider from "./Components/Store/CartProvider";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Candy />
      </main>
    </CartProvider>
  );
}

export default App;
