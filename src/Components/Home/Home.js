import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import Lottie from 'react-lottie';
import animationData from "../Animation/93948-wait-loading-animation.json"
import { useLocation } from 'react-router-dom'
import Carousel from '../HomeStuff/Carousel';
import Support from '../HomeStuff/Support';
import Footer from '../HomeStuff/Footer';
import Testimonial from '../HomeStuff/Testimonial';


function Home({ cart, handleToCart, data, isloading, value }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const location = useLocation();
  let username = location.state
  return (
    <>
      <span className='Head'>
        {/* <--------------------start-Navbar------------------------> */}
        <Navbar cart={cart} username={username}></Navbar>
        {/* ----------------------Carousel------------------------ */}
        <Carousel></Carousel>
        {/* <------------------------cards start------------------> */}
      </span>
      <div className="container">
        <section className="row py-1">
          <div className="container px-4 px-lg-5 mt-5">
          <div className="header">
                <h1>Products</h1>
                <div class="border"></div>
            </div>
            <div className="row justify-content-center">
              
              {
                isloading ? <><Lottie options={defaultOptions}
                  height={400}
                  width={400}
                /></> : data.map((item, index) => {
                  return (
                    <div className='col-lg-3 col-md-6 col-sm-10 pb-5 '>  
                     <Card key={index} item={item} handleToCart={handleToCart} value={value}></Card>
                     </div>
                  )
                 
                })
              }
           
              
            </div>
          </div>
        </section>
      </div>
      <div>
      <Support></Support>
      </div>
      <div>
        <Testimonial></Testimonial>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home
