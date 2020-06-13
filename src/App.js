import React from 'react';
import Logo from './components/Logo'
import BestPokemon from './components/BestPokemon'
import CaughtPokemon from './components/CaughtPokemon'

const App = () => {
    const poderes = ['Anticipation', 'Adaptability', 'Run-Away'];
    return <div>
        <Logo appName="Pokedex" />
        < BestPokemon abilities={poderes} />
        < CaughtPokemon />
        
        
        
    </div>;
}




export default App;
