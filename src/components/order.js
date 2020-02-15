import React, {Component} from 'react';


class OrderItem extends Component {

   render() {


    // subtotal() {
    // this.props.orderItem.price;
    // }


       return(
    
            <li className='list-group-item orderGroup'>
                <span>{this.props.orderitem.name}</span>
                <span className="float-right">${this.props.orderitem.price}</span>
            </li>
        )
   }
}

function OrderList(props) {

   let orderItems = props.orderList.map((orderitem, index) => (
       <OrderItem key={index} orderitem={orderitem} />
   ))
   return (
       
       <ul className='list-group col-4 order '>{orderItems} 
            <div className="list-group-item">
                <h1 className="sub">Subtotal</h1>
                <button className="btn btn-success float-right orderbtn">Checkout</button>
            </div>
       </ul>
       
       

   )
}

export default OrderList