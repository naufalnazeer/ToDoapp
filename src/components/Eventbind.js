import React, { Component } from 'react'

class Eventbind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message : 'hello'
        }
    }
    clickHandler() {
        this.setState({
            message : 'good bye!'
        })
        console.log(this)
    }
    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button>    
            </div>
        )
    }
}

export default Eventbind
