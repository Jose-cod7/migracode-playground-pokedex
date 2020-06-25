import React from 'react';
import Logo from './components/Logo'
import BestPokemonFetcher from './components/BestPokemonFetcher'
import CaughtPokemonhooks from './components/CaughtPokemonhooks'
import './App.css'

const App = () => {
    const poderes = ['Blaster water', 'Adaptability', 'Run-Away'];
    const today = (new Date().toLocaleDateString());
    return <div>
        <Logo appName="Pepe's Pokedex" />
        < BestPokemonFetcher abilities={poderes} />
        < CaughtPokemonhooks infodate={today} />    {/*prop={aqui van las variables}*/}
        
        
        
    </div>;
}




export default App;
