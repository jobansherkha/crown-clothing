import { createContext, useState } from "react";

const addCartItems = (cartItems,product)=>{

    const existingProduct = cartItems.find((cartItem)=>product.id === cartItem.id)
   

    if (existingProduct){
        return cartItems.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems,{...product,quantity:1}]

}

const removeCartItems = (cartItems,product)=>{
  const existingProduct = cartItems.find((cartItem)=>product.id === cartItem.id)
  //remove product if the quantity is 1
  if(existingProduct.quantity === 1 ){
   return cartItems.filter((cartitem)=> cartitem.id !== product.id)
  }

  
  return cartItems.map((cartItem)=> cartItem.id === product.id ? {...cartItem,quantity : cartItem.quantity -1} : cartItem);
  



}

export const CartContext = createContext({
    cartItems : [],
    addItemsToCart: ()=>{},
    removeCartItems : ()=>{}
})



export const CartContextProvider = ({children}) => {
    const [cartItems,setCartItems] = useState([]);
    const addItemsToCart = (product)=>{
  
        setCartItems(addCartItems(cartItems,product))
        

    }
    const removeItemsFromCart= (product) =>{
      setCartItems(removeCartItems(cartItems,product))
    }
    const value = { cartItems, addItemsToCart, removeItemsFromCart}
  return (
    
    <CartContext.Provider value = {value}>{children}</CartContext.Provider>

   
  )
}
