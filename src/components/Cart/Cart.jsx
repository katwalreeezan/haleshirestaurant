import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  remove,
  removeall,
} from "../../store/cartSlice";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector((state) => state.cart);

  return (
    <div>
      <div className="md:max-w-[900px]  max-w-[350px] mx-auto mt-12 mb-56">
        {cart.length === 0 && (
          <div className="text-center font-mono font-extrabold text-2xl border">
            Your Cart Is Empty
            <p><img src='https://cdn-icons-png.flaticon.com/512/2038/2038854.png' alt='empty' className="mx-auto w-40 h-auto py-2 "/></p>
          </div>
        )}
        {cart.length !== 0 && (
          <h1 className="text-center font-poppins text-2xl max-w-sm bg-black text-white mx-auto">
            Order Food Online
          </h1>
        )}
        <div className="flex flex-col  max-w-[900px] mx-auto ">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border border-black my-4 text-center  md:flex items-center justify-between px-3 py-2  "
            >
              <img
                src={item.image}
                alt="/"
                className="w-64 h-56 md:mx-0 mx-auto "
              />

              <h1 className="text-xl py-2">{item.title}</h1>
              <p className="py-2 italic"> Price: Rs{item.price}</p>
              <p>
                {" "}
                <button
                  className="rounded-md py-[3px] mr-1  "
                  onClick={() => dispatch(increaseItemQuantity(item))}
                >
                  +
                </button>
                <input
                  type="text"
                  value={item.quantity}
                  className="border border-black w-5 mb-3"
                />
                <button
                  className="rounded-md  py-[3px] ml-1  "
                  onClick={() => dispatch(decreaseItemQuantity(item))}
                >
                  -
                </button>
              </p>
              <button onClick={() => dispatch(remove(item))}>Remove</button>
            </div>
          ))}
        </div>
        <div className="text-center ">
          {cart.length !== 0 && (
            <p className="my-3 font-extrabold text-xl underline italic">
              Total Price:Rs {totalPrice}
            </p>
          )}
          {cart.length === 0 ? (
            ""
          ) : (
            <div className="flex max-w-[900px] mx-auto justify-between">
              <button
                className="block rounded-lg px-6 bg-red-700 hover:bg-red-500 duration-300"
                onClick={() => dispatch(removeall())}
              >
                Remove All
              </button>
              <Link to="/checkout">
                <button className="block rounded-lg px-6 bg-green-700 hover:bg-green-500 duration-300">
                  Checkout
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
