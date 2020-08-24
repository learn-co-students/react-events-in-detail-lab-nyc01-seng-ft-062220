// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

    clickHandler = (event) => {
        const coordinateArray = [event.clientX,event.clientY]
        this.props.onReceiveCoordinates(coordinateArray)
    }

    render () {
        return (
            <button 
            onClick={this.clickHandler}>
                Create an array!
            </button>
        )
    }
}

export default CoordinatesButton