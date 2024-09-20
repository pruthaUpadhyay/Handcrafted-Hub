import './Category.css';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { WishlistContext } from '../../Context/WishlistContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function Category() {
    const [products, setProducts] = useState([]);
    const { categoryType } = useParams(); // Get the categoryType from URL params
    const { wishlistItems, toggleWishlist } = useContext(WishlistContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/categories/', {
                    params: { category: categoryType } // Pass categoryType as a query parameter
                });
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [categoryType]); // Re-fetch products if categoryType changes

    const handleProductClick = (product) => {
        navigate(`/products/${product.slug}`);
    };

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    {products.map(product => {
                        const isInWishlist = wishlistItems.some(item => item.product_id === product._id);

                        return (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <div className="card product-card">
                                    <img
                                        src={product.images[0] ? process.env.PUBLIC_URL + product.images[0] : 'default-image-url'}
                                        className="card-img-top product-img"
                                        alt={product.name}
                                        onClick={() => handleProductClick(product)}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="product-price">₹{product.price}</p>
                                        <div className="center-container">
                                            <button
                                                className={`wishlist-icon ${isInWishlist ? 'in-wishlist' : ''}`}
                                                onClick={() => toggleWishlist(product._id, product.name)}
                                                aria-label={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                                            >
                                                {isInWishlist ? <FaHeart /> : <FaRegHeart />} WISHLIST
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
