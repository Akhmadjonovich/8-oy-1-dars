import React from 'react'

const Cart = ({dessert}) => {
    
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
        <button className='cart_add_to'>
            <img src="../images/icon-add-to-cart.svg" alt="" />
            <span>Add to cart</span>
        </button>
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