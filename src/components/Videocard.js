import React from 'react'
import '../styles/Videocard.css'

{/* <a href="https://www.flaticon.com/free-icons/video" title="video icons">Video icons created by Bingge Liu - Flaticon</a> */}
const playbtn=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z"/></svg>
const Videocard = ({index,name,image}) => {
  return (
    <div className='videocard' style={{backgroundImage:`url(${image})`}}>
        <a href="#">{playbtn}</a>
        <p>{name}</p>
    </div>
  )
}

export default Videocard
