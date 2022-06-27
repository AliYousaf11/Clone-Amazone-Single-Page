import React from 'react'
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({image,title,price,rating}) {
const [{basket},dispatch] = useStateValue();

const removeFromBasket = () =>{
  dispatch({
    type:"Remove_TO_BASKET",
    title:title,
  })
}


  return (
      
    <div className='checkoutProduct'>
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduc__price">
              <small>$
                  <strong>{price}</strong>
              </small>
          </p>

          <div className="checkoutProduct__rating">
            {
            Array(rating)
            .fill()
            .map (() => <p>*</p>)
            }
      </div>
      
      <button onClick={removeFromBasket}>Remove From Basket</button>      

      </div>

      
    </div>
  )
}
export default CheckoutProduct
