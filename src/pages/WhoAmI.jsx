import React from 'react';
import {motion as m }from 'framer-motion';


function WhoAmI() {
  return (
    <>
      <m.div
        initial={{y: "100%" }}
        animate={{ y: "0%" }}
        transition={{duration:0.75, ease: 'easeOut'}} 
        exit={{opacity: 1 }}
      >

        
        <section className="title wai" data-scroll-section>
          <m.h2

            initial={{y: 0 }}
            animate={{ y: "100%" }}
            transition={{ delay:0.7, duration: 0.5}}
          >
            Who Am I?</m.h2>
        </section>
        
      </m.div>
      
    </>
  )
}

export default WhoAmI
