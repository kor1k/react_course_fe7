import React from 'react'
import {Route} from "react-router-dom";
import Home from './Components/Home/Home'
import City from './Components/City/City'
import About from './Components/About/About'

const RouterApp = function () {
    return (
        <>
            <Route path='/' exact component={Home}/>
            <Route path='/city/:id' component={City}/>
            <Route path='/about' component={About}/>
        </>
    )
};

export default RouterApp