import React from 'react'
import Slide from 'react-reveal/Slide';
import photos from '../../data';
import './index.css'

function index() {
  const [firstImage, secondImage] = photos;
  return (
    <>
      <div className="featured-section"
        data-scroll-section
      > 
        <div className="featured-row-layout">
        <Slide bottom>
          <img src={firstImage} alt=''/>
          <h6>Sara Batiman 1810</h6>
        </Slide>  
        </div>
        <div className="featured-column-layout" >
        <Slide bottom>  
          
          <img src={secondImage} alt='' />
          <h6>A Redenção de Cam 1895</h6>
        </Slide> 
        </div>
      </div>
    </>
  )
}

export default index
