import React from 'react';
import PropTypes from 'prop-types';
import render from 'react-dom';

export default class ExpenseSource extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: props.expense
        };
    }
    render() {
        return(
            <div className='panel panel-danger'>
                <div className='panel-heading'>
                    {this.state.expense.name}
                </div>
                <div className='panel-body'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <div className='well well-large salary-well'>
                                <h1>${this.state.expense.expense.month}</h1>/Monthly
                            </div>
                        </div>
                        <div className='col-xs-6'>
                            <div>
                                <h3>Type: {this.state.expense.type}</h3>
                                <h4>Description:</h4>
                                <p>{this.state.expense.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
ExpenseSource.propTypes = {
    expense: PropTypes.object.isRequired
}
