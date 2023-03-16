import React from 'react'
import'./index.css'
import SectionText from '../SectionText'
function index() {
  return (
    <>
      <section className={"about-section"} 
        data-scroll-section
      >
        <SectionText title='Why decolonize?'/>
          <p className="headline">
          PILARES DA COLONIZAÇAO Flirty Flowers is a blog about flowers and the floral designers who make
          them into art. Creativity and the art of ‘making’ require dialogue. The
          full purpose of the Flirty Flowers blog is to encourage and inspire. We
          value art, we value insight, and we value opinion.
          </p>
      </section>
      
    </>
  )
}

export default index
