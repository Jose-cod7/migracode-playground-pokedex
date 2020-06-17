import React, {Component} from 'react';

class CaughtPokemon extends Component {
     state = {
         caughtpokemon: 0
     };

     CaughtPokemon = () => {
      this.setState(previousState => {
          return {
              caughtpokemon: previousState.caughtpokemon + 1
          }
      })  
    
    }

    render () {
        return (
            <div>
                CaughtPokemon: {this.state.caughtpokemon}
                <button onClick={this.CaughtPokemon}>Catch them all</button>
            </div>
        )
    }

}
export default CaughtPokemon;