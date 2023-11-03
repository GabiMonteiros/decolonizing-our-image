import React from 'react';
import {motion as m }from 'framer-motion';
import SectionText from '../components/SectionText';


function WhoAmI(){

  return(
    <>

      <div className="pages-container" >
        <m.div 
          initial={{y: "100%" }}
          animate={{ y: "0%" }} 
          transition={{duration:0.75, ease: 'easeOut'}} 
          exit={{opacity: 1 }}
        >
          <section className='title wai' >
            <m.h2
              initial={{y: 0 }}
              animate={{ y: "100%" }}
              transition={{ delay:0.7, duration: 0.80}}
            >
             Who<br></br> Am I?
            </m.h2>

          </section>
            
          <div className="img_container">
            <div className="img_box"></div>
          </div>
          
  
        </m.div>
  

        <section className={"about-section"}>
            <SectionText title='White Centrism'/>
              <p className="headline">
                Flirty Flowers is a blog about flowers and the floral designers who make
                them into art. Creativity and the art of ‘making’ require dialogue. The
                full purpose of the Flirty Flowers blog is to encourage and inspire. We
                value art, we value insight, and we value opinion.
              </p>
          </section>


      </div>  
    </>
  )

} export default WhoAmI
