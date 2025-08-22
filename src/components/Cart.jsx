import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addDesert, decrementDesert, incrementDesert, removeDesert } from '../app/features/desertsSlice';

const Cart = ({dessert}) => {
    let {desserts} = useSelector((store) => store.desserts)
    console.log(desserts);
    let isAdded = desserts?.find((item) => item.id == dessert.id )

    let dispatch = useDispatch()
  return (
    <div className='card'>
       <picture>
            <source media={`min-width : 996px`}
            srcSet={`${dessert.image.desktop}`}
            sizes='250'
            />
            <source media={`min-width : 768px`}
            srcSet={`${dessert.image.table}`}
            sizes='213'
            />
            <source media={`min-width : 375px`}
            srcSet={`${dessert.image.mobile}`}
            sizes='327'
            />
            <img className='card_image' src={`${dessert.image.thumbnail}`} alt="" />
       </picture>
       <div className='cart_btn'>
        {
          !isAdded && (
            <button onClick={() => dispatch(addDesert(dessert))} className='cart_add_to'>
              <img src="../images/icon-add-to-cart.svg" alt="" />
              <span>Add to cart</span>
            </button>
          )
        }
        {
          isAdded && (
            <div className='in-de-btn'>
              <button onClick={() => dispatch(incrementDesert(isAdded.id))}>
                +
              </button>
              <p>{isAdded.amount}</p>
              <button onClick={() => {
                if(isAdded.amount == 1){
                  dispatch(removeDesert(isAdded.id))
                } else{
                  dispatch(decrementDesert(isAdded.id))
                }
              }
              }>
                -
              </button>
            </div>
          )
        }
       </div>
       <div className='cart_body'>
            <p className='cart_category'>{dessert.category}</p>
            <p className='cart_name'>{dessert.name}</p>
            <p className='cart_price'>${dessert.price}</p>
       </div>
    </div>
  )
}

export default Cart