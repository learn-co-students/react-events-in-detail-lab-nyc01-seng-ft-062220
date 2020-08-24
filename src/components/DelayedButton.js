// Code DelayedButton Component Here
import React from 'react'


class DelayedButton extends React.Component {

    
        timey = (event) => {
            event.persist()
            window.setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
        }
   

    render() {
        return(
            <button onClick={this.timey}>Ho</button>
        )
    }
}

export default DelayedButton