import React, { Component } from 'react';
import './BudgetOutput.scss';
import BudgetOutputHeader from '../BudgetOutputHeader/BudgetOutputHeader';
import BudgetOutputSection from '../BudgetOutputSection/BudgetOutputSection'

class BudgetOutput extends Component {
    static defaultProps = {
        sectionOne: 'Income',
        sectionTwo: 'Expenses'
    }

    constructor(props) {
        super(props)
    }

    render() {
        const totalIncome = this.props.incomeItems.map(item => parseFloat(item.amount)).reduce((acc,cv) => acc +cv,0);
        const totalExpenses = this.props.expenseItems.map(item => parseFloat(item.amount)).reduce((acc,cv) => acc +cv,0);

        console.log(totalIncome)
        console.log(totalExpenses)
        


        return(
            <div className="BudgetOutput">

                <div className='OutputContainer'>
                    <BudgetOutputHeader/>
                    <BudgetOutputSection name={this.props.sectionOne} items={this.props.incomeItems} changeItemAmt={this.props.changeItemAmt} deleteItem = {this.props.deleteItem}/>
                    <BudgetOutputSection name={this.props.sectionTwo} items={this.props.expenseItems} changeItemAmt={this.props.changeItemAmt} deleteItem = {this.props.deleteItem}/>

                    <div className="Savings">
                        <h2>Savings <i class="fas fa-hand-holding-usd"></i></h2>

                        <div className="SavingsData">
                            <strong>Total Savings</strong>
                            <strong>{totalIncome - totalExpenses}</strong>

                        </div>

                        <div className="SavingsData">
                            <strong>% of Total Income</strong>
                            <strong>{(totalIncome-totalExpenses)/totalIncome}</strong>

                        </div>

                        <div className="SavingsData">
                            <strong>Annual Savings</strong>
                            <strong>{(totalIncome-totalExpenses) * 12}</strong>

                        </div>




                    </div>

                </div>
              
                
            </div>

        )
        
    }


}

export default BudgetOutput;