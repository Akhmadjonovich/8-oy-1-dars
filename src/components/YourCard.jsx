import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeDesert } from '../app/features/desertsSlice';
const YourCard = () => {
  let cart = useSelector((store) => store.desserts)
  let dispatch = useDispatch()
  console.log(cart);
  return (
    <div className='your-cart'>
      {
        cart.desserts.length === 0 ? (
          <div>
            <h2>Your cart ({cart.totalAmount})</h2>
            <img className='empty-img' src="/images/empty-img.svg" alt="" />
            <p className='empty-p'>Your added items will appear here</p>
          </div>
        ) : (
          <div>
            <h2>Your cart ({cart.totalAmount})</h2>
            {cart.desserts.map(item => (
              <div key={item.id}>
              <div  className="cart-item">
                <div className='cart-info'>
                  <h3>{item.name}</h3>
                  <div>
                    <p className='pr-amnt'>{item.amount}x</p>
                    <p>@ ${item.price}</p>
                  </div>
                </div>
                <div className='cart-rm-btn'>
                  <button onClick={() => dispatch(removeDesert(item.id))}><img src="/images/icon-remove-item.svg" alt="" /></button>
                </div>
              </div>
              
              </div>
            ))}
            <div className='total-wrap'>
              <h3>Order Total</h3>
              <h2>${cart.price}</h2>
            </div>
            <button className='con-btn'>Confirm Order</button>
          </div>
        )
      }
    </div>
  )
}

export default YourCard