import React from 'react';

class CoordinatesButton extends React.Component{

    clickHandler = event => {
        // console.log(event)
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    };

    render(){
        return <button onClick={this.clickHandler}>Coordinate</button>
    };
};

export default CoordinatesButton;