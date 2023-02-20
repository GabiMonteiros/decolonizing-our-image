//rfce
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
     const [click, setClick] = useState(false);
    
    
    const handleClick = () => setClick(!click);
     const closeMobileMenu = () => setClick(false)
    


    

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link
                    to="/"
                    className="navbar-logo" 
                     onClick={closeMobileMenu}
                >
                    Decolonization of Image
                     {/* <i className='fab fa-typo3'/>  aaaa logo*/}
                </Link> 

                <div className="menu-icon"
                 onClick={handleClick}
                 >
                    {/* burger menu */}
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {/* qnd clica desaparece o menu */} 
                    <li className="nav-item">
                          
                        <Link
                            to="/racism-is-aesthetic"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Racism is Aesthetic
                        </Link>
                         
                    </li>      
                    <li className="nav-item">
                          
                    <Link
                        to="/violence-with-non-white-bodies"
                        className="nav-links"
                        onClick={closeMobileMenu}
                    >
                        Violence with non-white Bodies
                    </Link>
                       
                  </li>  
                  <li className="nav-item">
                          
                    <Link
                        to="/sexism"
                        className="nav-links"
                        onClick={closeMobileMenu}
                    >
                        Sexism
                    </Link>
                       
                  </li>   

                  <li className="nav-item">
                          
                    <Link
                        to="/google-image-search"
                        lassName="nav-links"
                        onClick={closeMobileMenu}
                    >
                        Google Image Search
                    </Link>
                       
                  </li> 

                  <li className="nav-item">
                          
                          <Link
                              to="/who-am-I"
                              lassName="nav-links"
                              onClick={closeMobileMenu}
                          >
                              Who Am I?
                          </Link>
                             
                        </li> 
                </ul>   
            </div> 
        </nav>
    </>
  );
}

export default Navbar
