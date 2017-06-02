import React from 'react';
import render from 'react-dom';

export default class Tabs extends React.Component {
    construcor(props) {

    }

    render() {
        return(
            <div className="tabs">
                <button className="tablinks"><span className="fa fa-credit-card fa-3x"></span></button>
                <button className="tablinks"></button>
                <button className="tablinks"></button>

            </div>
        );
    }
}
