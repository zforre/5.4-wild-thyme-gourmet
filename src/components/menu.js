import React, {Component} from 'react';

class FoodItem extends Component {

    render() {
        return(
            <li className='list-group-item'>
                <span>{this.props.foodItem.name}</span>
                <button className='btn btn-dark float-right' onClick={(e) => this.props.addItem(e, this.props.foodItem)} >${this.props.foodItem.price} </button>
            </li>
        )
    }
}

function FoodList(props) {

    let foodItems = props.foodList.map((foodItem, index) => (
        <FoodItem key={index} foodItem={foodItem} addItem={props.addItem} />
    ))
    return (
        <ul className='list-group col-8 menu'>{foodItems}</ul>
    )
}

export default FoodList