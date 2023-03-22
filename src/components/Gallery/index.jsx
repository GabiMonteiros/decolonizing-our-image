import React, {useState, useEffect, useRef} from 'react';
 import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import cn from 'classnames';
import './index.css';

//array of images  - 18.30min
const images=[
    {
        src: '/images/01JeanBaptisteDebret1823.png' ,
        title: 'A Brazilian Lady in her interior',
        subtitle: 'Jean Baptiste Debret, 1823',
        category: 'Whitecentrism',

    },
    {
        src: '/images/01vogue2.png' ,
        title: 'Editorial to the  Gucci store in Copacabana',
        subtitle: 'Vogue Brazil, 2019',
        category: 'Whitecentrism',

    },
    {
        src: '/images/policia-criancasnegras2.png' ,
        title: 'A Brazilian Lady in her interior',
        subtitle: 'Jean Baptiste Debret, 1823',
        category: 'Whitecentrism',

    },
    {
        src: '/images/02AcoiteJeanBaptisteDebret1834-1839.png' ,
        title: 'Editorial to the Gucci store in Copacabana',
        subtitle: 'Vogue Brazil, 2019',
        category: 'Whitecentrism',

    },
];

//creating a new component 
function GalleryItem({src, category, subtitle,title,updateActiveImage, index}) {
    return( 
        <>
            <div className='gallery-item-wrapper' data-scroll-section>
                {/* <div></div> */}
                <div className="gallery-item">
                    <div className="gallery-item-info">
                        <h1 className='gallery-info-title'>{title}</h1>
                        <h6 className='gallery-info-subtitle'>{subtitle}</h6>
                        {/* <p className='gallery-info-category'>{category}</p> */}
                    </div>
                    <div className="gallery-item-image"
                    style={{backgroundImage:`url(${src})`}}
                    ></div>
                </div>
                {/* <div></div> */}
            </div>
        </>
    );
  
}

export default function Gallery(){
    const [activeImage, setActiveImage] =useState(1); 
    const ref = useRef(null)

    useEffect(()=>{

        setTimeout(()=>{

            const sections = gsap.utils.toArray('.gallery-item-wrapper');
            gsap.to(sections,{
                xPercent: -100 * (sections.length-1),
                ease:'none',
                scrollTrigger:{
                    start: 'top top',
                    trigger: ref.current,
                    scroll: '.pages-container',
                    pin: true,
                    scrub: 0.5,
                    span: 1/(sections.length-1),
                    end:()=> `+=$ {ref.current.offsetWidth}`,
                },
            })
            //ScrollTrigger.refresh()
        })
    },[])
    return( 
        <>
            <section className='section-wrapper gallery-wrap'  data-scroll-section>

                <div className="gallery" ref={ref}>
                    <div className="gallery-counter"> {/* slideshow */}
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
                            updateActiveImage={(index)=> setActiveImage(index +1)}
                        />
                        
                    ))}
                </div>
            </section>
        </>
    );
      
}
