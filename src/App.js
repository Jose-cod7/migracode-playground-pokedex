import React from 'react';
import Logo from './components/Logo'
import BestPokemon from './components/BestPokemon'
import CaughtPokemon from './components/CaughtPokemon'
import './App.css'

const App = () => {
    const poderes = ['Blaster water', 'Adaptability', 'Run-Away'];
    const today = (new Date().toLocaleDateString());
    return <div>
        <Logo appName="Pepe's Pokedex" />
        < BestPokemon abilities={poderes} />
        < CaughtPokemon infodate={today} />    {/*prop={aqui van las variables}*/}
        
        
        
    </div>;
}




export default App;
