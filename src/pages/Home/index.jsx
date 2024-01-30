import React from 'react';

import Header from '../../components/Header'
import Featured from '../../components/Featured'
import About from '../../components/About'
import Carousel from '../../components/Carousel';
import './index.css'



const Home = () => { 
  
 

  return (
  
    <>
       
      <div id='main-container' > 
        <Header/>
        <Featured/>
          
        <About/>
        <Carousel/>
      </div>  
     
    </>
  )
}

export default Home
