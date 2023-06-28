import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

    // clickHandler = () => {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    // }

  render() {
    const {message} = this.state
    return (
      <div>
        <div>{message}</div>
        {/* <button onClick={this.clickHandler}>Click EventBind</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click EventBind</button> */}
        <button onClick={this.clickHandler}>Click EventBind</button>
        {/* binding into the constructor for good performance */}
      </div>
    )
  }
}

export default EventBind