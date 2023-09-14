// eslint-disable-next-line
import React, { useEfect } from 'react';
import './index.css';


const Gallery =(props ) =>{
  const imgs = props.imgs
  //console.log(props,imgs)

  return (
    <div className='gallery-container'> 
      {imgs.map((img)=>(
        <div className="gallery-img" key={img.id}>
          <img src={img.src} height={800} width={680} alt="" />
          <h1 className="gallery-info-title">{img.title}</h1>
          <h2 className="gallery-info-subtitle">{img.subtitle}</h2> 
        </div>

    
       
      ))}
        
    </div>
  )
}

export default Gallery
