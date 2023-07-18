import './App.css';
import React from "react"
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Content from './setup/Content';
import ScrollToTop from './components/ScrollToTop';

// import Footer from '../component/Footer';


 


const App = (props, router) => (
    <div className="App main-container"  data-scroll-container>
        
        <BrowserRouter>
            <ScrollToTop />
            <Navbar/>
            <AnimatePresence >
                <Content key={router.pathname} {...props}/>
            </AnimatePresence>
            
            {/* 
            
            
            <Footer/> */}
           
        </BrowserRouter>
    </div>
);


export default App;


