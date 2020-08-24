// Code CoordinatesButton Component Here
import React from 'react'


class CoordinatesButton extends React.Component {

    findCoords = (event) => {
        let coordinates = []
        coordinates.push(event.clientX)
        coordinates.push(event.clientY)
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return(
            <button onClick={this.findCoords} >Hi</button>
        )
    }
}

export default CoordinatesButton