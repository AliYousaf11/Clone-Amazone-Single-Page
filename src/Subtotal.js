import React from 'react'
import './Subtotal.css'
// import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
  const [{basket}] = useStateValue();

  return (
    <div className='subtotal'>
      {/* <CurrencyFormat
      renderText={(value) => (
          <>
          <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
          </p>
          <small className='subtotal__gift'>
              <input type="checkbox" /> This order contains a gift
          </small>
          </>
        )}
        decimalScale={2} // value contain into 2 decimal
        value={getBasketTotal(basket)} // value total amount
        displayType={"text"} // 
        thousandSeparator={true} // value in 25 639 302
        prefix={"$"}
      /> */}
      <button>Proccess to Checkout</button>
    </div>
  )
}

export default Subtotal
