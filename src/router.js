import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import DashBoard from './view/Dashboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={DashBoard} />
        </BrowserRouter>
    )
}

export default Routes;