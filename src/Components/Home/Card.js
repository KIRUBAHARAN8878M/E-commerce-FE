import React from 'react'
import { Link } from 'react-router-dom'

function Card({ item, handleToCart, value }) {
  return (
    <>     
                  <div
                    className="card cardh bg-transparent "
                   
                  >
                    <img src={item.imgUrl} className="img-fluid" alt="new" />
                    <div className="card-body text-white">
                      <h5 className="card-title text-center pb-2">
                     {item.title}<br/><span>Price : {item.price}</span>
                      </h5>
                      <div className="d-flex justify-content-evenly">
                      <Link
                           to={`/viewproduct/${item._id}`} state={{ item }}
                            className="btn btn-outline-dark "
                          >
                            <i className=" fa fa-regular fa-paper-plane"></i>
                          </Link>
                        <button  className="btn btn-outline-dark "
                         disabled={value.some((obj)=>obj._id===item._id)} onClick={()=>handleToCart(item)} 
                        >
                    <i class="fas fa-shopping-cart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
              
              

      {/* <div className='cards'>
        <div className="Products">
          <div class="sizes">
            <div class="Topics">
              <div class="imagebx">
                <img src={item.imgUrl} alt='Product'/>
              </div>
              <div class="contentBox">
                <h3>{item.title}<br/><span>Price : {item.price}</span></h3>
              </div>
            </div>
            <ul class="sci   ">
              <li>
                <button disabled={value.some((obj)=>obj._id===item._id)} onClick={()=>handleToCart(item)}  className='btn  don btn-outline-light'><i class="fas fa-shopping-cart"></i></button>
              </li>
            
              <li>
                <Link to={`/viewproduct/${item._id}`} state={{ item }} className='btn btn-outline-light views '><i className=" fa fa-regular fa-paper-plane"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Card