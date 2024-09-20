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
// import { AiOutlineHeart } from "react-icons/ai";
// import ReactImageGallery from "react-image-gallery";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";

// const ProductDetail = () => {
//   const { slug } = useParams(); // Capture the slug from the URL
//   const [product, setProduct] = useState(null); // Product state
//   const [loading, setLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1); // Initial quantity

//   useEffect(() => {
//     // Fetch product details using the slug
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/products/${encodeURIComponent(slug)}`);
//         if (!response.ok) {
//           throw new Error('Product not found');
//         }
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) {
//       fetchProduct();
//     }
//   }, [slug]);

//   const handleQuantityChange = (action) => {
//     if (action === "increase" && quantity < product.stock) {
//       setQuantity(quantity + 1);
//     } else if (action === "decrease" && quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   if (loading) {
//     return <div>Loading product details...</div>;
//   }

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   // Define class names for buttons
//   const plusMinuceButton =
//     "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";

//   return (
//     <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
//       {/* Image gallery */}
//       <div className="container mx-auto px-4">
//         <ReactImageGallery
//           showBullets={false}
//           showFullscreenButton={false}
//           showPlayButton={false}
//           items={product.images.map(image => ({
//             original: image,
//             thumbnail: image,
//           }))}
//         />
//       </div>

//       {/* Product Description */}
//       <div className="mx-auto px-5 lg:px-5">
//         <h2 className="pt-3 text-2xl font-bold lg:pt-0">
//           {product.name}
//         </h2>
//         <p className="font-bold">Category: <span className="font-normal">{product.category}</span></p>
//         <p className="mt-4 text-4xl font-bold text-violet-900">
//         ₹{product.price} INR
//         </p>
//         <p className="pt-5 text-sm leading-5 text-gray-500">
//           {product.description}
//         </p>

//         {/* Stock Availability */}
//         <p className="font-bold">
//           Stock:{" "}
//           {product.stock > 0 ? (
//             <span className="text-green-600">{product.stock} left</span>
//           ) : (
//             <span className="text-red-600">Out of Stock</span>
//           )}
//         </p>

//         {/* Size Options */}
//         {product.has_sizes && product.sizes.length > 0 && (
//           <div className="mt-6">
//             <p className="pb-2 text-xs text-gray-500">Size</p>
//             <div className="flex gap-1">
//               {product.sizes.map((size, index) => (
//                 <div key={index} className={plusMinuceButton}>{size}</div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Quantity Selection */}
//         <div className="mt-6">
//           <p className="pb-2 text-xs text-gray-500">Quantity</p>
//           <div className="flex items-center">
//             <button className={plusMinuceButton} onClick={() => handleQuantityChange("decrease")}>−</button>
//             <div className="flex h-8 w-8 items-center justify-center border-t border-b">{quantity}</div>
//             <button className={plusMinuceButton} onClick={() => handleQuantityChange("increase")}>+</button>
//           </div>
//           <p className="text-xs text-gray-500">Max available: {product.stock}</p>
//         </div>

//         {/* Add to Cart and Wishlist Buttons */}
//         <div className="mt-7 flex flex-row items-center gap-6">

//             <AddToCartButton productId={product._id}/>
//             <h1>{product._id}</h1>

//           <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
//             <AiOutlineHeart className="mx-2" />
//             Wishlist
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetail;
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ReactImageGallery from "react-image-gallery";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';
import { WishlistContext } from '../../Context/WishlistContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './ProductDetail.css'
const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  // const [isInWishlist, setIsInWishlist] = useState(false);
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/products/${encodeURIComponent(slug)}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
        // Check if the product is in the wishlist (mocked for now)
        // const wishlistResponse = await axios.get('http://127.0.0.1:8000/user/wishlist');
        // const wishlist = wishlistResponse.data;
        // setIsInWishlist(wishlist.includes(data._id));
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

  const handleQuantityChange = async (action) => {
    if (action === "increase" && quantity < product.stock) {
      setQuantity(quantity + 1);
      await updateStock(product._id, 1); // Increment stock by 1
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
      await updateStock(product._id, -1); // Decrement stock by 1
    }
  };
  
  const updateStock = async (productId, change) => {
    try {
      await axios.patch(`http://127.0.0.1:8000/products/${productId}/update-stock/`, {
        change,
      });
    } catch (error) {
      console.error("Error updating stock:", error);
    }
  };
  
  
  // In the render method
  console.log('Current quantity:', quantity); // Debugging log
  
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };
  
  if (loading) {
    return <div>Loading product details...</div>;
  }
  const isInWishlist = wishlistItems.some(item => item.product_id === product._id);
  
  if (!product) {
    return <div>Product not found.</div>;
  }
  
  const plusMinuceButton =
  "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
  
  return (
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
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

      <div className="mx-auto px-5 lg:px-5">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {product.name}
        </h2>
        <p className="font-bold">Category: <span className="font-normal">{product.category}</span></p>
        <p className="mt-4 text-4xl font-bold text-violet-900">
          ₹{product.price} INR
        </p>
        <p className="pt-5 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        <p className="font-bold">
          Stock:{" "}
          {product.stock > 0 ? (
            <span className="text-green-600">{product.stock} left</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </p>

        {product.has_sizes && product.sizes.length > 0 && (
          
          <div className="mt-6">
            <p className="pb-2 text-xs text-gray-500">Size</p>
            <div className="flex gap-1">
              {product.sizes.map((size, index) => (
                <div
                  key={index}
                  className={`${plusMinuceButton} ${selectedSize === size ? 'bg-gray-200' : ''}`}
                  onClick={() => handleSizeSelection(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex items-center">
            <button className={plusMinuceButton} onClick={() => handleQuantityChange("decrease")}>−</button>
            <div className="flex h-8 w-8 items-center justify-center border-t border-b">{quantity}</div>
            <button className={plusMinuceButton} onClick={() => handleQuantityChange("increase")}>+</button>
          </div>
          <p className="text-xs text-gray-500">Max available: {product.stock}</p>
        </div>

        <div className="mt-7 flex flex-row items-center gap-6">
          <div className="center-container">
          <AddToCartButton
            productId={product._id}
            quantity={quantity}
            selectedSize={selectedSize} // Pass selectedSize to the button component
          />
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
    </section>
  );
};

export default ProductDetail;
