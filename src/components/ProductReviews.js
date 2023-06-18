import React from 'react'
import ProductReviewCard from './ProductReviewCard.js'
import '../styles/ProductReview.css'
const ProductReviews = ({pR}) => {
  return (
    <div className='pR'>
      {
        pR.map((item,index)=>(
            <ProductReviewCard image={item.image} review={item.review} name={item.name} price={item.price} index={index} key={item.image}/>
        ))
      }
    </div>
  )
}

export default ProductReviews
