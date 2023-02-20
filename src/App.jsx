import './App.css';
import React from "react"
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Content from './components/Content';
// import Footer from '../component/Footer';
// import ScrollToTop from '../component/ScrollToTop'





const App = (props) => (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Content />
            {/* <ScrollToTop/>
            
            <Content />
            <Footer/> */}
           
        </BrowserRouter>
    </div>
);


export default App;