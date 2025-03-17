import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(addToCart(product))}
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
