import React,  {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [pokemonNameInput, setName] = useState("");

    const increment = () => {
        setCount(count + 1)
    };

    const reset = () => {
        setCount(0)
    };

    const handleInputChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
           <h3> Caught {count} Pokemons </h3>
            <input type='text' placeholder='pokemon name' value={pokemonNameInput} onChange={handleInputChange}></input>
            <button onClick={increment}>Caught one more:</button>
            <button onClick={reset}>Reset</button>
            
        </div>
    )
}

export default Counter