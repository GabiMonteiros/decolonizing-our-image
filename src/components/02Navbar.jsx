//rfce
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
//import { Link as LinkScroll} from 'react-scroll'
import './Navbar.css'

 
function Navbar() {

    


    //mobile nav
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    //change color nav scrolling
    // const [ color, setColor] = useState(false)
    // const changeColor = () =>{
    //     if(window.screenY >= 850 ){
    //         setColor(true)
    //     }else{
    //         setColor(false)
    //     }
    // }

    //      window.addEventListener('scroll', changeColor)

        
    //close menu
    const closeMobileMenu = () => setClick(false)
    



    return (
    <>
        <nav className= 'navbar'>
            <div className="navbar-container">
                <Link
                    to="/"
                    className="navbar-logo nav-links"
                    onClick={closeMobileMenu}
                    
                    
                >
                    <h1>Decolonization of Image</h1>
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
                            data-page='Racism is Aesthetic'
                        >
                            Racism is Aesthetic
                        </Link>
                         
                    </li>      
                    <li className="nav-item">
                          
                    <Link
                        to="/violence-with-non-white-bodies"
                        className="nav-links"
                        onClick={closeMobileMenu}
                        data-page='Violence with non-white Bodies'
                    >
                        Violence with non-white Bodies
                    </Link>
                       
                  </li>  
                  <li className="nav-item">
                          
                    <Link
                        to="/sexism"
                        className="nav-links"
                        onClick={closeMobileMenu}
                        data-page='Sexism'
                    >
                        Sexism/Dehumanization
                    </Link>
                       
                  </li>   
                  
                  <li className="nav-item">
                          
                    <Link
                        to="/non-white-serving"
                        className="nav-links"
                        onClick={closeMobileMenu}
                        data-page='Sexism'
                    >
                        Always Serving
                    </Link>
                       
                  </li>   

                  <li className="nav-item">
                          
                    <Link
                        to="/google-image-search"
                        className="nav-links"
                        onClick={closeMobileMenu}
                        data-page='Who Am I?'
                    >
                        Google Image Search
                    </Link>
                       
                  </li> 

                  <li className="nav-item">
                          
                          <Link
                              to="/who-am-I"
                              className="nav-links"
                              onClick={closeMobileMenu}
                              data-page='Who Am I?'
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
