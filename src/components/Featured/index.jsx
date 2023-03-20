import React from 'react'
import Slide from 'react-reveal/Slide';
import './index.css'

function index() {
  return (
    <>
      <div className="featured-section"
        data-scroll-section
      >
        <div className="featured-row-layout">
        <Slide bottom>
          <h6>Sara Batiman 1810</h6>
          <img src="/images/SarahBaartman-APairofBroadBottoms-1810.jpg" alt="" />
        </Slide>  
        </div>
        <div className="featured-column-layout" >
        <Slide bottom>  
          <h6>A Redenção de Cam 1895</h6>
          <img src="/images/RedencaodeCan1895-ModestoBrocos.jpg" alt="" />
        </Slide> 
        </div>
      </div>
    </>
  )
}

export default index
