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



function Home() {
  return (
    <div>
      
      <Banner/>
      <BestSeller/>
      <ReviewBanner/>
      <MostLoved/>
      <DesignedBanner/>
      <NewArraivals/>
      <About/>
      <SocialReview/>
      {/* <Category/>  */}
      
      
      <Footer/>
    </div>
  )
}

export default Home
