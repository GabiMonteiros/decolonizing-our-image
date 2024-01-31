import React from 'react'
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function CarouselNovo() {
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   
  return (
    <div className='carousel'>
      <h2>Crousel Tut</h2>   

      <Slider {...settings}>
          
        <div className="box">
         
         
          <img src="images/01JeanBaptisteDebret1823.png" alt="" />
          {/* <div className="box-body">
            <h2> A Brazilian Lady in her interior</h2>
            <h3> Jean Baptiste Debret, 1823 </h3>
            <h4>category: 'Whitecentrism</h4>

          </div> */}
        </div> 

        <div className="box">
         
         
          <img src="images/posterHumanZoo.png" alt="" />
        </div> 
        <div className="box">
          
          <img src="images/policia-criancasnegras2.png" alt="" />
        </div> 

        <div className="box">
          
          <img src="images/SenhoraEscravos1860.png" alt="" />
        </div> 


        <div className="box">
          
          <img src="images/policia-criancasnegras2.png" alt="" />

        </div> 
      </Slider>  

    </div>
  )
  
}

export default CarouselNovo
