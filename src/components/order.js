import React, {Component} from 'react';


class OrderItem extends Component {

   render() {
       return(
           <li className='list-group-item orderGroup'>
               <span>{this.props.orderitem.name}</span>
               <span className="float-right">{this.props.orderitem.price}</span>
           </li>
       )
   }
}

function OrderList(props) {

   let orderItems = props.orderList.map((orderitem, index) => (
       <OrderItem key={index} orderitem={orderitem} />
   ))
   return (
       <ul className='list-group'>{orderItems}</ul>
   )
}

export default OrderList