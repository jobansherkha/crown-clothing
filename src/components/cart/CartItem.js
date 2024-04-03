import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Button from '../button/Button'

export const CartItem = () => {

  const { cartItems } = useContext(CartContext);
    console.log(cartItems)
    
      
  return (
    <div className='cart-dropdown-container'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <div className='cart-item-container'>
      <img src={cartItem.imageUrl} alt={`${cartItem.name}`} />
      <div className='item-details'>
        <span className='name'>{cartItem.name}</span>
        <span className='price'>
          {cartItem.quantity} * ${cartItem.price}
        </span>
      </div>
    </div>
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
  )
}
