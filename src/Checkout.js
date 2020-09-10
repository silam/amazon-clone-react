import React from 'react'
import "./Checkout.css";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad" src="" />

                <div>
                    <h2 className="checkout__title">
                        Your shopping basket
                    </h2>
                    {/*basketitem*/}

                </div>
            </div>
            <div className="checkout__right">
                   <Subtotal /> 
            </div>
        </div>
    )
}

export default Checkout
