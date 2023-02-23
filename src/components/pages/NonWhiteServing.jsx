import React, {useEffect} from 'react';
import {motion as m }from 'framer-motion';
import hoverEffect from 'hover-effect';

function NonWhiteServing() {
    useEffect(() => {
        // eslint-disable-next-line 
        var image_animate = new hoverEffect({ 
          parent: document.querySelector('.img_box'),
          intensity: 0.7,
          image1: '/images/01JeanBaptisteDebret1823.jpg' ,
          image2:'/images/01Vogue.png',
          displacementImage: '/images/heightMap.png'
            
        })
      })
  return (
    <m.div 
        initial={{y: "100%" }}
        animate={{ y: "0%" }}
        transition={{duration:0.75, ease: 'easeOut'}} 
        exit={{opacity: 1 }}
    >

        <main>
        <section className='title sex'>
            <m.h2
                initial={{y: 0 }}
                animate={{ y: "100%" }}
                transition={{ delay:0.7, duration: 0.5}}
            >
                The non-white always serving
            </m.h2>
        </section>
        </main>

        <div className="img_container"> 
        <div className="img_box"></div>
        </div>


    </m.div>
  )
}

export default NonWhiteServing

