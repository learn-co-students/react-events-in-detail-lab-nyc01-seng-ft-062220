import React from 'react'

class CoordinatesButton extends React.Component {
    handleClick = (e) => {
        const coords = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coords)
    }
    
    render() {
        return <button onClick={this.handleClick}>coordinates</button>
    }
}

export default CoordinatesButton