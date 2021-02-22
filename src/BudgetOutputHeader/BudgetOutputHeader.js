import React, { Component } from 'react';
import './BudgetOutputHeader.scss'


class BudgetOutputHeader extends Component {
    constructor(props) {
        super(props)
    }
    



    render() {
        return(

            <div className="BudgetOutputHeader">

                <button className="Btn Btn-Monthly">Monthly</button>
                <button className="Btn Btn-Annual">Annually</button>
            </div>
        )
    }
}

export default BudgetOutputHeader;