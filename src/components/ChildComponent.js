import React from 'react'

function ChildComponent(props) {
    return (
        <div>
       <button onClick={() => props.greetHandler('Naufal')}>great the parent</button>     
        </div>
    )
}

export default ChildComponent
 