import React, { useEffect, useState } from 'react';
import Ameal from '../Ameal/Ameal';
import Cart from '../Cart/Cart';

const Meals = () => {
    const [meals_A, setMeals_A] = useState([])
    const [displayMeal, setDisplayMeal] = useState([])
    const [cart, setCart] = useState([])
    // console.log(cart)


    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => {
                setMeals_A(data.meals)
                setDisplayMeal(data.meals)
            })
    }, [])

    const handleAddCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
        // console.log(cart)
    }

    const handleSearch = event => {
        const searchText = event.target.value
        const mathcedMeals = meals_A.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()))
        // console.log(mathcedMeals.length)

        setDisplayMeal(mathcedMeals);

    }

    return (
        <div className="overflow-hidden container">
            <div class="input-group my-3">
                <input onChange={handleSearch} type="text" class="form-control" placeholder="Fish" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>

            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            displayMeal.map(meal_A => <Ameal
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