import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { BiShoppingBag } from "react-icons/bi";

const AddToCartButton = ({ productId }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800" onClick={() => addToCart(productId)}>
            <BiShoppingBag className="mx-2"/>
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
