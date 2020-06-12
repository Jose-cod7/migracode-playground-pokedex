import React from 'react';

const Abilities = () => {
const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
return <div>
    <p>"My favorite Pokemon is Squirtle"</p>
    <ul>
        {abilities.map((name) => {
            return (
                <li>{name}</li>
            )
        })}
    </ul>
</div>
}

export default Abilities;