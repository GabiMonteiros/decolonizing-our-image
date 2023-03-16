import React from 'react'
import {motion as m }from 'framer-motion';

function GoogleImageSearch() {
  return (
    <>
      <m.div
        initial={{y: "100%" }}
        animate={{ y: "0%" }}
        transition={{duration:0.75, ease: 'easeOut'}} 
        exit={{opacity: 1 }}
      >

        <main>
          <section className='title gis'>
            <m.h2

              initial={{y: 0 }}
              animate={{ y: "100%" }}
              transition={{ delay:0.7, duration: 0.5}}
            >
              Google Image Search
            </m.h2>
          </section>
        </main>
      </m.div>
  
    </>
   
  )
}

export default GoogleImageSearch
