import React from 'react';
import render from 'react-dom';

export default class Tabs extends React.Component {
    construcor(props) {

    }

    render() {
        return(
            <div className="tabs">
                <button className="tablinks"><i className="fa fa-credit-card fa-2x" /></button>
                <button className="tablinks"></button>
                <button className="tablinks"></button>

            </div>
        );
    }
}
