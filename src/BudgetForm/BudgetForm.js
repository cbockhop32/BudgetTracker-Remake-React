import React, { Component } from 'react'
import './BudgetForm.scss';
import {v4 as uuidv4} from "uuid";



class BudgetForm extends Component {
    constructor(props) {
        super(props);
        // this will be used to store the values and then pass it up to the parents using a handleevent
        this.state = {name: "", type: "", amount: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newItem = {...this.state, id:uuidv4()};


        this.props.addItem(newItem);

        this.setState({
            name: '',
            type: '',
            amount: ''
        })
    }


    render() {
        return(
            <form className="BudgetForm" onSubmit={this.handleSubmit}>


                <div>
                <input id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <select id="item-type" name="type" value={this.state.type} onChange={this.handleChange}>
                                <option default>Select Type</option>
                                <option value="Income">Income</option>
                                <option value="Expense">Expense</option>
                    </select>

                </div>

                <input type="number" min="0.01" step="0.01" id="item-dollar"  placeholder="Dollar amount" name="amount" value={this.state.amount} onChange={this.handleChange}></input>
                <button className="Btn">Add</button>
                    
                        
                
               
               

            </form>

        )
    }
}

export default BudgetForm;