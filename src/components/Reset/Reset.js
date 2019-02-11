import React from 'react'

function Button(props) {

    return <button className='btn button' onClick={() => props.resetGame()}>Reset</button>

}

export default Button