import React from 'react'
import Navbar from '../Home/Navbar'
import CartLoop from './CartLoop'
import CartSummary from './CartSummary'

function Cart({ cart, value, setTotal, total, handleToRemove, handleIncrement, handleDecrement, initialValues }) {
  return (
    <>

      <Navbar cart={cart} ></Navbar>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              {
                value.map((ele, index) => {
                  return <CartLoop
                    index={index}
                    key={ele._id}
                    ele={ele}
                    total={total}
                    setTotal={setTotal}
                    initialValues={initialValues}
                    handleToRemove={handleToRemove}
                    handleIncre={handleIncrement}
                    handleDecre={handleDecrement}></CartLoop>
                })
              }
            </div>
            <CartSummary total={total}></CartSummary>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart

