import React from 'react';
import PropTypes from 'prop-types';
import render from 'react-dom';

export default class IncomeSource extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            source: props.income
        };
    }
    render() {
        return(
            <div className='panel panel-success'>
                <div className='panel-heading'>
                    {this.state.source.name}
                </div>
                <div className='panel-body'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <div className='well well-large salary-well'>
                                <h1>${this.state.source.income.month}</h1>/Monthly
                            </div>
                        </div>
                        <div className='col-xs-6'>
                            <div>
                                <h3>Type: {this.state.source.type}</h3>
                                <h4>Description:</h4>
                                <p>{this.state.source.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
IncomeSource.propTypes = {
    income: PropTypes.object.isRequired
}
