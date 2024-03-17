import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductContext'
import { ProductCard } from '../../Product-card/ProductCard'
import './Shop.scss'
export const Shop = () => {
  const products = useContext(ProductsContext)
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
