import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";

function App () {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { show } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);
  return (
    <main>
      {show && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
