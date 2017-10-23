import React from 'react';
import {BrowserRouter,Route } from 'react-router-dom';
import tabelInstance from './main'

var BaseRouter = (
    <BrowserRouter basename = "/">
        <div>
            <Route path="/index" component = { tabelInstance }/>
            {/*<Route path="/newIns" component = { }/>*/}
        </div>
    </BrowserRouter>
    );

export default BaseRouter;