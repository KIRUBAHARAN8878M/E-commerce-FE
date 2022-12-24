import React from 'react'
// import razorpay from './images/razorpay-icon.png'


function CartSummary({ total }) {

  const handleSubmit = () => {
    if (total === 0) {
      alert("purchase any item, Cart is empty");
    } else {
      var options = {
        key: "rzp_test_cSjwpLQPPi0Uxz",
        key_secret: "0wVxMg5kGzT0eJyDdjR9FLdi",
        amount: total * 100,
        currency: "INR",
        name: "JustWatches",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "",
          email: "kirubaharan8878m@gmail.com",
          contact: "8489671064"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "rgb(49, 91, 194)"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
      console.log(pay);
    }
  }


  return (
    <>
      <div className="col-md-4">
        <div className="card loop">
          <div className="card-header py-3">
            <h5 className="mb-0 text-center">Summary</h5>
          </div>
          <div className="card-body">
            {
              total === 0 ? <span className='text-center ps-5 ms-5'>No items in Cart</span> : <><ul className="list-group list-group-flush bg-transparent">
                <li
                  className="list-group-item bg-transparent text-white d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>${total}</span>
                </li>
                <li className="list-group-item bg-transparent text-white d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <li
                  className="list-group-item bg-transparent text-white d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>${total}</strong></span>
                </li>
              </ul>

                <button type="button"  className="btn btn-primary btn-lg btn-block fst-italic" onClick={() => handleSubmit()}>
                  checkout by razorpay
                </button>
                <h5 className="fst-italic bg-transparent" style={{ textAlign: "center" }}>powered by <img style={{ width: "200px", height: "50px" }} src="https://www.j2store.org/images/extensions/payment_plugins/Razorpay.png" alt="Pay" /></h5>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CartSummary

