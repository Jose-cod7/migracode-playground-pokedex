import React, {useState} from 'react';
import ResetButoon from './ResetButton'

 totalCaught = () => {
     const [totalCaught, SetCaught] = useState(0);

     totalIncrement = () => {
         SetCaught(totalCaught + 1)
     }

 } 

export default CaughtPokemon;