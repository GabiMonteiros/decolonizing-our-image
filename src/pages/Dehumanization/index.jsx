import React, {useEffect} from 'react';
import {motion as m }from 'framer-motion';
import hoverEffect from 'hover-effect';
import SectionText from '../../components/SectionText';
//import Gallery from '../../components/Gallery';

function Sexism() {
  useEffect(() => {
    // eslint-disable-next-line 
    var image_animate = new hoverEffect({ 
      parent: document.querySelector('.img_box'),
      intensity: 0.7,
      image1: '/images/Museum-Treptow-HumanZoo-1896.png' ,
      image2:'/images/posterHumanZoo.png',
      displacementImage: '/images/heightMap.png'
        
    })
  })

  return (
    <>
      <div className="pages-container" data-scroll-section>

        <m.div 
          initial={{y: "100%" }}
          animate={{ y: "0%" }}
          transition={{duration:0.75, ease: 'easeOut'}} 
          exit={{opacity: 1 }}
        >

          
          <section className='title deh' >
            <m.h2
              initial={{y: 0 }}
              animate={{ y: "100%" }}
              transition={{ delay:0.7, duration: 0.80}}
            > 
              Dehumanization as Entertainment
            </m.h2>
          </section>
        

          <div className="img_container"> 
            <div className="img_box"></div>
          </div>

          {/* <Gallery/> */}
        </m.div>
        <section className={"about-section"}>
          <SectionText title='Dehumanization as Entertainment'/>
          <p className="headline">
            Flirty Flowers is a blog about flowers and the floral designers who make
            them into art. Creativity and the art of ‘making’ require dialogue. The
            ull purpose of the Flirty Flowers blog is to encourage and inspire. We
            value art, we value insight, and we value opinion.
          </p>
        </section>
      </div>

    </>
    
  )
}

export default Sexism