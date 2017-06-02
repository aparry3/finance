import React from 'react';
import PropTypes from 'prop-types';
import render from 'react-dom';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default class AddExpenseSource extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            description: '',
            month: ''


        };
    }
    updateIncome = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.name === 'income' ? parseInt(ev.target.value) : ev.target.value
        })
    }
    save = () => {
        this.props.saveExpense(this.state);
    }
    close = () => {
        this.setState({
            name: '',
            type: '',
            description: '',
            month: ''
        });
        this.props.close();
    }
    render() {
        return(
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Add New Expense Source</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <label htmlFor='name'>Name</label>
                            <input className="form-control" name="name" onChange={this.updateIncome} value={this.state.name}/>
                            <label htmlFor='type'>Type</label>
                            <input className="form-control" name="type" onChange={this.updateIncome} value={this.state.type}/>
                            <label htmlFor='description'>Description</label>
                            <input className="form-control" name="description" onChange={this.updateIncome} value={this.state.description}/>
                            <label htmlFor='month'>Month</label>
                            <input className="form-control" name="month" onChange={this.updateIncome} value={this.state.month}/>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button bsStyle="success" onClick={this.save}>Save</Button>
                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        );
    }
}
AddExpenseSource.propTypes = {
    saveExpense: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired

}
