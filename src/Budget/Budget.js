import React, { Component } from 'react'
import BudgetOutput from '../BudgetOutput/BudgetOutput';
import BudgetForm from '../BudgetForm/BudgetForm';
import './Budget.scss'


class Budget extends Component {
    

    constructor(props) {
        super(props)

        this.state = {
            incomeItems: [],
            expenseItems: []
        }

        this.addItem = this.addItem.bind(this);
        this.changeItemAmount = this.changeItemAmount.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }

    addItem(item) {
        if(item.type === 'Income') {
            this.setState(st => ({
                incomeItems: [...st.incomeItems, item]
            }))

        } else {
            this.setState(st => ({
                expenseItems: [...st.expenseItems, item]
            }))
        }

       
    }

    changeItemAmount(id, type, updatedAmt) {
        if(type === 'Income') {
            const updatedIncome = this.state.incomeItems.map(oldItem => {
                if(oldItem.id === id) {
                    return {...oldItem, amount: updatedAmt }
                }
                
                return oldItem;
            })

            this.setState({incomeItems: updatedIncome})
        }

        if(type === 'Expense') {
            const updatedExpense = this.state.expenseItems.map(oldItem => {
                if(oldItem.id === id) {
                    return {...oldItem, amount: updatedAmt }
                }
                
                return oldItem;
            })

            this.setState({expenseItems: updatedExpense})
        }
    }

    deleteItem(id, type) {
        if(type === 'Income') {
            this.setState({
                incomeItems: this.state.incomeItems.filter(oldItem => {
                    if(id !== oldItem.id) return oldItem
                })
            })
        }

        if(type === 'Expense') {
            this.setState({
                expenseItems: this.state.expenseItems.filter(oldItem => {
                    if(id !== oldItem.id) return oldItem
                })
            })
        }

    }

    render() {
        return(
           <div className="Budget">
               <div className="Background"></div>

               <BudgetForm addItem={this.addItem}/>
               <BudgetOutput incomeItems={this.state.incomeItems} expenseItems={this.state.expenseItems} changeItemAmt={this.changeItemAmount} deleteItem={this.deleteItem}/>
           </div>
        )
    }
}

export default Budget;