import React from 'react';
import PropTypes from 'prop-types';
import render from 'react-dom';
import IncomeSource from './income/income-source.jsx';
import AddIncomeSource from './income/add-income-source.jsx';
import AddExpenseSource from './expense/add-expense-source.jsx';
import ExpenseSource from './expense/expense-source.jsx';


import {Button} from 'react-bootstrap';

export default class MonthlyBudget extends React.Component {
    constructor() {
        super();
        this.state = {
            incomeSources: [
                {
                    name: 'Ultimate Software',
                    type: 'Salary',
                    description: 'Software Engineer Intern',
                    income: {
                        month: 3000,
                        year: 48000
                    }
                },
                {
                    name: '74 Spring Street',
                    type: 'Investment',
                    description: 'Apartment',
                    income: {
                        month: 2000,
                        year: 24000
                    }
                }
            ],
            expenseSources: [
                {
                    name: 'Student Loans',
                    type: 'Debt',
                    description: 'Georgia Institute of Technology',
                    expense: {
                        month: 600,
                        year: 7200
                    }
                },
                {
                    name: 'Housing',
                    type: 'Rent',
                    description: '1257 Holly St, Atlanta, GA, 30318',
                    expense: {
                        month: 700,
                        year: 8400
                    }
                }
            ],
            salary: {
                month: 0
            }
        };
    }
    componentDidMount() {
        this.calculateMonthlySalary();
    }
    calculateMonthlySalary = () => {
        let sal = 0;
        this.state.incomeSources.forEach((inc) => {
            sal += inc.income.month;
        });
        this.state.expenseSources.forEach((ex) => {
            sal -= ex.expense.month;
        });
        this.setState({
            salary: {
                month: sal
            }
        });
    }
    saveIncome = (data) => {
        this.setState({
            incomeSources: this.state.incomeSources.concat({
                name: data.name,
                type: data.type,
                description: data.description,
                income: {
                    month: parseInt(data.month)
                }
            })
        }, this.calculateMonthlySalary
        );

        this.close();

    }
    saveExpense = (data) => {
        this.setState({
            expenseSources: this.state.expenseSources.concat({
                name: data.name,
                type: data.type,
                description: data.description,
                expense: {
                    month: parseInt(data.month)
                }
            })
        }, this.calculateMonthlySalary
        );

        this.close();
    }
    close = () => {
        this.setState({
            addIncome: false,
            addExpense: false

        });
    }
    changeSalary = (ev) => {
        let salary = parseInt(ev.target.value);
        this.setState({
            salary: {
                year: salary,
                month:salary/12,
                biweek:salary/26,
                week:salary/52
            }
        });
    }
    addIncomeSource = () => {
        this.setState({
            addIncome: true
        })
    }
    addExpenseSource = () => {
        this.setState({
            addExpense: true
        })
    }
    renderModal = () => {
        return (this.state.addIncome ? <AddIncomeSource saveIncome={this.saveIncome} close={this.close}/> : this.state.addExpense ? <AddExpenseSource saveExpense={this.saveExpense} close={this.close}/> : '' );
    }
    render() {
        return(
            <div className='container'>
                <h1>Monthly Salary: ${this.state.salary.month}</h1>
                {this.renderModal()}
                <div className="row">
                    <div className="col col-md-6">
                        <Button onClick={this.addIncomeSource}>Add income source</Button>

                        {this.state.incomeSources.map((inc) => {
                            return <IncomeSource income={inc}/>;
                        })}
                    </div>
                    <div className="col col-md-6">
                        <Button onClick={this.addExpenseSource}>Add expense source</Button>

                        {this.state.expenseSources.map((exp) => {
                            return <ExpenseSource expense={exp}/>;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
