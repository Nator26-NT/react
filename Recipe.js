import React from 'react'
import style from 'recipe.module.css';

const Recipe = (title,calories,image,ingredient) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredient.map(ingredient =>{
                    {ingredient.text}
                })}
            </ol>
            <p>{calories}</p>

            <img src={image}></img>

        </div>
    );
}
export default Recipe;