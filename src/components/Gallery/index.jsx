// eslint-disable-next-line
import React, { useEfect } from 'react';
import './index.css';


const Gallery =(props ) =>{
  const imgs = props.imgs
  console.log(props,imgs)

  return (
    <div className='gallery-container'>
      {imgs.map((img)=>(
        
        <div className="gallery-img" key={img.id}>
           
          <img src={img.src} height={600} width={480} alt="" />
          <h1 className="gallery-info-title">{img.title}</h1>
          <h2 className="gallery-info-subtitle">{img.subtitle}</h2> 
        </div>

       
      ))}
       
       {/* <div className="gallery-img">
           
        <img src={props.src}  height={600} width={480}  alt="" />
          
      </div>

      <div className="gallery-item-info">
        {/* <h1 className="gallery-info-title">{props.title}</h1>
        <h2 className="gallery-info-subtitle">{props.subtitle}</h2> 
      </div> */}
      
     
      
    </div>
  )
}

export default Gallery
