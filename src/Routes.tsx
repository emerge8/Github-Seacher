import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './Pages/Home/Search';
import Home from './Pages/Home';
import Navbar from './core/components/Navbar';


const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;