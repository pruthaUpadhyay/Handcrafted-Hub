import './BestSeller.css'; // Assuming you have a CSS file for styles
import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { WishlistContext } from '../../Context/WishlistContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const BestSeller = () => {
    const [products, setProducts] = useState([]);
    const { wishlistItems, toggleWishlist } = useContext(WishlistContext);
    // Fetch products from the API
    useEffect(() => {
        fetch('http://127.0.0.1:8000/products/') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => {
                // Filter products that have the "Best Seller" tag
                const bestSellerProducts = data.filter(product => product.isBestSeller || (product.tags && product.tags.includes("Best Seller")));
                setProducts(bestSellerProducts);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (

        <div>
            <section className="most_loved_section section is-width-wide has-gutter-enabled custom_section">
                <div className="heading_most_loved secHead page-width">
                    <h2 className="main_heading text-center">
                        {/* SVG Title */}
                        <div class="best-seller">
                            <h1>BEST SELLER</h1>
                            <h2>श्रेष्ठ विक्रेता</h2>
                        </div>
                    </h2>
                </div>
                <section id="product1" className="section-p1">
                    <div className="pro-container">
                        {products.map(product => {
                            // Check if the product is in the wishlist
                            const isInWishlist = wishlistItems.some(item => item.product_id === product._id);

                            return (
                                <div className="pro" key={product._id}>
                                    <Link to={`/products/${product.slug}`}>
                                        <img src={process.env.PUBLIC_URL + product.images[0]} alt={product.name} />
                                    </Link>
                                    <div className="des">
                                        <span>{product.brand}</span>
                                        <h5>{product.name}</h5>
                                        <div className="star">
                                            {[...Array(5)].map((_, index) => (
                                                <i
                                                    key={index}
                                                    className={index < product.rating ? 'bx bxs-star' : 'bx bx-star'}
                                                />
                                            ))}
                                        </div>
                                        <div className="price-wishlist">
                                            <h4>₹{product.price}</h4>
                                            <button
                                                className={`wishlist-icons ${isInWishlist ? 'in-wishlists' : ''}`}
                                                onClick={() => toggleWishlist(product._id, product.name)}
                                                aria-label={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                                            >
                                                {isInWishlist ? <FaHeart /> : <FaRegHeart />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </section>
        </div>
    );
};

export default BestSeller;
