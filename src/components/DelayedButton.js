// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
    
//got really close to the answer - got stuck on how to have the setTimeout callback be a function within an anonymous function!

    delayClickHelper = (e) => {
        e.persist()
        
        window.setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
        
    }
    
    
    render(){
        return( <button onClick={this.delayClickHelper}> Delayed Button </button>)
    }

}

export default DelayedButton


//where I got to before checking solution:

// delayClickHelper = (e) => {
//     e.persist()
    
//     window.setTimeout(this.props.onDelayedClick(e), this.props.delay)
    
// }


// render(){
//     return( <button onClick={this.delayClickHelper}> Delayed Button </button>)
// }

// }