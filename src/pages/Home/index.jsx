import React from 'react';

// import useLocoScroll from '../../hooks/useLocoScroll';
import Header from '../../components/Header'
import Featured from '../../components/Featured'
import About from '../../components/About'
import './index.css'



const Home = () => {
  
 

  return (
  
    <>
      
      <div id='main-containe' data-scroll-section> 
        <Header/>
        <Featured/>
          
        <About/>
      </div>  
     
    </>
  )
}

export default Home
