import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // Font Awesome Heart icon
import './ProductDetail.css';

const ProductDetail = () => {
    const { productName } = useParams();

    // Sample products data. In a real app, fetch data based on productName.
    const products = [
        {
            id: 1,
            name: "Fluted Hem Dress",
            description: "A stylish summer dress with a fluted hem.",
            price: 39,
            images: [
                "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg",
                "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg",
                "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg",
                "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
            ]
        },
        // Add other products here...
    ];

    // Find the selected product based on the productName
    const product = products.find(p => p.name === decodeURIComponent(productName));

    // State for managing the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to handle image clicks
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
    };

    // Effect to handle image slider on window resize
    useEffect(() => {
        const handleResize = () => {
            const displayWidth = document.querySelector('.img-showcase img').clientWidth;
            document.querySelector('.img-showcase').style.transform = `translateX(${-currentImageIndex * displayWidth}px)`;
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial setup

        return () => window.removeEventListener('resize', handleResize);
    }, [currentImageIndex]);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mt-4">
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
