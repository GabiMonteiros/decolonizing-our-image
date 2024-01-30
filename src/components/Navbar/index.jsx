import React, {useState} from 'react'
import * as CgIcons from "react-icons/cg";
// import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom'
import SideBarData from '../SideBarData'
import './index.css'
import { IconContext } from 'react-icons';

 


 
function Navbar() {
 
    

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    

  return (
        <>
            <IconContext.Provider value={{color: '#e3be92'}}>
                <div className="navbar">
                    {/* navbar */}
                        <Link
                            
                           className="menu-bars"     
                        > 
                            <CgIcons.CgMenuHotdog onClick={showSidebar} />
                         
                        </Link> 
                    
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle close  menu-bars '>
                             

                                <AiIcons.AiOutlineClose/>
                                
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
                            Decolonizing Our Image
                        </Link>    
                    </div>

                    {/* <div className="nav-item">
                                    
                        <Link
                            to="/who-am-I"
                            className="nav-links"
                                            
                        >
                            Who Am I?
                        </Link>    

                    </div> */}

                    
 
                </div> 

                
            </IconContext.Provider>
        </>
    );
}

export default Navbar
