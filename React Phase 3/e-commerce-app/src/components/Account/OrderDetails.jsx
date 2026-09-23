import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext';

function OrderDetails() {

    const { orders } = useContext(CartContext);
    const { userDetails } = useContext(UserContext);

    function totalPrice() {
        let total = 0;

        orders.forEach((element) => {
            total += element.price * element.quantity;
        });

        return total;
    }

    console.log(orders);
    console.log(orders.map((item) => item.id));

    return (
        <div>
            <div>
                Your Orders : {userDetails.name}
                Shipping to this Address : {userDetails.address}
            </div>
            <div>
                {orders.map((item) => (
                    <div key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        {item.title}
                        {item.price}
                        {item.quantity}
                    </div>))}
            </div>
            <h2>Total Amount: {totalPrice()}</h2>
        </div>
    )
}

export default OrderDetails