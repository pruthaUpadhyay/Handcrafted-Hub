import React from 'react'
import ItemList from '../../components/ItemList/ItemList';
import './Category.css'


export default function Category() {
    // const items = [
    //     {
    //       id: 1,
    //       name: 'Handcrafted Cotton Kurti',
    //       price: '₹1200',
    //       image: 'https://example.com/images/kurti1.jpg',
    //     },
    //     {
    //       id: 2,
    //       name: 'Printed Designer Kurta',
    //       price: '₹1500',
    //       image: '//itokri.com/cdn/shop/t/542/assets/component-rating.css?v=157771854592137137841718770854',
    //     },
    //     {
    //       id: 3,
    //       name: 'Traditional Silk Kurta',
    //       price: '₹2000',
    //       image: 'https://example.com/images/kurti3.jpg',
    //     },
    //     {
    //       id: 4,
    //       name: 'Floral Embroidered Kurti',
    //       price: '₹1800',
    //       image: 'https://example.com/images/kurti4.jpg',
    //     },
    //     {
    //       id: 5,
    //       name: 'Block Print Cotton Kurti',
    //       price: '₹1100',
    //       image: 'https://example.com/images/kurti5.jpg',
    //     },
    //     {
    //       id: 6,
    //       name: 'Long Anarkali Kurta',
    //       price: '₹2500',
    //       image: 'https://example.com/images/kurti6.jpg',
    //     },
    //   ];
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     // Replace with your data fetching logic
    //     fetch('/api/kurtis')
    //         .then(response => response.json())
    //         .then(data => setItems(data))
    //         .catch(error => console.error('Error fetching items:', error));
    // }, []);
    return (
        <div>
            <div id="wrapper">
            
                
                <div id="grid">
                    <div className="product">
                        <div className="info-large">
                            <h4>FLUTED HEM DRESS</h4>
                            <div className="sku">
                                PRODUCT SKU: <strong>89356</strong>
                            </div>
                            <div className="price-big">
                                <span>$43</span> $39
                            </div>
                            
                            
                            <button className="add-cart-large">Add To Cart</button>
                        </div>
                        <div className="make3D">
                            <div className="product-front">
                                <div className="shadow" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg" alt="" />
                                <div className="image_overlay" />
                                <div className="add_to_cart">Add to cart</div>
                                <div className="view_gallery">View gallery</div>
                                <div className="stats">
                                    <div className="stats-container">
                                        <span className="product_price">$39</span>
                                        <span className="product_name">FLUTED HEM DRESS</span>
                                        <p>Summer dress</p>
                                        <div className="product-options">
                                            <strong>SIZES</strong>
                                            <span>XS, S, M, L, XL, XXL</span>
                                            <strong>COLORS</strong>
                                            <div className="colors">
                                                <div className="c-blue"><span /></div>
                                                <div className="c-red"><span /></div>
                                                <div className="c-white"><span /></div>
                                                <div className="c-green"><span /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-back">
                                <div className="shadow" />
                                <div className="carousel">
                                    <ul className="carousel-container">
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg" alt="" /></li>
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg" alt="" /></li>
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg" alt="" /></li>
                                    </ul>
                                    <div className="arrows-perspective">
                                        <div className="carouselPrev">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                        <div className="carouselNext">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-back">
                                    <div className="cy" />
                                    <div className="cx" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="info-large">
                            <h4>PLEAT PRINTED DRESS</h4>
                            <div className="sku">
                                PRODUCT SKU: <strong>89356</strong>
                            </div>
                            <div className="price-big">
                                <span>$43</span> $39
                            </div>
                            
                            
                            <button className="add-cart-large">Add To Cart</button>
                        </div>
                        <div className="make3D">
                            <div className="product-front">
                                <div className="shadow" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg" alt="" />
                                <div className="image_overlay" />
                                <div className="add_to_cart">Add to cart</div>
                                <div className="view_gallery">View gallery</div>
                                <div className="stats">
                                    <div className="stats-container">
                                        <span className="product_price">$39</span>
                                        <span className="product_name">PLEAT PRINTED DRESS</span>
                                        <p>Summer dress</p>
                                        <div className="product-options">
                                            <strong>SIZES</strong>
                                            <span>XS, S, M, L, XL, XXL</span>
                                            <strong>COLORS</strong>
                                            <div className="colors">
                                                <div className="c-blue"><span /></div>
                                                <div className="c-red"><span /></div>
                                                <div className="c-white"><span /></div>
                                                <div className="c-green"><span /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-back">
                                <div className="shadow" />
                                <div className="carousel">
                                    <ul className="carousel-container">
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg" alt="" /></li>
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg" alt="" /></li>
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" /></li>
                                    </ul>
                                    <div className="arrows-perspective">
                                        <div className="carouselPrev">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                        <div className="carouselNext">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-back">
                                    <div className="cy" />
                                    <div className="cx" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="info-large">
                            <h4>FLOWY SHIRT DRESS</h4>
                            <div className="sku">
                                PRODUCT SKU: <strong>89356</strong>
                            </div>
                            <div className="price-big">
                                <span>$43</span> $39
                            </div>
                            
                            
                            <button className="add-cart-large">Add To Cart</button>
                        </div>
                        <div className="make3D">
                            <div className="product-front">
                                <div className="shadow" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg" alt="" />
                                <div className="image_overlay" />
                                <div className="add_to_cart">Add to cart</div>
                                <div className="view_gallery">View gallery</div>
                                <div className="stats">
                                    <div className="stats-container">
                                        <span className="product_price">$39</span>
                                        <span className="product_name">FLOWY SHIRT DRESS</span>
                                        <p>Summer dress</p>
                                        <div className="product-options">
                                            <strong>SIZES</strong>
                                            <span>XS, S, M, L, XL, XXL</span>
                                            <strong>COLORS</strong>
                                            <div className="colors">
                                                <div className="c-blue"><span /></div>
                                                <div className="c-red"><span /></div>
                                                <div className="c-white"><span /></div>
                                                <div className="c-green"><span /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-back">
                                <div className="shadow" />
                                <div className="carousel">
                                    <ul className="carousel-container">
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg" alt="" /></li>
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" /></li>
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg" alt="" /></li>
                                    </ul>
                                    <div className="arrows-perspective">
                                        <div className="carouselPrev">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                        <div className="carouselNext">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-back">
                                    <div className="cy" />
                                    <div className="cx" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="info-large">
                            <h4>DOUBLE LAYER DRESS</h4>
                            <div className="sku">
                                PRODUCT SKU: <strong>89356</strong>
                            </div>
                            <div className="price-big">
                                <span>$43</span> $39
                            </div>
                            
                            
                            <button className="add-cart-large">Add To Cart</button>
                        </div>
                        <div className="make3D">
                            <div className="product-front">
                                <div className="shadow" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" />
                                <div className="image_overlay" />
                                <div className="add_to_cart">Add to cart</div>
                                <div className="view_gallery">View gallery</div>
                                <div className="stats">
                                    <div className="stats-container">
                                        <span className="product_price">$39</span>
                                        <span className="product_name">DOUBLE LAYER DRESS</span>
                                        <p>Summer dress</p>
                                        <div className="product-options">
                                            <strong>SIZES</strong>
                                            <span>XS, S, M, L, XL, XXL</span>
                                            <strong>COLORS</strong>
                                            <div className="colors">
                                                <div className="c-blue"><span /></div>
                                                <div className="c-red"><span /></div>
                                                <div className="c-white"><span /></div>
                                                <div className="c-green"><span /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-back">
                                <div className="shadow" />
                                <div className="carousel">
                                    <ul className="carousel-container">
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" /></li>
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" /></li>
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
                                    </ul>
                                    <div className="arrows-perspective">
                                        <div className="carouselPrev">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                        <div className="carouselNext">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-back">
                                    <div className="cy" />
                                    <div className="cx" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="info-large">
                            <h4>BEAD DETAIL DRESS</h4>
                            <div className="sku">
                                PRODUCT SKU: <strong>89356</strong>
                            </div>
                            <div className="price-big">
                                <span>$43</span> $39
                            </div>
                            
                            
                            <button className="add-cart-large">Add To Cart</button>
                        </div>
                        <div className="make3D">
                            <div className="product-front">
                                <div className="shadow" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5.jpg" alt="" />
                                <div className="image_overlay" />
                                <div className="add_to_cart">Add to cart</div>
                                <div className="view_gallery">View gallery</div>
                                <div className="stats">
                                    <div className="stats-container">
                                        <span className="product_price">$39</span>
                                        <span className="product_name">BEAD DETAIL DRESS</span>
                                        <p>Summer dress</p>
                                        <div className="product-options">
                                            <strong>SIZES</strong>
                                            <span>XS, S, M, L, XL, XXL</span>
                                            <strong>COLORS</strong>
                                            <div className="colors">
                                                <div className="c-blue"><span /></div>
                                                <div className="c-red"><span /></div>
                                                <div className="c-white"><span /></div>
                                                <div className="c-green"><span /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-back">
                                <div className="shadow" />
                                <div className="carousel">
                                    <ul className="carousel-container">
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5.jpg" alt="" /></li>
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
                                    </ul>
                                    <div className="arrows-perspective">
                                        <div className="carouselPrev">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                        <div className="carouselNext">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-back">
                                    <div className="cy" />
                                    <div className="cx" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="info-large">
                            <h4>PLEATED DETAIL DRESS</h4>
                            <div className="sku">
                                PRODUCT SKU: <strong>89356</strong>
                            </div>
                            <div className="price-big">
                                <span>$43</span> $39
                            </div>
                            <h3>COLORS</h3>
                            <div className="colors-large">
                                <ul>
                                    <li><a href style={{ background: '#222' }}><span /></a></li>
                                    <li><a href style={{ background: '#6e8cd5' }}><span /></a></li>
                                    <li><a href style={{ background: '#9b887b' }}><span /></a></li>
                                    <li><a href style={{ background: '#44c28d' }}><span /></a></li>
                                </ul>
                            </div>
                            
                            <button className="add-cart-large">Add To Cart</button>
                        </div>
                        <div className="make3D">
                            <div className="product-front">
                                <div className="shadow" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" />
                                <div className="image_overlay" />
                                <div className="add_to_cart">Add to cart</div>
                                <div className="view_gallery">View gallery</div>
                                <div className="stats">
                                    <div className="stats-container">
                                        <span className="product_price">$39</span>
                                        <span className="product_name">PLEATED DETAIL DRESS</span>
                                        <p>Summer dress</p>
                                        <div className="product-options">
                                            <strong>SIZES</strong>
                                            <span>XS, S, M, L, XL, XXL</span>
                                            <strong>COLORS</strong>
                                            <div className="colors">
                                                <div className="c-blue"><span /></div>
                                                <div className="c-red"><span /></div>
                                                <div className="c-white"><span /></div>
                                                <div className="c-green"><span /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-back">
                                <div className="shadow" />
                                <div className="carousel">
                                    <ul className="carousel-container">
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" /></li>
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
                                    </ul>
                                    <div className="arrows-perspective">
                                        <div className="carouselPrev">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                        <div className="carouselNext">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-back">
                                    <div className="cy" />
                                    <div className="cx" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="info-large">
                            <h4>PRINTED DRESS</h4>
                            <div className="sku">
                                PRODUCT SKU: <strong>89356</strong>
                            </div>
                            <div className="price-big">
                                <span>$43</span> $39
                            </div>
                            <h3>COLORS</h3>
                            <div className="colors-large">
                                <ul>
                                    <li><a href style={{ background: '#222' }}><span /></a></li>
                                    <li><a href style={{ background: '#6e8cd5' }}><span /></a></li>
                                    <li><a href style={{ background: '#9b887b' }}><span /></a></li>
                                    <li><a href style={{ background: '#44c28d' }}><span /></a></li>
                                </ul>
                            </div>
                            
                            <button className="add-cart-large">Add To Cart</button>
                        </div>
                        <div className="make3D">
                            <div className="product-front">
                                <div className="shadow" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" />
                                <div className="image_overlay" />
                                <div className="add_to_cart">Add to cart</div>
                                <div className="view_gallery">View gallery</div>
                                <div className="stats">
                                    <div className="stats-container">
                                        <span className="product_price">$39</span>
                                        <span className="product_name">PRINTED DRESS</span>
                                        <p>Summer dress</p>
                                        <div className="product-options">
                                            <strong>SIZES</strong>
                                            <span>XS, S, M, L, XL, XXL</span>
                                            <strong>COLORS</strong>
                                            <div className="colors">
                                                <div className="c-blue"><span /></div>
                                                <div className="c-red"><span /></div>
                                                <div className="c-white"><span /></div>
                                                <div className="c-green"><span /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-back">
                                <div className="shadow" />
                                <div className="carousel">
                                    <ul className="carousel-container">
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5.jpg" alt="" /></li>
                                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" /></li>
                                    </ul>
                                    <div className="arrows-perspective">
                                        <div className="carouselPrev">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                        <div className="carouselNext">
                                            <div className="y" />
                                            <div className="x" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-back">
                                    <div className="cy" />
                                    <div className="cx" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="info-large">
                            <h4>PRINTED DRESS</h4>
                            <div className="sku">
                                PRODUCT SKU: <strong>89356</strong>
                            </div>
                            <div className="price-big">
                                <span>$43</span> $39
                            </div>
                            <h3>COLORS</h3>
                            <div className="colors-large">
                                <ul>
                                    <li><a href style={{ background: '#222' }}><span /></a></li>
                                    <li><a href style={{ background: '#6e8cd5' }}><span /></a></li>
                                    <li><a href style={{ background: '#9b887b' }}><span /></a></li>
                                    <li><a href style={{ background: '#44c28d' }}><span /></a></li>
                                </ul>
                            </div>
                            
                            <button className="add-cart-large">Add To Cart</button>
                        </div>
                        <div className="make3D">
                            <div className="product-front">
                                <div className="shadow" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/8.jpg" alt="" />
                                <div className="image_overlay" />
                                <div className="add_to_cart">Add to cart</div>
                                <div className="view_gallery">View gallery</div>
                                <div className="stats">
                                    <div className="stats-container">
                                        <span className="product_price">$39</span>
                                        <span className="product_name">PRINTED DRESS</span>
                                        <p>Summer dress</p>
                                        <div className="product-options">
                                            <strong>SIZES</strong>
                                            <span>XS, S, M, L, XL, XXL</span>
                                            <strong>COLORS</strong>
                                            <div className="colors">
                                                <div className="c-blue"><span /></div>
                                                <div className="c-red"><span /></div>
                                                <div className="c-white"><span /></div>
                                                <div className="c-green"><span /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-back">
                                <div className="shadow" />
                            </div></div></div></div></div></div>

    )
}
