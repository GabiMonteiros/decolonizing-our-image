import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'


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


    </>
  );
}

export default Navbar
