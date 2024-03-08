
import React from 'react'
import './CategoryGrid.scss'
import { CategoryItem } from '../CategoryItem/CategoryItem';
export const CategoryGrid = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <CategoryItem key={category.id} category={category}/>
        );
      })}
    </div>
  )
}
