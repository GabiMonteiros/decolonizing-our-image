import React, { useEffect} from 'react';
import gsap from 'gsap'; //, useRef, useState
import SplitText from '../../utils/Split3.min.js';
import './index.css'

function  Header() {
 
  useEffect(()=>{
    //header text animation, dividing in 2 divs
    const split = new SplitText('#header-text', {
      type: 'lines',
      linesClass: 'lineChildren',
    });

    /* eslint-disable */
    const splitParent = new SplitText('#header-text', {
      type: 'lines',
      linesClass: 'lineParent',
    });

    /* doing the animation */
    gsap.to(split.lines,{
      duration: 1, 
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
  
    });
  
  },[])

  

  return (
    <>
      <section className='header-container' data-scroll-section>

      <div id='text-container'>
        <h1 id='header-text'> 
          Decolonizing  
          <br></br>Our Image
        </h1>
      </div>
      </section>
    </>
  )
}

export default Header
