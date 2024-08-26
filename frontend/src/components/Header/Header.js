import "./Header.css";
import React from "react";
import logo from "../../assets/images/3bdab6f0f9ef8c6fc1c82b934948d11a.png";
// import user from "./user_icon.png";
// import heart from "./heart_icon.png";
// import bag from "./bag_icon.png";
// import studio_logo from "./myntra_studio.svg";

export default function Header() {
  //Men Mega Menu ( men_mega_menu )
  let a = 0;
  const open_men_mega_menu = () => {
    if (a === 0) {
      document.querySelector(".men_mega_menu").style.display = "flex";
      document.querySelector(".men_mega_menu").style.position = "fixed";
      document.querySelector(".men_mega_menu").style.width =
        "-webkit-fill-available";

      document.querySelector(".women_mega_menu").style.display = "none";
      document.querySelector(".kids_mega_menu").style.display = "none";
      document.querySelector(".living_mega_menu").style.display = "none";
      document.querySelector(".beauty_mega_menu").style.display = "none";
      document.querySelector(".studio_mega_menu").style.display = "none";

      a = 1;
    } else {
      document.querySelector(".men_mega_menu").style.display = "none";
      a = 0;
    }
  };

  //Women Mega Menu ( women_mega_menu )
  let b = 0;
  const open_women_mega_menu = () => {
    if (b === 0) {
      document.querySelector(".women_mega_menu").style.display = "flex";
      document.querySelector(".women_mega_menu").style.position = "fixed";
      document.querySelector(".women_mega_menu").style.width =
        "-webkit-fill-available";

      document.querySelector(".men_mega_menu").style.display = "none";
      document.querySelector(".kids_mega_menu").style.display = "none";
      document.querySelector(".living_mega_menu").style.display = "none";
      document.querySelector(".beauty_mega_menu").style.display = "none";
      document.querySelector(".studio_mega_menu").style.display = "none";

      b = 1;
    } else {
      document.querySelector(".women_mega_menu").style.display = "none";
      b = 0;
    }
  };

  //Kids Mega Menu ( kids_mega_menu )
  let c = 0;
  const open_kids_mega_menu = () => {
    if (c === 0) {
      document.querySelector(".kids_mega_menu").style.display = "flex";
      document.querySelector(".kids_mega_menu").style.position = "fixed";
      document.querySelector(".kids_mega_menu").style.width =
        "-webkit-fill-available";

      document.querySelector(".men_mega_menu").style.display = "none";
      document.querySelector(".women_mega_menu").style.display = "none";
      document.querySelector(".living_mega_menu").style.display = "none";
      document.querySelector(".beauty_mega_menu").style.display = "none";
      document.querySelector(".studio_mega_menu").style.display = "none";

      c = 1;
    } else {
      document.querySelector(".kids_mega_menu").style.display = "none";
      c = 0;
    }
  };

  //Home & Living Mega Menu ( living_mega_menu )
  let d = 0;
  const open_living_mega_menu = () => {
    if (d === 0) {
      document.querySelector(".living_mega_menu").style.display = "flex";
      document.querySelector(".living_mega_menu").style.position = "fixed";
      document.querySelector(".living_mega_menu").style.width =
        "-webkit-fill-available";

      document.querySelector(".men_mega_menu").style.display = "none";
      document.querySelector(".women_mega_menu").style.display = "none";
      document.querySelector(".kids_mega_menu").style.display = "none";
      document.querySelector(".beauty_mega_menu").style.display = "none";
      document.querySelector(".studio_mega_menu").style.display = "none";

      d = 1;
    } else {
      document.querySelector(".living_mega_menu").style.display = "none";
      d = 0;
    }
  };

  //Beauty Mega Menu ( beauty_mega_menu )
  let e = 0;
  const open_beauty_mega_menu = () => {
    if (e === 0) {
      document.querySelector(".beauty_mega_menu").style.display = "flex";
      document.querySelector(".beauty_mega_menu").style.position = "fixed";
      document.querySelector(".beauty_mega_menu").style.width =
        "-webkit-fill-available";

      document.querySelector(".men_mega_menu").style.display = "none";
      document.querySelector(".women_mega_menu").style.display = "none";
      document.querySelector(".kids_mega_menu").style.display = "none";
      document.querySelector(".living_mega_menu").style.display = "none";
      document.querySelector(".studio_mega_menu").style.display = "none";

      e = 1;
    } else {
      document.querySelector(".beauty_mega_menu").style.display = "none";
      e = 0;
    }
  };

  //Studio Mega Menu ( studio_mega_menu )
  let f = 0;
  const open_studio_mega_menu = () => {
    if (f === 0) {
      document.querySelector(".studio_mega_menu").style.display = "flex";
      document.querySelector(".studio_mega_menu").style.position = "fixed";
      document.querySelector(".studio_mega_menu").style.width =
        "-webkit-fill-available";

      document.querySelector(".men_mega_menu").style.display = "none";
      document.querySelector(".women_mega_menu").style.display = "none";
      document.querySelector(".kids_mega_menu").style.display = "none";
      document.querySelector(".living_mega_menu").style.display = "none";
      document.querySelector(".beauty_mega_menu").style.display = "none";

      f = 1;
    } else {
      document.querySelector(".studio_mega_menu").style.display = "none";
      f = 0;
    }
  };

  // function countDown() {
  //   const countDate = new Date("July 25, 2022 00:00:00").getTime();
  //   const now = new Date().getTime();
  //   const gap = countDate - now;

  //   const seconds = 1000;
  //   const minutes = seconds * 60;
  //   const hours = minutes * 60;
  //   const days = hours * 24;

  //   const hoursText = Math.floor((gap % days) / hours);
  //   const minutesText = Math.floor((gap % hours) / minutes);
  //   const secondsText = Math.floor((gap % minutes) / seconds);

  //   document.getElementById("hours").textContent = hoursText;
  //   document.getElementById("minutes").textContent = minutesText;
  //   document.getElementById("seconds").textContent = secondsText;
  // }

  // setInterval(countDown, 1000);
  
  return (
    <>
      <header>
        <img src={logo} alt="logo" id="logo" />
        <ul id="header_ul">
          <li onClick={open_men_mega_menu}>MEN</li>
          <li onClick={open_women_mega_menu}>WOMEN</li>
          <li onClick={open_kids_mega_menu}>KIDS</li>
          <li onClick={open_living_mega_menu}>HOME & LIVING</li>
          <li onClick={open_beauty_mega_menu}>BEAUTY</li>
          <li onClick={open_studio_mega_menu}>STUDIO</li>
        </ul>
        <input
          type="text"
          id="search"
          placeholder="Search for products, brands, and more"
        ></input>
        {/* <div className="icons">
          <img src={user} />
          <img src={heart} />
          <img src={bag} />
        </div> */}
      </header>

      <div className="men_mega_menu">
        <div className="men_mega-menu-col1">
          <h1>Topware</h1>
          <ul>
            <li>T-Shirts</li>
            <li>Casual Shirts</li>
            <li>Formal Shirts</li>
          </ul>

          <h1>Indian & Festive Wear</h1>
          <ul>
            <li>Kurtas</li>
            <li>Sherwanis</li>
            <li>Dhotis</li>
          </ul>
        </div>

        <div className="men_mega-menu-col2">
          <h1>Bottomwear</h1>
          <ul>
            <li>Jeans</li>
            <li>Casual Trousers</li>
            <li>Formal Trousers</li>
          </ul>

          <h1>Innerwear & Sleeper</h1>
          <ul>
            <li>Briefs & Trunks</li>
            <li>Boxers</li>
            <li>Vests</li>
          </ul>

          <h1>Plus Size</h1>
        </div>

        <div className="men_mega-menu-col3">
          <h1>Footwear</h1>
          <ul>
            <li>Casual Shoes</li>
            <li>Formal Shoes</li>
            <li>Sports Shoes</li>
          </ul>

          <h1>Personal Care & Grooming</h1>

          <h1>Sunglasses & Frames</h1>

          <h1>Watches</h1>
        </div>

        <div className="men_mega-menu-col4">
          <h1>Sports & Active Wear</h1>
          <ul>
            <li>Sports Shoes</li>
            <li>Sports Sandals</li>
            <li>Active T-Shirts</li>
          </ul>

          <h1>Gadgets</h1>
          <ul>
            <li>Smart Wearables</li>
            <li>Fitness Gadgets</li>
            <li>Headphones</li>
          </ul>
        </div>

        <div className="men_mega-menu-col5">
          <h1>Fashion Accessories</h1>
          <ul>
            <li>Wallets</li>
            <li>Belts</li>
            <li>Perfumes & Body Mists</li>
          </ul>

          <h1>Bags & Backpacks</h1>

          <h1>Luggages & Trolleys</h1>
        </div>
      </div>


      <div className="women_mega_menu">
        <div className="women_mega-menu-col1">
          <h1>Indian & Fusion Wear</h1>
          <ul>
            <li>Kurtas & Suits</li>
            <li>Kurtis, Tunics & Tops</li>
            <li>Sarees</li>
          </ul>

          <h1>Belts, Scarves, & More</h1>

          <h1>Watches & Wearables</h1>
        </div>

        <div className="women_mega-menu-col2">
          <h1>Bottomwear</h1>
          <ul>
            <li>Dresses</li>
            <li>Tops</li>
            <li>T-Shirts</li>
          </ul>

          <h1>Plus Size</h1>
        </div>

        <div className="women_mega-menu-col3">
          <h1>Sunglasses & Frames</h1>

          <h1>Footwear</h1>
          <ul>
            <li>Flats</li>
            <li>Casual Shoes</li>
            <li>Heels</li>
          </ul>

          <h1>Sports & Active Wear</h1>
          <ul>
            <li>Clothing</li>
            <li>Footwear</li>
            <li>Sports Accessories</li>
          </ul>
        </div>

        <div className="women_mega-menu-col4">
          <h1>Beauty & Personal Care</h1>
          <ul>
            <li>Makeup</li>
            <li>Skin Care</li>
            <li>Premium Beauty</li>
          </ul>
        </div>

        <div className="women_mega-menu-col5">
          <h1>Gadgets</h1>
          <ul>
            <li>Smart Wearables</li>
            <li>Fitness Gadgets</li>
            <li>Headphones</li>
          </ul>

          <h1>Jewellery</h1>
          <ul>
            <li>Fashion Jewellery</li>
            <li>Fine Jewellery</li>
            <li>Earrings</li>
          </ul>

          <h1>Backpacks</h1>

          <h1>Handbags, Bags & Wallets</h1>

          <h1>Luggages & Trolleys</h1>
        </div>
      </div>

      <div className="kids_mega_menu">
        <div className="kids_mega-menu-col1">
          <h1>Boys Clothing</h1>
          <ul>
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Shorts</li>
          </ul>
        </div>

        <div className="kids_mega-menu-col2">
          <h1>Girls Clothing</h1>
          <ul>
            <li>Dresses</li>
            <li>Tops</li>
            <li>T-Shirts</li>
          </ul>
        </div>

        <div className="kids_mega-menu-col3">
          <h1>Footwear</h1>
          <ul>
            <li>Casual Shoes</li>
            <li>Flipflops</li>
            <li>Sports Shoes</li>
          </ul>

          <h1>Toys</h1>
          <ul>
            <li>Learning & Development</li>
            <li>Activity Toys</li>
            <li>Soft Toys</li>
          </ul>
        </div>

        <div className="kids_mega-menu-col4">
          <h1>Infants</h1>
          <ul>
            <li>Bodysuites</li>
            <li>Rompers & Sleepsuits</li>
            <li>Clothing Sets</li>
          </ul>

          <h1>Home & Bath</h1>

          <h1>Personal Care</h1>
        </div>

        <div className="kids_mega-menu-col5">
          <h1>Kids Accessories</h1>
          <ul>
            <li>Bags & Backpacks</li>
            <li>Watches</li>
            <li>Jewellery & Hair Accessories</li>
          </ul>

          <h1>Brands</h1>
          <ul>
            <li>H&M</li>
            <li>Max Kids</li>
            <li>Pantaloons</li>
          </ul>
        </div>
      </div>

      <div className="living_mega_menu">
        <div className="living_mega-menu-col1">
          <h1>Bed Linen & Furnishing</h1>
          <ul>
            <li>Bed Runners</li>
            <li>Mattress Protectors</li>
            <li>Bedsheets</li>
          </ul>

          <h1>Flooring</h1>
          <ul>
            <li>Floor Runners</li>
            <li>Carpets</li>
            <li>Floor Mats & Dhurries</li>
          </ul>
        </div>

        <div className="living_mega-menu-col2">
          <h1>Bath</h1>
          <ul>
            <li>Bath Towels</li>
            <li>Hand & Fave Towels</li>
            <li>Beach Towels</li>
          </ul>

          <h1>Lamps & Lighting</h1>
          <ul>
            <li>Floor Lamps</li>
            <li>Ceiling Lamps</li>
            <li>Table Lamps</li>
          </ul>
        </div>

        <div className="living_mega-menu-col3">
          <h1>Home Decor</h1>
          <ul>
            <li>Plants & Planters</li>
            <li>Aromas & Candles</li>
            <li>Clocks</li>
          </ul>

          <h1>Cushions & Cushion Covers</h1>

          <h1>Curtains</h1>
        </div>

        <div className="living_mega-menu-col4">
          <h1>Home Gift Sets</h1>

          <h1>Kitchen & Table</h1>
          <ul>
            <li>Table Runners</li>
            <li>Dinnerware & Serveware</li>
            <li>Cups & Mugs</li>
          </ul>

          <h1>Storage</h1>
          <ul>
            <li>Bins</li>
            <li>Hangers</li>
            <li>Organisers</li>
          </ul>
        </div>

        <div className="living_mega-menu-col5">
          <h1>Brands</h1>
          <ul>
            <li>H&M</li>
            <li>Marks & Spencer</li>
            <li>Home Centre</li>
          </ul>
        </div>
      </div>

      <div className="beauty_mega_menu">
        <div className="beauty_mega-menu-col1">
          <h1>Makeup</h1>
          <ul>
            <li>Lipstick</li>
            <li>Lip Gloss</li>
            <li>Lip Liner</li>
          </ul>
        </div>

        <div className="beauty_mega-menu-col2">
          <h1>Skincare, Bath & Body</h1>
          <ul>
            <li>Face Moisturiser</li>
            <li>Cleanser</li>
            <li>Masks & Peels</li>
          </ul>

          <h1>Baby Care</h1>

          <h1>Masks</h1>
        </div>

        <div className="beauty_mega-menu-col3">
          <h1>Haircare</h1>
          <ul>
            <li>Shampoo</li>
            <li>Conditioner</li>
            <li>Hair Cream</li>
          </ul>

          <h1>Fragrances</h1>
          <ul>
            <li>Perfume</li>
            <li>Deodrant</li>
            <li>Body Mist</li>
          </ul>
        </div>

        <div className="beauty_mega-menu-col4">
          <h1>Appliances</h1>
          <ul>
            <li>Hair Straightener</li>
            <li>Hair Dryer</li>
            <li>Epilator</li>
          </ul>

          <h1>Men's Grooming</h1>
          <ul>
            <li>Trimmers</li>
            <li>Beard Oil</li>
            <li>Hair Wax</li>
          </ul>

          <h1>Beauty Gift & Makeup Set</h1>
          <ul>
            <li>Beauty Gift</li>
            <li>Makeup Kit</li>
          </ul>

          <h1>Premium Beauty</h1>

          <h1>Wellness & Hygiene</h1>
        </div>

        <div className="beauty_mega-menu-col5">
          <h1>Top Brands</h1>
          <ul>
            <li>Lakme</li>
            <li>Maybelline</li>
            <li>LOreal</li>
          </ul>
        </div>
      </div>

      <div className="studio_mega_menu">
        {/* <img id="studio_logo" src={studio_logo} /> */}
        <h1 id="studio_head">Your daily inspiration for everything fashion</h1>
        <img
          id="studio_banner"
          src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
          alt="banner"
        />
        <button id="studio_btn">EXPLORE STUDIO</button>
      </div>

    </>
  );
}
