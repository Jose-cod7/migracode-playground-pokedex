import React, {Component} from 'react';
import ResetButoon from './ResetButton'


    class CaughtPokemon extends Component {
        state = {
            caughtpokemon: 0
        };

        componentDidMount (){
            console.log('loaded')
        }

        catch = () => {
            this.setState(previousState => {
                return {
                    caughtpokemon: previousState.caughtpokemon + 1
                }
             })  
        
        }

        reset = () => {
            this.setState(() => {
                return {
                    caughtpokemon: 0
                }
            })
        }

        render () {
            return (
                <div>
                    <p>Caught {this.state.caughtpokemon} Pokemon on </p> {this.props.infodate}
                    <button onClick={this.catch}>Catch them all</button>

                    {this.state.caughtpokemon > 0
                    ? <ResetButoon reset={this.reset}/>
                    : null
                    }
                </div>
            )
        }

}
export default CaughtPokemon;