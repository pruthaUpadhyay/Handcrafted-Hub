import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Ensure you're importing useParams
import { FaHeart } from 'react-icons/fa';
import './ProductDetail.css';

const ProductDetail = () => {
    const { slug } = useParams(); // Capture the slug from the URL
    const [product, setProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        console.log("Fetched slug from URL:", slug); // Debugging line
        if (slug) {
            // Fetch product details from backend using the slug
            const fetchProduct = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/products/${encodeURIComponent(slug)}`);
                    if (!response.ok) {
                        throw new Error('Product not found');
                    }
                    const data = await response.json();
                    setProduct(data);
                } catch (error) {
                    console.error("Error fetching product:", error);
                }
            };

            fetchProduct();
        }
    }, [slug]);

    if (!product) {
        return <div>Loading product details...</div>;
    }

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="container mt-4">
            <h1>products</h1>
            <div className="row card-wrapper">
                {/* Product Image Slider */}
                <div className="col-md-6 card">
                    <div className="product-imgs">
                        <div className="img-display">
                            <div className="img-showcase">
                                {product.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Product image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="img-select">
                            {product.images.map((image, index) => (
                                <div className="img-item" key={index}>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(index); }}>
                                        <img src={image} alt={`Thumbnail ${index + 1}`} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">₹{product.price}</p>

                    {/* Add to Cart and Wishlist Buttons */}
                    <div className="d-flex align-items-center">
                        <button className="btn btn-primary add-to-cart mr-3">Add to Cart</button>
                        <button className="btn btn-outline-secondary">
                            <FaHeart /> Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
