import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return (
            <div>
                welcome viswas
            </div>
        )
    }
}

export default UserGreeting
