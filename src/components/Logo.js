import React from 'react';

const Logo = () => {
    const appName = "Welcome to the Pokedex";
    return <div>
    <header><h1> {appName} </h1>
<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon"></img></header>
</div>;
}

export default Logo;