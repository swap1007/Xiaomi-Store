import React from 'react'
import "../styles/Prefooter.css"
import '../styles/Footer.css'
const reapeatIcon=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M451-122q-123-10-207-101t-84-216q0-77 35.5-145T295-695l43 43q-56 33-87 90.5T220-439q0 100 66 173t165 84v60Zm60 0v-60q100-12 165-84.5T741-439q0-109-75.5-184.5T481-699h-20l60 60-43 43-133-133 133-133 43 43-60 60h20q134 0 227 93.5T801-439q0 125-83.5 216T511-122Z"/></svg>

const shieldIcon=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m436-347 228-228-42-41-183 183-101-101-44 44 142 143Zm44 266q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z"/></svg>

const mapIcon=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m612-120-263-93-179 71q-17 9-33.5-1T120-173v-558q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840-788v565q0 11-7.5 19T814-192l-202 72Zm-34-75v-505l-196-66v505l196 66Zm60 0 142-47v-512l-142 54v505Zm-458-12 142-54v-505l-142 47v512Zm458-493v505-505Zm-316-66v505-505Z"/></svg>




const Footer = ({footer}) => {
  return (
    <div>

      <div className='preFooter'>

        <div>
            {reapeatIcon}
            <p><b>Hassle Free Replacement</b><br />10 days easy replacement policy</p>
        </div>
        <div>
            {shieldIcon}
            <p><b>100% Secure Payments</b><br />We support Cards , EMI , Wallets and COD</p>
        </div>
        <div>
            {mapIcon}
            <p><b>Vast Service Network</b><br />1000 Mi service-centres across 600 cities</p>
        </div>

      </div>

      <div className="preFooter2">

        <div>
            <p>LET'S SAY IN TOUCH</p><span>Get updates on sales specials and more</span>
        </div>
        <div>
            <div>
                <input type="email" name="email" placeholder='Enter your email'  />
                <button>&gt;</button>
            </div>
            <div>
                <span>Thanks!You are on our email list for special offers</span>
            </div>
        </div>
        <div>
            <p>FOLLOW MI</p><span>We want to hear from you!</span>
        </div>

      </div>


      <div className="footer">
        <div>
          <p>Support</p>
          {
            footer.support.map((item,index)=>(
              <a key={item.name} href={item.url}>{item.name}</a>
            ))
          }
        </div>
        <div>
          <p>Shop And Learn</p>
          {
            footer.shopAndLearn.map((item,index)=>(
              <a key={item.name} href={item.url}>{item.name}</a>
            ))
          }
        </div>
        <div>
          <p>Retail Store</p>
          {
            footer.retailStore.map((item,index)=>(
              <a key={item.name} href={item.url}>{item.name}</a>
            ))
          }
        </div>
        <div>
          <p>About Us</p>
          {
            footer.aboutUS.map((item,index)=>(
              <a key={item.name} href={item.url}>{item.name}</a>
            ))
          }
        </div>
        <div>
          <p>Contact Us</p>
          {
            footer.contactUs.map((item,index)=>(
              <a key={item.name} href={item.url}>{item.name}</a>
            ))
          }
        </div>
        <div>
          <div>
          Chat with our vitual AI Bot 
          (24/7 Live Agent Support)
          </div>
          <button>CHAT NOW</button>
        </div>
      </div>

      <div className="footerBorder">
        <div>
          Copyright © 2010-2023 Xioami. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
