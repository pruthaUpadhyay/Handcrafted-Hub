import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/products/search/?query=${query}/`);
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        setError('Error fetching search results.');
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      {products.length > 0 ? (
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <a href={`/products/${product.slug}`}>View Product</a>
            </div>
          ))}
        </div>
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
};

export default SearchResults;
