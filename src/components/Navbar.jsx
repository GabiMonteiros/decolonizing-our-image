//rfce
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    
    
    const handleClick = () => setClick(!click)
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
                </Link> 

                <div className="menu-icon" onClick={handleClick}>
                    {/* burger menu */}
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {/* qnd clica desaparece o menu */}


                </ul>   
            </div> 
        </nav>
    </>
  );
}

export default Navbar
