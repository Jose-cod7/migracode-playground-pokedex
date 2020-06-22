import React from 'react';
import Counter from "./Counter"

function CaughtPokemonhooks () {
    const date = new Date().toLocaleDateString();
    return (
     <div>
         <div> <Counter /> </div>
         {date}
     </div>   
    )
}

export default CaughtPokemonhooks;