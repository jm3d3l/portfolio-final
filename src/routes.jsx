import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/home';
import PortfolioPage from './pages/portfolio';
import AboutMePage from './pages/about-me';
import ContactMePage from './pages/contact-me';
import Navigationbar from './common/navigationbar/index';

const RoutePage = () => {
    const routes = [
        {
            path: "/portfolio",
            component: PortfolioPage,
        },
        {
            path: "/about-me",
            component: AboutMePage,
        },
        {
            path: "/contact-me",
            component: ContactMePage,
        },
        {
            path: "/",
            component: HomePage
        }
    ];
    return (
        <Router>
            <Navigationbar />
            <Switch>
                {routes.map((route, i) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                    />
                ))}
            </Switch>
        </Router>

    );
}

export default RoutePage;