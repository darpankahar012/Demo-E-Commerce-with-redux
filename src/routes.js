import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signin from './User/Signin'
import Signup from './User/Signup'
import Dashboard from './User/UserDashboard';
import adminDashboard from './User/AdminDashboard';
import Profile from './User/profile';
import Home from './core/Home'
import Product from './core/Product';
import Cart from './core/Cart';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signin" exact component={Signin} />
                    <Route path="/signup" exact component={Signup} />

                    <Route path="/user/dashboard" exact component={Dashboard} />
                    <Route path="/admin/dashboard" exact component={adminDashboard} />
                    <Route path="/profile/:userId" exact component={Profile} />

                    <Route path="/product/:productId" exact component={Product} />
                    <Route path="/cart" exact component={Cart} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;