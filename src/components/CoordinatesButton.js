// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    
    clickHelper = (e) => {
        e.persist()
        let mouseCoordinates = []
        mouseCoordinates.push(e.clientX)
        mouseCoordinates.push(e.clientY)
        //console.log(e)
        this.props.onReceiveCoordinates(mouseCoordinates)
    }
    
    render(){
        return (
            <button onClick={this.clickHelper} >Coordinates Button</button>
            )
    }
}

export default CoordinatesButton