import React, {Component}from 'react';
import Order from './../components/order.js'
import Menu from './../components/menu.js'
import './App.css';

//10 or more menu item

const menuItems = [{name: 'Chicken Parmigiano', price: 24.95}, {name: 'Ricotta Ravioli', price: 20.95}, {name: 'New York Strip', price: 32.00}, 
{name: 'Double Cut Pork Chop', price: 32.00}, {name: 'Grilled Filet of Beef', price: 37.00}, {name: 'Waterfall Beef', price: 25.95}, {name: 'Sautéed Breast of Chicken', price: 24.95}, 
{name: 'Bacon Wrap Quail', price: 25.95}, {name: 'Panéed Breast of Chicken', price: 24.95}, {name: 'Salmon with Wasabi Peas', price: 27.95}];

class WildThyme extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Wild Thyme Gourmet</h1>
        </header>
        <article>
          <Menu />
        </article>
        <aside>
          <Order />
        </aside>
      </div>
    )
  }
}




// function WildThyme() {
//   return (
//     <div className="App">
//      Hello, World!
//     </div>
//   );
// }

export default WildThyme;
