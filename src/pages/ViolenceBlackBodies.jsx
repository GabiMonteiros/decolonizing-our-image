import React, {useEffect, useState} from 'react';
import {motion as m }from 'framer-motion';
import hoverEffect from 'hover-effect';
import SectionText from '../components/SectionText';
import Gallery from '../components/Gallery';
import CarouselSlick from './../components/CarouselSlick';


function ViolenceNonWhiteBodies() {
  // eslint-disable-next-line  
  const [imgs, setImgs ]= useState([
    {
      id: 3,
      src: 'images/policia-criancasnegras2.png' ,
      title: 'A Brazilian Lady in her interior',
      subtitle: 'Jean Baptiste Debret, 1823',
      
    },
    {
      
      id: 4,
      src: 'images/02AcoiteJeanBaptisteDebret1834-1839.png' ,
      title: 'Editorial to the new Gucci store in Copacabana',
      subtitle: 'Vogue Brazil, 2019',
    }
    
  ]);  


  useEffect(() => {
    // eslint-disable-next-line 
    var image_animate = new hoverEffect({ 
      parent: document.querySelector('.img_box'),
      intensity: 0.7, 
      image1: '/images/AcoiteJeanBaptisteDebret-transicao.png' ,
      image2:'/images/policia-criancasnegras-transicao.png',
      displacementImage: '/images/dot.jpg'
        
    })
  })


  return (
    <>
      <div className="pages-container">
        <m.div 
          initial={{y: "100%" }}
          animate={{ y: "0%" }}
          transition={{duration:0.75, ease: 'easeOut'}} 
          exit={{opacity: 1 }}
        >
          
          <section className="title vwnwb">
            <m.h2
              initial={{y: 0 }}
              animate={{ y: "100%" }}
              transition={{ delay:0.7, duration: 0.80}}
            > Violence Against <br></br> Black Bodies
            </m.h2>
          </section>
   
          <div className="img_container"> 
            <div className="img_box"></div>
          </div>
        </m.div>

        <Gallery imgs={imgs}/>
        <section className={"about-section"}>
          <SectionText title='Violence Againts Black Bodies'/>
            <p className="headline">
              Flirty Flowers is a blog about flowers and the floral designers who make
              them into art. Creativity and the art of ‘making’ require dialogue. The
              full purpose of the Flirty Flowers blog is to encourage and inspire. We
              value art, we value insight, and we value opinion.
            </p>
        </section>
      </div>

      <CarouselSlick></CarouselSlick>

    </>

  )
}

export default ViolenceNonWhiteBodies
