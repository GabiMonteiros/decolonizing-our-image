import React, {useEffect}  from 'react';
import {motion as m }from 'framer-motion';
import hoverEffect from 'hover-effect';
import GalleryWhiteCen from '../GalleryWhiteCen'


function WhiteCentrism() {


    /*image transition*/ 
    useEffect(() => {
        // eslint-disable-next-line 
        var image_animate = new hoverEffect({ 
          parent: document.querySelector('.img_box'),
          intensity: 0.7,
          image1: '/images/01JeanBaptisteDebret1823.png' ,
          image2:'/images/01vogue2.png',
          displacementImage: '/images/heightMap.png'
            
        })
    })

  return (
    <>
    
      <m.div 
        initial={{y: "100%" }}
        animate={{ y: "0%" }}
        transition={{duration:0.75, ease: 'easeOut'}} 
        exit={{opacity: 1 }}
      >

        <section className='title ria'>
            <m.h2
            nitial={{y: 0 }}
            animate={{ y: "100%" }}
            transition={{ delay:0.7, duration: 0.5}}
            >
            White Centrism
            </m.h2>

        </section>

        {/* <section className='section-wrapper gallery-wrap'> </section> */}
            <div className="image-container">
                <div className="img_box"></div>
            </div>
      

        <GalleryWhiteCen/>

      </m.div>

    </>
  )
}

export default WhiteCentrism
