import React, { useState } from 'react'
import BestPokemonFetcher from './BestPokemonFetcher'

function BestPokemonSelector () {
    const [pokemonId, setPokemonId] = useState(null);

    function handleBulbasurClick() {
        setPokemonId(1);
    }
    function handleCharmanderClick () {
        setPokemonId(4)
    }

    return (
        <div>
            <button onClick={handleBulbasurClick}>Fetch Bulbasur</button>
            <button onClick={handleCharmanderClick}>Fetch Charmander</button>
            {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
        </div>
    )
}

export default BestPokemonSelector