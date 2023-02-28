import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import RacismisAesthetic from "./pages/RacismisAesthetic";
import Sexism from "./pages/Sexism";
import NonWhiteServing from './pages/NonWhiteServing';
import GoogleImageSearch from "./pages/GoogleImageSearch";
import WhoAmI from "./pages/WhoAmI";
import NotFound from "./pages/NotFound";
import ViolenceNonWhiteBodies from './pages/ViolenceNonWhiteBodies';


const Content = (props) =>(
    <main className="Content">
        <Routes> 
            <Route extact path='/' element={ <Home />}></Route>
            <Route extact path='/racism-is-aesthetic' element={ <RacismisAesthetic />}></Route>
            
            <Route extact path='/violence-with-non-white-bodies' element={ <ViolenceNonWhiteBodies />}></Route>
            <Route extact path='/sexism' element={ <Sexism />}></Route>
            <Route extact path='/non-white-serving' element={ <NonWhiteServing />}></Route>
            <Route extact path='/google-image-search' element={ <GoogleImageSearch />}></Route>
            <Route extact path='/who-am-I' element={ <WhoAmI />}></Route>
            
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </main>
);

export default Content;
