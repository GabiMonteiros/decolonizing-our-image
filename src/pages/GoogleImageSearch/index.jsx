import React from 'react'
import {motion as m }from 'framer-motion';
import CarouselSlick from '../../components/CarouselSlick';


function GoogleImageSearch() {
  return (
    <>
      <div data-scroll-section>

        <m.div
          initial={{y: "100%" }}
          animate={{ y: "0%" }}
          transition={{duration:0.75, ease: 'easeOut'}} 
          exit={{opacity: 1 }}
        >

          
          <section className='title gis'>
            <m.h2

              initial={{y: 0 }}
              animate={{ y: "100%" }}
              transition={{ delay:0.7, duration: 0.80}}
            >
              Google <br></br>Image Search
            </m.h2>
          </section>
          
        </m.div>
      </div>
      <CarouselSlick></CarouselSlick>

  
    </>
   
  )
}

export default GoogleImageSearch
