import React, {useEffect, useState, useRef} from 'react' //{useEffect, useRef} 
import'./index.css'
import SectionText from '../SectionText'
import gsap from 'gsap'
import cn from 'classnames'
import SplitText from '../../utils/Split3.min.js'
import useOnScreen from '../../hooks/useOnScreen'

function About() {
  

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
        y: -100,
        opacity: 1,
        stagger: 0.1,
        ease: 'power2.out',
    
      });
    
    }
    
  },[reveal])

  return (
    <>
        {/* <section className={cn("about)-section",{'is-reveal': reveal})}  */}

      <section className={cn("about-section", {'is-reveal': reveal})}
        data-scroll-section
      >
        <SectionText title='Why decolonize?'/>
          {/* <p  className="headline"> */}
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
      
    </>
  )
}

export default About
