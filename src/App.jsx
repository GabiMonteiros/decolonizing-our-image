import './App.css';
import React from "react"
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Content from './components/Content';
// import Footer from '../component/Footer';
// import ScrollToTop from '../component/ScrollToTop'





const App = (props, router) => (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <AnimatePresence >
                <Content key={router.pathname} {...props}/>
            </AnimatePresence>
            
            {/* <ScrollToTop/>
            
            <Content />
            <Footer/> */}
           
        </BrowserRouter>
    </div>
);


export default App;


// const App = (props, router) => (
//     <div className="App">
//         <BrowserRouter>
//             <Navbar/>
//             <AnimatePresence >
//                 <Content key={router.pathname} {...props}/>
//             </AnimatePresence>
            
//             {/* <ScrollToTop/>
            
//             <Content />
//             <Footer/> */}
           
//         </BrowserRouter>
//     </div>
// );