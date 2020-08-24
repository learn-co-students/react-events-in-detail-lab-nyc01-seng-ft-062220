// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    handleMe = (event) => {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
        },this.props.delay);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleMe}>Me</button>
            </div>
        )
    }
}

export default DelayedButton
