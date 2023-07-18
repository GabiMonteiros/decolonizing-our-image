import React, {useState} from 'react';
import './index.css';

//array of images  - 18.30min no Web Unlocked
const images=[
    { 
        src: '/images/01JeanBaptisteDebret1823.png' ,
        title: 'A Brazilian Lady in her interior',
        subtitle: 'Jean Baptiste Debret, 1823',
       

    },
    {
        src: '/images/01vogue2.png' ,
        title: ' Gucci store in Copacabana',
        subtitle: 'Vogue Brazil, 2019',

    },
    // {
    //     src: '/images/policia-criancasnegras2.png' ,
    //     title: 'A Brazilian Lady in her interior',
    //     subtitle: 'Jean Baptiste Debret, 1823',
    //     category: 'Whitecentrism',

    // },
    // {
    //     src: '/images/02AcoiteJeanBaptisteDebret1834-1839.png' ,
    //     title: 'Editorial to the Gucci store in Copacabana',
    //     subtitle: 'Vogue Brazil, 2019',

    // },
];

//creating a new component 
function GalleryItem({
    src, 
    subtitle,
    title,
    updateActiveImage, 
    index,
}) {
    
    return( 
        <>
            <div className="gallery-item-wrapper" data-scroll-section>
                <div>
                <div className="gallery-item">
                    <div className="gallery-item-info">
                        <h1 className='gallery-info-title'>{title}</h1>
                        <h6 className='gallery-info-subtitle'>{subtitle}</h6>
                    </div>
                    <div className="gallery-item-image"
                    style={{backgroundImage:`url(${src})`}}
                    ></div>
                </div>
                </div> 
            </div>
        </>
    );
  
}

export default function Gallery()  {
    const [activeImage, setActiveImage] =useState(1); 
    
    return( 
        <>
            <section className='section-wrapper gallery-wrap'  data-scroll-section>

                <div className="gallery">
                    <div className="gallery-counter"> {/* slideshow /contador */}
                        <span>{activeImage}</span>
                        <span className='divider'/>
                        <span>{images.length}</span>


            
                    </div>
                    {/* getting the image and the index , and new component GalleryItem*/}
                    {images.map((image,index)=>( 
                        <GalleryItem

                            key={image.src}     //string is passed -image.src ir the key 

                            index={index}
                            {... image} //all the objects from the image
                            updateActiveImage={(index) => setActiveImage(index + 1)}
                        />
                        
                    ))}
                </div>
            </section>
        </>
    );
      
}
