import React, {Component} from 'react';

class FoodItem extends Component {

     addItem = event => {
        event.preventDefault();
        console.log({FoodItem});
      }

    render() {
        return(
            <li className='mt-3 list-group-item'>
                <span>{this.props.foodItem.name}</span>
                <button className='btn btn-dark float-right' onClick={this.addItem} >{this.props.foodItem.price} </button>
            </li>
        )
    }
}

function FoodList(props) {

    let foodItems = props.foodList.map((foodItem, index) => (
        <FoodItem foodItem={foodItem} />
    ))
    return (
        <ul className='list-group list-group-flush'>{foodItems}</ul>
    )
}

export default FoodList