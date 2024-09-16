import './Category.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function Category() {
    const [products, setProducts] = useState([]);
    const { categoryType } = useParams(); // Get the categoryType from URL params
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
                    {products.map(product => (
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
