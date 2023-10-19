import React from 'react'
import './index.css'
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

function Carousel() {
  return (
    <>
        <IconContext.Provider value={{color: '#e3be92'}} >

            <div className="wrapper">
                <ul className="angle-left">
                    <AiIcons.AiOutlineDoubleLeft/> 
                </ul>
        
                <div className="carousel">
                    <img src="images/01JeanBaptisteDebret1823.png" alt="Debret Painting" />
                    <img src="images/posterHumanZoo.png" alt="" />
                    <img src="images/policia-criancasnegras2.png" alt="" />
                    
                    <img src="images/SenhoraEscravos1860.png" alt="" />
                </div>
                <ul className="angle-right">
                    <AiIcons.AiOutlineDoubleRight/>
                </ul>
            </div>
     
        </IconContext.Provider>
        
    
      
    

    </>
  )
}

export default Carousel
