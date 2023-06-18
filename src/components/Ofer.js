import React from 'react'
import Offer from './Offer.js'
import "../styles/Ofer.css"

const Ofer = ({ofer}) => {
  return (
    <div className='offersection'>
      {
        ofer.map((item,index)=>(
            <Offer key={item.image} index={index} src={item.image} link={item.url}/>
        ))
      }
    </div>
  )
}

export default Ofer
