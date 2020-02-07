import React from 'react'

const MostrarVoltas = (props) => {
    return(
        <p className='voltas'>
            <span>{props.volta}</span>  <br />
            { props.volta < 2 ? 'Volta' : 'voltas' }
        </p>
    )
}

export default MostrarVoltas