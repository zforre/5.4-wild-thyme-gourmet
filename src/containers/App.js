import React, {Component}from 'react';
import OrderList from './../components/order.js'
import FoodList from './../components/menu.js'
import './App.css';

//10 or more menu item

const foodList = [{name: 'Chicken Parmigiano', price: 24.95}, {name: 'Ricotta Ravioli', price: 20.95}, {name: 'New York Strip', price: 32.00}, 
{name: 'Double Cut Pork Chop', price: 32.00}, {name: 'Grilled Filet of Beef', price: 37.00}, {name: 'Waterfall Beef', price: 25.95}, {name: 'Sautéed Breast of Chicken', price: 24.95}, 
{name: 'Bacon Wrap Quail', price: 25.95}, {name: 'Panéed Breast of Chicken', price: 24.95}, {name: 'Salmon with Wasabi Peas', price: 27.95}];

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      foodList: []
    }
  }

  componentDidMount() {
    this.setState({foodList})
  }
  
  render() {
    return (
      <div>
          <h1>Wild Thyme Gourmet</h1>
          <FoodList foodList={this.state.foodList} />
          <OrderList OrderList={this.state.OrderList} />
      </div>
    )
  }
}

export default Menu;
