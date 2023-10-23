import React from 'react'
import './index.css'
// import * as AiIcons from 'react-icons/ai';
// import { IconContext } from 'react-icons';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Carouselus() {

    const responsive = {
        superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
          breakpoint: { max: 2000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
     
   
    return (
        <>

            <Carousel 
    //             {/* <div className="wrapper">
    //                 <div className="carouselus"> 
    //                     <img src="images/01JeanBaptisteDebret1823.png" alt="Debret Painting" /> 
    //                     <img src="images/posterHumanZoo.png" alt="" />
    //                     <img src="images/policia-criancasnegras2.png" alt="" />
                        
    //                     <img src="images/SenhoraEscravos1860.png" alt="" />
    //                 </div>

    // </div> */}
                swipeable={false}
                draggable={false}
                
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
               
                itemClass="carousel-item-padding-5-px"
                centerMode={true} 
                // afterChange={(previousSlide, { currentSlide, onMove }) => {
                //     doSpeicalThing();
                //   }}
                // como usaaaaar???
                >


                <div className="card">
                    <img className="topic-image" src="images/01JeanBaptisteDebret1823.png" alt="Debret Painting" /> 
                </div>
                <div className="card">
                    <img className="topic-image" src="images/posterHumanZoo.png" alt="" />
                </div>    
                <div className="card">
                    <img className="topic-image" src="images/policia-criancasnegras2.png" alt="" />
                </div>
                <div className="card">
                    <img className="topic-image" src="images/SenhoraEscravos1860.png" alt="" />
                </div>    
                    

               
                    
            </Carousel>;


            {/* <IconContext.Provider value={{color: '#e3be92'}} >

                <div className="wrapper">
                    <ul className="angle-left"  >
                  
                        <AiIcons.AiOutlineDoubleLeft/> 
                    </ul>
            
                    <div className="carouselus">
 
                   
                        <img src="images/01JeanBaptisteDebret1823.png" alt="Debret Painting" /> 
                        <img src="images/posterHumanZoo.png" alt="" />
                        <img src="images/policia-criancasnegras2.png" alt="" />
                        
                        <img src="images/SenhoraEscravos1860.png" alt="" />
                    </div>
                    <ul className="angle-right" >
                        <AiIcons.AiOutlineDoubleRight/>
                    </ul>
                </div>
        
            </IconContext.Provider> */}
            
        
        
        

        </>
    )
}

export default Carouselus

