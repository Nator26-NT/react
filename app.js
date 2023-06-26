
import "./app.css";
import React,{useEffect, useState} from "react";
import Recipe from "./Recipe";

const App = () => {
    const Id = "702e8011";
    const Key ="ecf08be7cd85968e3e346980054e3b0c";
}
   const [search, setSearch] = useState('');
    const [recipe, setRecipe] = useState([]);
    const [query,setQuery] = useState('chicken');

useEffect(()=>{
    getRecipe()
}, [query];
    const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${Id}&app_key=${Key}`);
    };
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
const [counter, setCounter] = useState(0);

const updateSearch = e =>{
setState(e.target.value)

}
};
const getSearch = () =>{
setQuery(search)
};

setSearch('');
    return (
        <div className={App}>

            <h1>hello world</h1>
            <form className="search-form" onSubmit={getSearch}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button  className="search-button" type="submit">search</button>
            </form>
            <div className={recipes}>
                {recipe.map(recipe =>(
                <Recipe key={{recipe.recipe.label}
                    title={recipe.recipe.label} calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredient={recipe.recipe.ingredient}
                />
                    ))}
                </div>
        </div>
    );
};

export default App







































































































































































