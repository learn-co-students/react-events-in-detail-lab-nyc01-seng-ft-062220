// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{

    mouseHandler = (event) =>{
        const answer = [event.clientX,event.clientY]
        this.props.onReceiveCoordinates(answer)

    }

render(){
    return(


        <button onClick={this.mouseHandler} >Swag</button>


    )



}

}