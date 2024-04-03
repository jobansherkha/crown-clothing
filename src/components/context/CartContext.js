import { createContext, useState } from "react";

export const addCartItems = (cartItems,product)=>{

    const existingProduct = cartItems.find((cartItem)=>product.id === cartItem.id)
    console.log(existingProduct)

    if (existingProduct){
        return cartItems.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems,{...product,quantity:1}]

}
export const CartContext = createContext({
    cartItems : [],
    addItemsToCart: ()=>{},
})



export const CartContextProvider = ({children}) => {
    const [cartItems,setCartItems] = useState([]);
    const addItemsToCart = (product)=>{
      console.log("additemstocart")
        setCartItems(addCartItems(cartItems,product))
        

    }
    const value = { cartItems, addItemsToCart}
  return (
    
    <CartContext.Provider value = {value}>{children}</CartContext.Provider>

   
  )
}
