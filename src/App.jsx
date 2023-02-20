import './App.css';
import React from "react"
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
// import Content from '../component/Content';
// import Footer from '../component/Footer';
// import ScrollToTop from '../component/ScrollToTop'
import './App.css';




const App = (props) => (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            {/* <ScrollToTop/>
            
            <Content />
            <Footer/> */}
          <h1>Hallo</h1>  
        </BrowserRouter>
    </div>
);


export default App;