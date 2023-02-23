import React, {useEffect} from 'react';
import hoverEffect from 'hover-effect';


function RacismisAesthetic() {

  
    useEffect(() => {
      // eslint-disable-next-line 
      var image_animate = new hoverEffect({ 
        parent: document.querySelector('.img_box'),
        intensity: 0.1,
        image1: '/images/01JeanBaptisteDebret1823.jpg' ,
        image2:'/images/01Vogue.png',
        displacementImage: '/images/heightMap.png'
        
      })
    })

  return (

    

    <>
      <main>
        <section className='title ria'>
          <h2>Racism is Aesthetic</h2>
        </section>
      </main>

      <div className="img_container"> 
      
        <div className="img_box"></div>
      </div>


    </>
    

  )
}

export default RacismisAesthetic
