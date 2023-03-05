import React from 'react'
import './Home.css'
import SectionText from './SectionText'

function Home() {
  return (
    
    <>
      <section className='home-container'>
   
        <h1 id='home-text'> Decolonize  
        <br></br>The
        Image</h1>
      </section>

      <div className="featured-section">
        <div className="featured-row-layout">
          <h6>Sara Batiman 1810</h6>
          <img src="/images/SarahBaartman-APairofBroadBottoms-1810.jpg" alt=""  />
        </div>
        <div className="featured-column-layout">
          <h6>maldiçao de Can 1895</h6>
          <img src="/images/RedencaodeCan1895-ModestoBrocos.jpg" alt=""  />
        </div>
      </div>

      <div className={"about-section"}>
      <SectionText title='Why decolonize?'/>
        <p id="headline">
          Flirty Flowers is a blog about flowers and the floral designers who make
          them into art. Creativity and the art of ‘making’ require dialogue. The
          full purpose of the Flirty Flowers blog is to encourage and inspire. We
          value art, we value insight, and we value opinion.
        </p>
      </div>

    </>
  )
}

export default Home
