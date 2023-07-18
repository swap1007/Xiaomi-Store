import React from 'react'
import {Routes,Route} from 'react-router-dom';
import PreNavbar from './components/PreNavbar'
import Navbar from './components/Navbar'
import Slider from './components/Slider.js'
import "./App.css"
import data from "./data/data.json"
import Ofer from './components/Ofer.js'
import Heading from './components/Heading'
import StarProduct from './components/StarProduct'
import HotAccessoriesMenu from './components/HotAccessoriesMenu'
import HotAccessories from './components/HotAccessories'
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos'
import Banner from './components/Banner';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Ofer ofer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
      
    <Routes>
      <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musiccover={data.hotAccessoriesCover.music}/>}></Route>
      <Route exact path='/smartdevices' element={<HotAccessories smartdevice={data.hotAccessories.smartDevice} smartdevicecover={data.hotAccessoriesCover.smartDevice}/>}></Route>
      <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homecover={data.hotAccessoriesCover.home}/>}></Route>
      <Route exact path='/lifestyle' element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestylecover={data.hotAccessoriesCover.lifeStyle}/>}></Route>
      <Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriescover={data.hotAccessoriesCover.mobileAccessories}/>}></Route>
    </Routes>
    
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews pR={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>

      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>

    </div>
  )
}

export default App
 