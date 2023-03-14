import React, {useState} from 'react';


import Header from '../../components/Header'
import Featured from '../../components/Featured'
import About from '../../components/About'
import './index.css'
import useLocoScroll from '../../hooks/useLocoScroll';



const Home = () => {
  // eslint-disable-next-line 
  const [preloader, setPreloader] = useState(true);
 
  useLocoScroll(!preloader)
 
 




  return (
    
    
    <>
      {/* {preloader ? (
         <div className='loader-wrapper absolute'>
          <h1>Decolonize The Image</h1>
          <h2>Decolonizing  The Aesthetic</h2>
        </div>
      ):( */}
        <div id='main' data-scroll-container> 
          <Header/>
          <Featured/>
          
          <About/>
        </div>  
      {/* )} */}
    </>
  )
}

export default Home
