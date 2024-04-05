import React, { useContext, useState } from 'react'
import { CartContext, addCartItems } from '../context/CartContext';
import Button from '../button/Button'
import { CartCard } from './CartCard';

export const CartItem = () => {

  const { cartItems } = useContext(CartContext);
    console.log(cartItems)
    const [totalPrice, setTotalPrice] = useState(0);

    // Calculate total price whenever items change
    useState(() => {
      let total = 0;
      cartItems.forEach(item => {
        total += item.price * item.quantity;
      });
      setTotalPrice(total);
    }, [cartItems]);
  const onRemove =()=>{

  }

 

 const onCheckout = ()=> {

 }
      
  return (
    <div>
    {cartItems.map((item, index) => (
      <CartCard key={index} item={item} onRemove={onRemove} />
    ))}
    <Button variant="contained" color="primary" onClick={onCheckout}>
      Checkout - Total: ${totalPrice}
    </Button>
  </div>
  )
}
