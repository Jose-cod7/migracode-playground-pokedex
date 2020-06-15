import React from 'react';
import Logo from './components/Logo'
import BestPokemon from './components/BestPokemon'
import CaughtPokemon from './components/CaughtPokemon'

const App = () => {
    const poderes = ['Anticipation', 'Adaptability', 'Run-Away'];
    const date = (new Date().toLocaleDateString());
    return <div>
        <Logo appName="Pokedex" />
        < BestPokemon abilities={poderes} />
        < CaughtPokemon infodate={date} />    {/*prop={aqui van las variables}*/}
        
        
        
    </div>;
}




export default App;
