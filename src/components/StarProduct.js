import React from 'react'
import "../styles/StarProduct.css"
const StarProduct = ({starProduct}) => {
  return (
    <div className='sp'>
        <div>
            <a href={starProduct[0].url}><img src={starProduct[0].image} alt="1stProduct" /></a>
        </div>
        <div>
            <a href={starProduct[1].url}><img src={starProduct[1].image} alt="2stProduct" /></a>
            <a href={starProduct[2].url}><img src={starProduct[2].image} alt="3stProduct" /></a>
            <a href={starProduct[3].url}><img src={starProduct[3].image} alt="4stProduct" /></a>
        </div>
    </div>
  )
}

export default StarProduct
