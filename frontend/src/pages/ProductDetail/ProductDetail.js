// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // Ensure you're importing useParams
// import { FaHeart } from 'react-icons/fa';
// import './ProductDetail.css';

// const ProductDetail = () => {
//     const { slug } = useParams(); // Capture the slug from the URL
//     const [product, setProduct] = useState(null);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         console.log("Fetched slug from URL:", encodeURIComponent(slug)); // Debugging line
//         if (slug) {
//             // Fetch product details from backend using the slug
//             const fetchProduct = async () => {
//                 try {
//                     const response = await fetch(`http://127.0.0.1:8000/products/${encodeURIComponent(slug)}`,);
//                     if (!response.ok) {
//                         throw new Error('Product not found');
//                     }
//                     const data = await response.json();
//                     console.log(data)
//                     setProduct(data);
//                 } catch (error) {
//                     console.error("Error fetching product:", error);
//                 }
//             };

//             fetchProduct();
//         }
//     }, [slug]);

//     if (!product) {
//         return <div>Loading product details...</div>;
//     }

//     const handleImageClick = (index) => {
//         setCurrentImageIndex(index);
//     };

//     return (
//         <div className="container mt-4">
//             <div className="row card-wrapper">
//                 {/* Product Image Slider */}
//                 <div className="col-md-6 card">
//                     <div className="product-imgs">
//                         <div className="img-display">
//                             <div className="img-showcase">
//                                 {product.images.map((image, index) => (
//                                     <img
//                                         key={index}
//                                         src={image}
//                                         alt={`Product image ${index + 1}`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="img-select">
//                             {product.images.map((image, index) => (
//                                 <div className="img-item" key={index}>
//                                     <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(index); }}>
//                                         <img src={image} alt={`Thumbnail ${index + 1}`} />
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Product Details */}
//                 <div className="col-md-6">
//                     <h3 className="product-title">{product.name}</h3>
//                     <p className="product-description">{product.description}</p>
//                     <p className="product-price">₹{product.price}</p>

//                     {/* Add to Cart and Wishlist Buttons */}
//                     <div className="d-flex align-items-center">
//                         <button className="btn btn-primary add-to-cart mr-3">Add to Cart</button>
//                         <button className="btn btn-outline-secondary">
//                             <FaHeart /> Add to Wishlist
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetail;
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import "react-rater/lib/react-rater.css";

const ProductDetail = () => {
  const { slug } = useParams(); // Capture the slug from the URL
  const [product, setProduct] = useState(null); // Product state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details using the slug
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/products/${encodeURIComponent(slug)}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  // Define class names for buttons
  const plusMinuceButton =
    "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";

  return (
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      {/* Image gallery */}
      <div className="container mx-auto px-4">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={product.images.map(image => ({
            original: image,
            thumbnail: image,
          }))}
        />
      </div>

      {/* Product Description */}
      <div className="mx-auto px-5 lg:px-5">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {product.name}
        </h2>
        <div className="mt-1">
          <div className="flex items-center">
            <Rater
              style={{ fontSize: "20px" }}
              total={5}
              interactive={false}
              rating={product.rating || 0} // Use fetched rating
            />
            <p className="ml-3 text-sm text-gray-400">({product.reviews || 0})</p>
          </div>
        </div>
        <p className="mt-5 font-bold">
          Availability:{" "}
          {product.availability ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Expired</span>
          )}
        </p>
        <p className="font-bold">Brand: <span className="font-normal">{product.brand}</span></p>
        <p className="font-bold">Category: <span className="font-normal">{product.category}</span></p>
        <p className="font-bold">SKU: <span className="font-normal">{product.sku}</span></p>
        <p className="mt-4 text-4xl font-bold text-violet-900">
          ${product.price}
          {product.previousPrice && (
            <span className="text-xs text-gray-400 line-through"> ${product.previousPrice}</span>
          )}
        </p>
        <p className="pt-5 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Size Options */}
        {product.size && (
          <div className="mt-6">
            <p className="pb-2 text-xs text-gray-500">Size</p>
            <div className="flex gap-1">
              {product.size.map((size, index) => (
                <div key={index} className={plusMinuceButton}>{size}</div>
              ))}
            </div>
          </div>
        )}

        {/* Color Options */}
        {/* {product.color && (
          <div className="mt-6">
            <p className="pb-2 text-xs text-gray-500">Color</p>
            <div className="flex gap-1">
              {product.color.map((color, index) => (
                <div
                  key={index}
                  className={`h-8 w-8 cursor-pointer border border-white bg-${color}-600 focus:ring-2 focus:ring-${color}-500 active:ring-2 active:ring-${color}-500`}
                />
              ))}
            </div>
          </div>
        )} */}

        {/* Quantity Selection */}
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex">
            <button className={plusMinuceButton}>−</button>
            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">1</div>
            <button className={plusMinuceButton}>+</button>
          </div>
        </div>

        {/* Add to Cart and Wishlist Buttons */}
        <div className="mt-7 flex flex-row items-center gap-6">
          <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
            <BiShoppingBag className="mx-2" />
            Add to cart
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
            <AiOutlineHeart className="mx-2" />
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
