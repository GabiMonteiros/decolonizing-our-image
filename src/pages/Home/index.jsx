import React from 'react';

import Header from '../../components/Header'
import Featured from '../../components/Featured'
import About from '../../components/About'
import CarouselSlick from '../../components/CarouselSlick';
import './index.css'



const Home = () => { 
  
 

  return (
  
    <>
       
      <div id='main-container' > 
        <Header/>
        <Featured/>
          
        <About/>

        <CarouselSlick/>
       
      </div>  
     
    </>
  )
}

export default Home
