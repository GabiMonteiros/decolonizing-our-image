import React from 'react';

import Header from '../../components/Header'
import Featured from '../../components/Featured'
import About from '../../components/About'
import './index.css'



const Home = () => {
  
 

  return (
  
    <>
       
      <div id='main-container' > 
        <Header/>
        <Featured/>
          
        <About/>
      </div>  
     
    </>
  )
}

export default Home
