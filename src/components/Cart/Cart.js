import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}
    // console.log(cart)


    return (
        <div>
            <h5>Name:</h5>
            <ul>
                {
                    cart.map(meal => <li>{meal.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;