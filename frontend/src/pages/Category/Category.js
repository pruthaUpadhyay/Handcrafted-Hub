import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';

export default function Category() {
    const navigate = useNavigate();

    const products = [
        {
            "id": 1,
            "name": "Fluted Hem Dress",
            "description": "A stylish summer dress with a fluted hem.",
            "price": 39,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg"
        },
        {
            "id": 2,
            "name": "Casual Shirt",
            "description": "Comfortable casual shirt for everyday wear.",
            "price": 25,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg"
        },
        {
            "id": 3,
            "name": "Leather Bag",
            "description": "Elegant leather bag perfect for office and outings.",
            "price": 75,
            "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg"
        }
    ];

    const handleProductClick = (productName) => {
        navigate(`/category/${encodeURIComponent(productName)}`);
    };

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    {products.map(product => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card product-card">
                                <img
                                    src={product.image}
                                    className="card-img-top product-img"
                                    alt={product.name}
                                    onClick={() => handleProductClick(product.name)}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="product-price">${product.price}</p>
                                    <button className="btn btn-primary add-to-cart">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
