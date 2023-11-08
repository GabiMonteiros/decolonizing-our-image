import React from 'react'
import Slide from 'react-reveal/Slide';
import photos from '../../data';
import './index.css'

function index() {
  const [firstImage, secondImage] = photos;
  return (
    <>
      <div className="featured-section"
      > 
        <div className="featured-row-layout">
        <Slide bottom>
          <h6>Sara Batiman 1810</h6>
          <img src={firstImage} alt=''/>
        </Slide>  
        </div>
        <div className="featured-column-layout" >
        <Slide bottom>  
          <h6>A Redenção de Cam 1895</h6>
          <img src={secondImage} alt='' />
        </Slide> 
        </div>
      </div>
    </>
  )
}

export default index
