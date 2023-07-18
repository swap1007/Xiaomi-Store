import React from 'react'
import Videocard from './Videocard.js'
import '../styles/Videos.css'





const Videos = ({videos}) => {
  return (
    <div className='videos'>
      { 
        videos.map((item,index)=>(
            <Videocard index={index} key={item.image} name={item.name} image={item.image}/>
        ))
      }
    </div>
  )
}

export default Videos
