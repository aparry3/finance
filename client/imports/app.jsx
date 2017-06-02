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
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                      <Navbar.Brand>
                        <span>Aaron Parry</span>
                      </Navbar.Brand>
                      <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    <div className="row">
                        <div className="tab-container col-xs-1">
                            <Tabs />
                        </div>
                        <div className="col-xs-11">
                            <MonthlyBudget />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
