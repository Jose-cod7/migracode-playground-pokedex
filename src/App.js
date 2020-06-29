import React from 'react';
import Logo from './components/Logo'
import CaughtPokemonhooks from './components/CaughtPokemonhooks'
import './App.css'
import BestPokemonSelector from './components/BestPokemon/BestPokemonSelector';

const App = () => {
    const today = (new Date().toLocaleDateString());
    return <div>
        <Logo appName="Pepe's Pokedex" />
        < BestPokemonSelector />
        < CaughtPokemonhooks infodate={today} />    {/*prop={aqui van las variables}*/} 
    </div>;
}




export default App;
