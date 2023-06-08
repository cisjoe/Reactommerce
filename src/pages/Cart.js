import { useDispatch, useSelector } from "react-redux";
import action from "../store/actionCreator";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleDeleteOnDecrement(prod) {
    if (prod.quantity > 1) {
      dispatch(action("decrement", prod));
    } else {
      dispatch(action("delete-from-cart", prod));
    }
  }

  const totalPrice = cart.reduce((acc, prod) => {
    acc += prod.price * prod.quantity;
    return +acc;
  }, 0);

  const cartEles = cart.map((prod) => {
    return (
      <div className="item-row" key={prod.id}>
        <img src={prod.thumbnail} className="item-row-img" />
        <div className="title-price--holder">
          <h3 className="item-row-title" title={prod.title}>
            {prod.title}
          </h3>
          <span className="item-row-price">${prod.price}</span>
        </div>
        <div className="item-row-q-div">
          <button
            className="item-row-dec"
            onClick={() => handleDeleteOnDecrement(prod)}
          >
            -
          </button>
          <h1 className="item-row-quantity">{prod.quantity}</h1>
          <button
            className="item-row-inc"
            onClick={() => dispatch(action("increment", prod))}
          >
            +
          </button>
        </div>
        <span className="item-row-total-price">
          ${+prod.price * prod.quantity}
        </span>
        <button
          className="item-row-delete-item"
          onClick={() => dispatch(action("delete-from-cart", prod))}
        >
          x
        </button>
      </div>
    );
  });
  return (
    <div className="Cart sec-padding">
      {cart.length < 1 ? (
        <h3 className="no-items-in-cart py-5">No Items In Cart</h3>
      ) : (
        <>
          <h2 className="main-title py-3">Cart</h2>
          <div className="items-rows">{cartEles}</div>
          <div className="checkout">
            <button
              className="clear-cart"
              onClick={() => dispatch(action("clear-cart", ""))}
            >
              Clear Cart
            </button>
            <div className="total-checkout--holder">
              <p className="cart-total-price">
                TOTAL: ${totalPrice.toFixed(2)}
              </p>
              <button
                className="checkout-btn"
                onClick={() => dispatch(action("clear-cart", ""))}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
