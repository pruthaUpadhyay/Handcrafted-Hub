import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Cart from './pages/Cart/Cart';
import MyAccount from './pages/MyAccount/MyAccount';


import ProductDetail from './pages/ProductDetail/ProductDetail';
import Header from './components/Header/Header';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from '../src/Context/CartContext';

import Login from '../src/components/auth/Login';

import SignUp from '../src/components/auth/Signup';
import AuthProvider from './Context/AuthContext';
import { WishlistProvider } from './Context/WishlistContext';
import SearchResults from './pages/SearchResults/SearchResults';
import CheckoutPage from './pages/Checkout/Checkout';
import Testimonials from './pages/Testimonials/Testimonials';


// import NewArrivals from './components/NewArrivals';
// import Testimonials from './components/Testimonials';
// import GovNews from './components/GovNews';
// import Categories from './components/Categories';
// import Product from './components/Product';
// import StateHandicrafts from './components/StateHandicrafts';

function App() {
    return (

        <Router>
            <AuthProvider>
                <CartProvider>
                    <WishlistProvider>
                        <div>
                            <Header></Header>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<SignUp />} />
                                <Route path="/category/men/:categoryType" element={<Category />} />
                                <Route path="/category/women/:categoryType" element={<Category />} />
                                <Route path="/category/home-decor/:categoryType" element={<Category />} />
                                <Route path="/products/:slug" element={<ProductDetail />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/my-account" element={<MyAccount />} />
                                
                                <Route path="/testimonials" element={<Testimonials/>} />

                                {/* <Route path="/order-confirmation" component={OrderConfirmationPage} /> */}


                                {/*<Route path="/newarrivals" element={<NewArrivals />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/govnews" element={<GovNews />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/statehandicrafts" element={<StateHandicrafts />} /> */}
                            </Routes>
                            {/* <Footer /> */}
                        </div>
                    </WishlistProvider>
                </CartProvider>
            </AuthProvider>
        </Router>
        // <>
        //         <Signup/>
        //         {/* <Home/> */}
        //     </>
    );
}

export default App;
