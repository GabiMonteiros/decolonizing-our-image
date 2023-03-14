import React, {useState} from 'react'
import * as GrIcons from "react-icons/gr";
import {Link} from 'react-router-dom'
import  SideBarData  from '../SideBarData';

import './index.css'



function Navbar() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)


  return (
    <>
        <div className="navbar" data-scroll-section>
            {/* navbar */}
            <div className="nav-item"> 
             {/* menu-bars */}
                <Link
                    to="/"
                    className="nav-links"  
                    onClick={showSidebar}    
                >
                    menu 
                </Link> 

                
            </div>
            <nav className={ sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className= 'nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link  to="/" className='menu-bars' >

                            <GrIcons.GrClose/>
                        </Link>
                    </li>
                    {SideBarData.map((item, index) => {
                        return(
                            <li key={index} className={item.clName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                    
            </nav>

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
