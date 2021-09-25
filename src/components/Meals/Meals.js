import React, { useEffect, useState } from 'react';
import Ameal from '../Ameal/Ameal';

const Meals = () => {
    const [meals_A, setMeals_A] = useState([])
    console.log(meals_A)


    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals_A(data.meals))
    }, [])

    return (
        <div className="overflow-hidden container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            meals_A.map(meal_A => <Ameal
                                mealA={meal_A}
                                key={meal_A.idMeal}
                            >
                            </Ameal>)
                        }
                    </div>
                </div>

                <div className="col-md-3">
                    <h2>cart add korbo</h2>
                </div>
            </div>
        </div>
    );
};

export default Meals;