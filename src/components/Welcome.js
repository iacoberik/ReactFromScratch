import React, { Component } from "react";

class Welcome extends Component {
    render(){
        // destructuring object into single
        const {name} = this.props
        // const {state1, state2} = this.state

        return (
            <h1 className="classComp">Class component, Welcome.js {name}</h1>
        )
    }
}

export default Welcome