import React, { Component } from 'react';
import './Item.scss';


class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            itemAmt: this.props.amount
        }

        this.handleEdit= this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    handleEdit(evt) {
        this.setState(st => ({
            isEditing: !st.isEditing
        }))
    }

    handleChange(evt) {
        this.setState({
            itemAmt: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.changeItemAmt(this.props.id, this.props.type, this.state.itemAmt);
        this.setState({
            isEditing: false
        });
    }

    handleDelete() {
        this.props.deleteItem(this.props.id, this.props.type);
    }

   

    render() {
        let result;
        if(this.state.isEditing) {
            result = (
            
            <div className="Item">
            <strong>{this.props.name}</strong>

            <form onSubmit={this.handleSubmit}>
                <input value={this.state.itemAmt} onChange={this.handleChange}></input>
                <button>Save</button>
                 
            </form>
            
            </div>)
            
            

        } else {

            result = (
                <div className="Item">
                <strong>{this.props.name}</strong>

                <div>
                    <span>{this.state.itemAmt}</span>
                    <button className="itemBtn" onClick={this.handleEdit}><i className="fas fa-edit"></i></button>
                    <button className="itemBtn" onClick={this.handleDelete}><i className="fas fa-trash-alt"></i></button>
                </div>
                
                </div>


            )
        }

        return result;
    }
}

export default Item;