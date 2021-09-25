import React, { useEffect, useState } from 'react';
import Ameal from '../Ameal/Ameal';
import Cart from '../Cart/Cart';

const Meals = () => {
    const [meals_A, setMeals_A] = useState([])
    const [cart, setCart] = useState([])
    // console.log(cart)


    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals_A(data.meals))
    }, [])

    const handleAddCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
        // console.log(cart)
    }

    return (
        <div className="overflow-hidden container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            meals_A.map(meal_A => <Ameal
                                mealA={meal_A}
                                handleAddCart={handleAddCart}
                                key={meal_A.idMeal}
                            >
                            </Ameal>)
                        }
                    </div>
                </div>

                <div className="col-md-3">
                    <Cart
                        cart={cart}
                    >
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Meals;