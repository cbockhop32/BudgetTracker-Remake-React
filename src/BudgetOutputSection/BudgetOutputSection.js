import React, { Component } from 'react';
import './BudgetOutputSection.scss';
import Item from '../Item/Item'


class BudgetOutputSection extends Component {
    constructor(props) {
        super(props)


        this.displayIcon = this.displayIcon.bind(this);
    }


    displayIcon() {
        if(this.props.name === 'Income') {
            return'-coins';
        } else if(this.props.name === 'Expenses') {
            return '-file-invoice-dollar';
        }
    }

  
    

    render() {

        let classes = (this.props.name === 'Income') ? 'fas fa-coins' : 'fas fa-file-invoice-dollar';

        let items = this.props.items.map(item => (
            <Item key={item.id} name={item.name} amount={item.amount} id={item.id} type={item.type} changeItemAmt={this.props.changeItemAmt} deleteItem = {this.props.deleteItem}/>
         ))
       
        return(
            <div className="BudgetOutputSection">
                <h3>{this.props.name} <i className={classes}></i></h3>
                {items}

                <div className="Totals">
                    <strong>Total {this.props.name}</strong>
                    <strong>-</strong>
                </div>
                
                </div>
        )
    }
}

export default BudgetOutputSection;