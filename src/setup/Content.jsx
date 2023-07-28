import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sexism from "../pages/Dehumanization";
import AlwaysServing from '../pages/AlwaysServing';
import GoogleImageSearch from "../pages/GoogleImageSearch";
import WhoAmI from "../pages/WhoAmI";
import NotFound from "../pages/NotFound";
import ViolenceNonWhiteBodies from '../pages/ViolenceBlackBodies';
import WhiteCentrism from '../pages/WhiteCentrism';

 
const Content = (props) =>(
    <main className="main-container">
    
        <Routes> 
            <Route extact path='/' element={ <Home />}></Route>
            <Route extact path='/white-centrism' element={ <WhiteCentrism />}></Route>

            <Route extact path='/violence-black-bodies' element={ <ViolenceNonWhiteBodies />}></Route>
            <Route extact path='/dehumanization' element={ <Sexism />}></Route>
            <Route extact path='/always-serving' element={ <AlwaysServing />}></Route>
            <Route extact path='/google-image-search' element={ <GoogleImageSearch />}></Route>
            <Route extact path='/who-am-I' element={ <WhoAmI />}></Route>
            
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </main>
);

export default Content;

