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
          PILARES DA COLONIZAÇAO Flirty Flowers is a blog about flowers and the floral designers who make
          them into art. Creativity and the art of ‘making’ require dialogue. The
          full purpose of the Flirty Flowers blog is to encourage and inspire. We
          value art, we value insight, and we value opinion.
          </p>
      </section>
      
    </>
  )
}

export default About
