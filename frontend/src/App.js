import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Header from './components/Header/Header';
// import BestSellers from './components/BestSellers';
// import NewArrivals from './components/NewArrivals';
// import Testimonials from './components/Testimonials';
// import GovNews from './components/GovNews';
// import Categories from './components/Categories';
// import Product from './components/Product';
// import StateHandicrafts from './components/StateHandicrafts';

function App() {
    return (
        <Router>
            <div>
            <Header></Header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/category/:productName" element={<ProductDetail />} />
                    {/*<Route path="/newarrivals" element={<NewArrivals />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/govnews" element={<GovNews />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/statehandicrafts" element={<StateHandicrafts />} /> */}
                </Routes>
                {/* <Footer /> */}
            </div>
        </Router>
        // // <>
        //     {/* <Signup/> */}
        //     {/* <Home/> */}
        // // </>
    );
}

export default App;
