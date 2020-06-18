import React, {Component} from 'react'

class ResetButton extends Component {
    componentWillMount () {
        console.log('Removed');
    }

    render () {
        return (
            <button onClick={this.props.reset}>Reset</button>
        )
    }
}

export default ResetButton