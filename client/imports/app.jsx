import React from 'react';
import render from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import { Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import MonthlyBudget from './monthly-budget-app/monthly-budget-app.jsx'
import Tabs from './ui/tabs.jsx'
export default class App extends React.Component {
    construcor(props) {

    }

    render() {
        return(
            <div className="application">
                <div className="row top-bar">
                </div>
                <div className="content">
                    <div className="content">
                        <div className="tab-container">
                            <Tabs />
                        </div>
                        <div className="app-container">
                            <MonthlyBudget />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
