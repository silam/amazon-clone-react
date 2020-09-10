import React from 'react'
import CurrencyFormat from 'react-currency-format';



function Subtotal() {
    return (
        <div className='subtotal'>
            renderText = { (value) => (
                <>
                    <p>
                        Subtotal (0 items):
                        <strong>{` ${value}` }</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> 
                        This order contains a gift
                    </small>
                </>
            )

            }


            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            prefix={"$"}
        </div>
    )
}

export default Subtotal
