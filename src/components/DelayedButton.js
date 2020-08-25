// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

    handleClick = (event) => {
        event.persist() //now we can do some stuff with the event
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>Click2</button>
            </React.Fragment>
        )
    }
}

export default DelayedButton