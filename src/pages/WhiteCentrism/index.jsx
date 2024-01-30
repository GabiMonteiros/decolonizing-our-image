import React, {useEffect, useState, useRef}  from 'react';
import {motion as m }from 'framer-motion';
import hoverEffect from 'hover-effect';
import Gallery from '../../components/Gallery'
import SectionText from '../../components/SectionText';
import Carousel from '../../components/Carousel';
import cn from 'classnames';

import SplitText from '../../utils/Split3.min.js';
import useOnScreen from '../../hooks/useOnScreen';
import gsap from 'gsap';

//import SectionGallery from '../components/SectionGallery';




const WhiteCentrism = () =>{
  // eslint-disable-next-line  
  const [imgs, setImgs ]= useState([
    {
      src: 'images/01JeanBaptisteDebret1823.png' ,
      title: 'A Brazilian Lady in her interior',
      subtitle: 'Jean Baptiste Debret, 1823',
      id: 1
    },
    {
      
      src: 'images/01vogue2.png' ,
      title: 'Editorial to the new Gucci store in Copacabana',
      subtitle: 'Vogue Brazil, 2019',
      id: 2
    }
    
  ]);   

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

  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() =>{
    if(onScreen) setReveal(onScreen);
  }, [onScreen])

    useEffect(()=>{
      //about text animation
      if(reveal){
        const split = new SplitText('#text-about', {
          type: 'lines',
         
        });
  
  
        gsap.to(split.lines,{
          duration: 1, 
          y: -80,
          opacity: 1, 
          stagger: 0.1,
          ease: 'power4.out',
       
        });
      
      }
        
    },[reveal])
  
   

  return (
    <> 
      
      
      <div className="pages-container" >
          <m.div 
            initial={{y: "100%" }}
            animate={{ y: "0%" }} 
            transition={{duration:0.75, ease: 'easeOut'}} 
            exit={{opacity: 1 }}
          >
            <section className='title wc' >
              <m.h2
                initial={{y: 0 }}
                animate={{ y: "100%" }}
                transition={{ delay:0.7, duration: 0.80}}
              >
                White Centrism
              </m.h2>

            </section>
            
            <div className="img_container">
              <div className="img_box"></div>
            </div>
          
  
          </m.div>
      </div> 
      <Gallery imgs={imgs}/>
        
          

        <section className={cn("about-section", {'is-reveal': reveal})}
          
        >
          <SectionText title='White Centrism'/>
            <p  ref={ref} id="text-about"
            className={cn({'is-reveal': reveal})}
            >
            Ideologias coloniais criadas há mais de 500 anos que reproduzem a lógica de dominação e inferiorização das pessoas não brancas no mundo Ocidental,
            são sustentadas até os dias de hoje através de imagens sejam fotograficas ou de vídeo. 
            Partindo da minha pesquisa entitulada 'Racismo é Estético' e seguindo teoricas como Patricia Hill Collins 
            mídia tem um lugar central para consolidação e manutenção das imagens de controle  e de privilégios. 
            As imagens de controle neutralizam na elite / branquitude os impactos que a manutenção dos seus privilégios 
            econômicos e sociais causaram na vida da população não branca. Tem um motivo para essas imagens de controle 
            serem propagadas de forma tão massiva  na mídia para q seja confortável para à população branca que haja 
            justificativas ideológicas que lhes retire a responsabilidade de responder pelo continuo de violência que 
            a exploração econômica do não branco  que significa na manutenção e construção do status quo da branquitude.
            Assim essas pessoas se confortam e tem uma justificativa para o processo contínuo de desumanização dos não brancos, q não os afetam 
            </p>
        </section>
        
      
        <Carousel></Carousel>

    </>
      
  )
    
}
export default WhiteCentrism
