import React, {Component} from 'react';

class Logo extends Component {

    logWhenClicked = () => {
        console.log('Blastoise')
    }

    render () {
    return (
        <div><header><h1>{this.props.appName}</h1><img onClick={this.logWhenClicked}  src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009_f2.png" alt="pokemon"></img></header></div>
    )
    }
    }

export default Logo;