import React from 'react'

function CartLoop({ ele, total, setTotal, handleToRemove, handleIncre, handleDecre, index }) {

  const removeFromCart = (ele) => {
    handleToRemove(ele)
  }

  const handleIncrement = (ele, index) => {
    handleIncre(ele, index)
    setTotal(total + ele.price)
  }
  const handleDecrement = (ele, index) => {
    handleDecre(ele, index)
    setTotal(total - ele.price)
  }
  return (
    <>
      <div className="card mb-4 loop bg-transparent">
        <div className="card-header text-white text-center py-3">
          <h5 className="mb-0">Cart-items</h5>
        </div>
        <div className="card-body text-white">
          <div className="row">
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                <img src={ele.imgUrl}
                  className="w-100" alt="Blue Jeans Jacket" />

              </div>
            </div>

            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
              <p><strong>{ele.title}</strong></p>
              <p>price:{ele.price}</p>
              <p>Size: M </p>
              <button type="button" onClick={() => removeFromCart(ele)} className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                title="Remove item">
                <i className="fas fa-trash"></i>
              </button>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                <button disabled={ele.count === 1 ? true : false} className="btn btn-primary px-3 me-2"
                  onClick={() => handleDecrement(ele, index)}>
                  <i className="fas fa-minus"></i>
                </button>

                <div className="form-outline fw-bold">
                  <input id="form1" min="1" name="quantity" value={ele.count} type="number" className="form-control" placeholder='quantity' />
                </div>

                <button className="btn btn-primary px-3 ms-2"
                  onClick={() => handleIncrement(ele, index)}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <p className="text-start text-md-center">
                <strong>${ele.price * ele.count}</strong>
              </p>
            </div>
          </div>
          <hr className="my-4" />
        </div>
      </div>
    </>
  )
}

export default CartLoop;

