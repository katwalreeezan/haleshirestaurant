import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, removeall } from "../../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart);
  const total=product.reduce((acc,product)=>acc+product.price,0)
  return (
    <div className="md:max-w-[1320px] max-w-[350px] mx-auto my-12">
      {product.length === 0 && (
        <div className="text-center font-mono font-extrabold text-2xl border border-black">
          Your Cart Is Empty
        </div>
        
      )}
      {product.length!==0 &&(<h1 className="text-center font-poppins text-2xl max-w-sm bg-black text-white mx-auto">Order Food Online</h1>)}
      <div className="flex flex-col  max-w-[900px] mx-auto">
        {product.map((item) => (
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
            <p className="py-2"> Price: Rs{item.price}</p>
            <button onClick={() => dispatch(remove(item))}>Remove</button>
          </div>
        ))}
      </div>
      <div className="text-center ">
       {product.length!==0 &&(<p className="my-3 font-extrabold text-xl underline">Total Price:Rs {total}</p>)}
        {product.length === 0 ? (
          ""
        ) : (
          <div className="flex max-w-[900px] mx-auto justify-between">
          <button className="block rounded-lg px-6 bg-red-700 hover:bg-red-500 duration-300" onClick={() => dispatch(removeall())}>Remove All</button>
          <Link to ='/checkout'><button className="block rounded-lg px-6 bg-green-700 hover:bg-green-500 duration-300">Checkout</button></Link>
          </div>
        )}
         
        
      </div>
      
      
    </div>
  );
};

export default Cart;
