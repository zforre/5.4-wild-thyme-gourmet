import React, {Component} from 'react';


class OrderItem extends Component {

   render() {
       return(
           <li className='list-group-item'>
               <span>{this.props.OrderItem.name}</span>
           </li>
       )
   }
}

function OrderList(props) {

   let orderItems = props.orderlist.map((orderitem, index) => (
       <OrderItem orderitem={orderitem} />
   ))
   return (
       <ul className='list-group'>{orderItems}</ul>
   )
}

export default OrderList