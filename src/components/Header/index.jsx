import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'

function index() {
  return (
    <>
        <section className='header-container' data-scroll-section>
            <ul className= 'header-menu'>
                <li className="nav-item">
                            
                    <Link
                        to="/white-centrism"
                        className="nav-links"
                                
                    >
                        Whitecentrism
                    </Link>
                            
                </li>      
                <li className="nav-item">
                            
                    <Link
                        to="/violence-with-non-white-bodies"
                        className="nav-links"
                            
                    >
                         Violence with non-white Bodies
                    </Link>
                        
                </li>  
                <li className="nav-item">
                            
                    <Link
                        to="/sexism"
                        className="nav-links"
                           
                    >
                        Sexism/Dehumanization
                    </Link>
                        
                </li>   
                    
                <li className="nav-item">
                                
                    <Link
                        to="/non-white-serving"
                        className="nav-links"
                                
                    >
                        Always Serving
                    </Link>
                            
                </li>   

                <li className="nav-item">
                            
                    <Link
                        to="/google-image-search"
                        className="nav-links"
                            
                    >
                        Google Image Search
                    </Link>
                        
                </li> 

                    
            </ul>    
            
        </section>

        <section className='text-container'>
                <h1 id='header-text'> Decolonize  
                    <br></br>The
                Image</h1>
        </section>
    </>
  )
}

export default index
