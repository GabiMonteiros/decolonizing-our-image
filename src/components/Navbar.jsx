import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="nav-item">
                <Link
                    to="/"
                    className="nav-links"
                                    
                >
                    menu
                </Link>
            </div>

            <div className="nav-item">
                <Link
                    to="/"
                    className="nav-links"
                                
                >
                    Decolonize the Image
                </Link>    
            </div>

            <div className="nav-item">
                            
                <Link
                    to="/who-am-I"
                    className="nav-links"
                                    
                >
                    Who Am I?
                </Link>    

            </div>

            
        </div> 

        <section className='header-container'>
            <ul className= 'header-menu'>
                    <li className="nav-item">
                            
                        <Link
                            to="/racism-is-aesthetic"
                            className="nav-links"
                                
                        >
                            Racism is Aesthetic
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
    </>
  );
}

export default Navbar
