import React from 'react';

const Logo = (props) => {
    console.log(props)
    const hi = "Welcome to my "
    return (
        <div><header><h1>{hi}{props.appName}</h1><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon"></img></header></div>
    )
    }

export default Logo;