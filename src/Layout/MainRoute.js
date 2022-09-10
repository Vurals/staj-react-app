import React from 'react';
import { Route, Routes } from 'react-router-dom';
//import Home from '../pages/Home';
//import About from '../pages/About';

const Home = React.lazy(() => import('../Pages/Home'));
const About = React.lazy(() => import('../Pages/About'));
const Login = React.lazy(() => import('../Pages/Login'));
const Cart = React.lazy(() => import('../Pages/ShoppinCartPage'));

export const MainRoutes = [
    <Routes>
        <Route key="homeroute" exact path={`/`} element={<Home />} />,
        <Route key="aboutroute" exact path={`/about`} element={<About/>} />,
        <Route key="loginpageroute" exact path={`/login`} element={<Login />} />,
        <Route key="cartpageroute" path={`/cart`} element={<Cart/>} />,
    </Routes>
];
//:#referer?
//const parseUrlParams = (Comp) => {
//    return <Comp />
//}