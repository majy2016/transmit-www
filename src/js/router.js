import React from 'react'
import {BrowserRouter,Route } from 'react-router-dom'
import Main from './main'
import MainNewIns from './newIns'

var BaseRouter = (
    <BrowserRouter basename = "/">
        <div>
            <Route path="/index" component = {Main}/>
            <Route path="/newIns" component = {MainNewIns}/>
        </div>
    </BrowserRouter>
    )

export default BaseRouter