import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


function Navbar({ cart, username }) {
  let navigate = useNavigate()
  
  let Logout = async () => {
    let sure = await swal("Are you sure to Logout?", {
        buttons: ["No", true],
    });
    if (sure === true) {
        navigate('/')
    }
    
}
  return (
    <>
      <nav className="navbar navbar-expand-lg Back">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="!#">
          
            <b><h3>Just Watches</h3></b></a>
          <button className="navbar-toggler btn bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item ms-5">
              </li>
            </ul>
            <form className="d-flex nav-item mx-3 text-white">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <a className="nav-link active text-white" aria-current="page" href="/Home">Home</a>
              </li>
            </ul>
              <div className="btn btn-outline-light me-2" onClick={()=>{Logout()}}>
              <i className="fas fa-sign-out-alt"></i>
              Logout
              </div>
              <Link to="/cart" className="btn btn-outline-light" type="submit">
                <i className="fa-solid fa-cart-shopping me-2"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar