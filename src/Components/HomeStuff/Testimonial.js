import React from 'react'

function Testimonial() {
    return (
        <>
            <div className="testimonials">
                <div className="testimonial-inner">
                    <h1>Testimonial</h1>
                    <div className="border"></div>

                    <div className="row">
                        <div className="col">
                            <div className="testimonial">
                                <img src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Client"/>
                                    <div className="name">John Waddrob</div>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="testimonial">
                                <img src="https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Client"/>
                                    <div className="name">John Waddrob</div>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="testimonial">
                                <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Client"/>
                                    <div className="name">John Waddrob</div>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial