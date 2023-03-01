import React from 'react'
import './Home.css'
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
          <img src="/images/SarahBaartman-APairofBroadBottoms-1810.jpg" alt="" style={{ width: "330px", height: "490px" }} />
        </div>
        <div className="featured-column-layout">
          <h6>A maldiçao de Can 1895</h6>
          <img src="/images/RedencaodeCan1895-ModestoBrocos.jpg" alt=""  style={{ width: "580px", height: "730px" }}/>
        </div>
      </div>
    </>
  )
}

export default Home
