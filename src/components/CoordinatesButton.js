import React from 'react'

class CoordinatesButton extends React.Component {

  clickHandler = (event) => {
    console.log(event.clientY)
    const coordinateArray = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinateArray)

  }


  render(){
    return(
      <button onClick={this.clickHandler}>coord button</button>

    )
  }



}

export default CoordinatesButton
