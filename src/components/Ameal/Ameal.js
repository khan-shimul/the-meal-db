import React from 'react';
import './Ameal.css'

const Ameal = (props) => {
    // console.log(props.mealA)
    const { strMealThumb, strMeal, strInstructions, strYoutube } = props.mealA
    return (
        <div class="col-md-6 g-4">
            <div class="card h-100">
                <img src={strMealThumb} class="card-img-top meal-img" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{strMeal}</h5>
                    <p class="card-text">{strInstructions.slice(0, 150)}</p>
                    <button className="btn btn-warning me-3">Add to cart</button>
                    <a href={strYoutube}><button className="btn btn-primary">Watch Video</button></a>
                </div>
            </div>
        </div>
    );
};

export default Ameal;