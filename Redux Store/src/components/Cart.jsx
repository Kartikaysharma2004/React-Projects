import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  increaseProduct,
  decreaseProduct,
} from "../Redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);
  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="p-4 mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center sm:text-left max-sm:font-semibold max-sm:text-lg">
        Your Cart
      </h1>
      <div>
        {cartitems.length === 0 ? (
          <p className="text-center max-sm:text-xs col-span-full">
            Your Cart is empty!
          </p>
        ) : (
          cartitems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 mb-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
            >
              <img
                src={item.image}
                alt={item.image}
                className="w-16 h-16 object-contain max-sm:w-20 max-sm:h-36"
              />
              <div className="flex-1 text-center">
                <h5 className="text-lg font-semibold mb-2 max-sm:text-sm line-clamp-2">
                  {item.title}
                </h5>
                <h6 className="text-gray-600 font-medium">${item.price}</h6>
              </div>
              <div className="max-sm:flex">
                <button
                  className="bg-gray-500 text-white px-3 py-2 font-semibold max-sm:text-xs rounded ml-2 hover:bg-gray-600"
                  onClick={() => dispatch(increaseProduct(item.id))}
                >
                  +
                </button>
                <span className="font-semibold text-lg mx-3 max-sm:text-sm max-sm:mt-1.5">
                  {item.quantity}
                </span>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2 max-sm:text-xs font-semibold hover:bg-gray-600"
                  onClick={() => dispatch(decreaseProduct(item.id))}
                >
                  -
                </button>
              </div>

              <button
                className="bg-red-500 text-white px-4 py-2 max-sm:text-sm max-sm:py-2 max-sm:mt-3 rounded hover:bg-red-600 transition"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
