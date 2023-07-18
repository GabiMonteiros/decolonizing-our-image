import React from 'react'
import './index.css'
//rfce
function SectionGallery({images}) {
  return (
    <>
    <div className="wrapper">
        <div className="carousel">
            <div className="image">{images}</div>
        </div>
    </div>
      

      

    </>
  )
}

export default SectionGallery
