import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import HomePage from './pages/Home Page/HomePage'
import GameSetup from './pages/gameSetup/game-setup'
import GoalSetup from './pages/goalSetup/goal-setup'
import TrackingPage from './pages/TrackingPage'
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/game-setup" component={GameSetup} />
                    <Route path="/goal-setup" component={GoalSetup} />
                    <Route path="/game" component={TrackingPage} />
                </Switch>
            </Router>
        )
    }
}