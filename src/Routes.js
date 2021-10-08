import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage'
import GameSetup from './pages/GameSetup/game-setup'
import GoalSetup from './pages/GoalSetup/goal-setup'
import StatTrackingPage from './pages/StatTracker/stat-tracker'
import GameStatsPage from './pages/GameStats/game-stats'
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/game-setup" component={GameSetup} />
                    <Route path="/goal-setup" component={GoalSetup} />
                    <Route path="/game-tracking" component={StatTrackingPage} />
                    <Route path="/game-stats" component={GameStatsPage} />
                </Switch>
            </Router>
        )
    }
}