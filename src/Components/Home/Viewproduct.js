import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { env } from '../../config';
import Navbar from './Navbar'
import Lottie from 'react-lottie';
import animationData from "../Animation/92411-shopping-cart.json"

function Viewproduct({ cart, handleToCart, isloading }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const params = useParams();
  let location = useLocation();
  let product = location.state.item

  const [userData, setUserData] = useState({});
  useEffect(() => {
    Loaduser()
    // eslint-disable-next-line
  }, [])

  let Loaduser = async () => {
    try {
      let user = await axios.get(`${env.api}/Product/User_Product/${params.id}`, {
        headers: {
          authorisation: window.localStorage.getItem("app-token")
        }
      })
      setUserData(user.data)
    } catch (error) {
      console.log(error)
    }
  }
  let handleToBuy = (product) => {
    handleToCart(product)
  }
  console.log(userData);
  return (
    <>
      <Navbar cart={cart} ></Navbar>
      {
        isloading ? <Lottie options={defaultOptions} height={400} width={400} /> :
          <div className="card mb-4 mt-5 w-75 views1 loop bg-transparent">
            <div className="card-header text-white text-center py-3">
              <h5 className="mb-0">{product.title}</h5>
            </div>
            <div className="card-body text-white">
              <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                  <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img src={product.imgUrl} className="w-100" alt="Shoes" />
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 mb-4 mt-5 mb-lg-0 text-center">
                  <p><strong>{product.title}</strong></p>
                  <p>price:{product.price}</p>
                  <p>Size: M S L XL XXL </p>
                  <button type="button" onClick={() => handleToBuy(product)} className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                    title="Remove item">
                    <i class="fas fa-shopping-cart"></i>
                  </button>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                    <div className="form-outline fw-bold">
                      <p className="card-text"><small className="text-muted"><h6><strong>Description <br/><hr/></strong>{product.dis}</h6></small></p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>
      }
    </>
  )
}

export default Viewproduct
