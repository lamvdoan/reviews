import DashboardPage from '../components/DashboardPage';
import Header from '../components/Header';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () =>  (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;