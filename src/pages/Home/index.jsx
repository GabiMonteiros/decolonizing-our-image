import React, {useState} from 'react';
import { useEffect } from 'react';
 import{useRef}  from 'react';

import Header from '../../components/Header'
import Featured from '../../components/Featured'
import About from '../../components/About'
import './index.css'



const Home = () => {
  // eslint-disable-next-line 
  const [preloader, setPreloader] = useState(true);
 

  const[timer, setTimer] = useState(2) 

  // //reference for the interval 
  const id = useRef(null);

  // //clear function
  const clear = ()=>{
    window.clearInterval(id.current);
    setPreloader(false);
  }

  useEffect(() => {
    id.current = window.setInterval(()=>{
      setTimer(timer => timer- 1)
    }, 1000)
    // eslint-disable-next-line 
  }, []);


  useEffect(() => {
    
    if(timer === 0) {
      clear()
    }
    // eslint-disable-next-line 
  }, [timer]);

  return (
    
    
    <>
      {preloader ? (
         <div className='loader-wrapper absolute'>
          <h1>Decolonize The Image</h1>
          <h2>Decolonizing  The Aesthetic</h2>
        </div>
      ):(
        <div className='main' data-scroll-container> 
          <Header/>
          <Featured/>
          
          <About/>
        </div>  
      )}
    </>
  )
}

export default Home
