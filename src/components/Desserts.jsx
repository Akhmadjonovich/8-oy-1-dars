import React from 'react'
import Cart from './Cart'

const Desserts = ({desserts}) => {
  return (
    <div className='dessert_container'>
      <h1>Desserts</h1>
      <div className='desserts'>
      {
        desserts.map((dessert) => {
          return <Cart key={dessert.id} dessert={dessert}/>
        })
      }
      </div>
    </div>
  )
}

export default Desserts