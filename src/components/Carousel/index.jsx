import React, { useState } from 'react'
import './index.css'
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { CarouselData } from './carouselData';

const Carousel = ({carousels}) => {
    const [current, setCurrent ] = useState(0);
    const length = carousels.length;

    const nextSlide =() =>{
        setCurrent(current === length -1 ? 0 : current +1)
    }

    if(!Array.isArray(carousels) || carousels.length <=2){
        return null;
    }

    return (
        <>
            <IconContext.Provider value={{color: '#e3be92'}} >

                <div className="wrapper">
                    <ul className="angle-left">
                    {/* onClick={prevSlide} */}
                        <AiIcons.AiOutlineDoubleLeft/> 
                    </ul>
            
                    <div className="carouselus">

                        {CarouselData.map((carousel, index) => {
                            return <img src={carousel.image}  alt='' className='img'/>

                        
                        })}
                        {/* <img src="images/01JeanBaptisteDebret1823.png" alt="Debret Painting" />
                        <img src="images/posterHumanZoo.png" alt="" />
                        <img src="images/policia-criancasnegras2.png" alt="" />
                        
                        <img src="images/SenhoraEscravos1860.png" alt="" /> */}
                    </div>
                    <ul className="angle-right" onClick={nextSlide}>
                        <AiIcons.AiOutlineDoubleRight/>
                    </ul>
                </div>
        
            </IconContext.Provider>
            
        
        
        

        </>
    )
}

export default Carousel

