import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import BestSeller from '../../components/BestSeller/BestSeller'
import ReviewBanner from '../../components/ReviewBanner/ReviewBanner'
import MostLoved from '../../components/MostLoved/MostLoved'
import NewArraivals from '../../components/NewArraivals/NewArraivals'
import DesignedBanner from '../../components/DesignedBanner/DesignedBanner'
import SocialReview from '../../components/SocialReview/SocialReview'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Category from '../Category/Category'
import Cart from '../Cart/Cart'
import ScrollEffect from '../../components/ScrollEffect/ScrollEffect'



function Home() {
  return (
    <div>
      
      <Banner/>
      <ScrollEffect><BestSeller /></ScrollEffect>
      <ScrollEffect><ReviewBanner /></ScrollEffect>
      <ScrollEffect><MostLoved /></ScrollEffect>
      <ScrollEffect><DesignedBanner /></ScrollEffect>
      <ScrollEffect><NewArraivals /></ScrollEffect>
      <ScrollEffect><About /></ScrollEffect>
      <ScrollEffect><SocialReview /></ScrollEffect>
      {/* <Category/>  */}
      
      
      <Footer/>
    </div>
  )
}

export default Home
