// eslint-disable-next-line
import React, { useEfect } from 'react';
import './index.css';
//import images from './../../dataGallery';

export const Gallery = ({
    src,
    id,
    subtitle
}) => {

  return (
    <div className='card-container'>
        <div className="card-img">
            <img src="/images/01vogue2.png" height={600} width={480} alt="" />
        </div>
        
        <div className="gallery-item-info">
            <h1 className="gallery-info-title">Editorial to the new Gucci store in Copacabana</h1>
            <h2 className="gallery-info-subtitle">Vogue Brazil, 2019</h2>
        </div>


      {/* {images.map((id)=>(
        <div className="family-item">
            <div className="family-item-image" style= {{backgroundImage: `id(${id})`}}>

            </div>
        </div>
      ))} */}
    </div>
  )
}

export default Gallery
