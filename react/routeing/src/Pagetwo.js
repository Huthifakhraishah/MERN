import React from 'react'

const Pagetwo = props => {
    let num = true;
    if (isNaN(+props.id)){
        num = false;
    }
    return (
        <div>
            {num ? <p style={{textAlign:'center'}}>The Number is: {props.id}</p> :
            <p style={{textAlign:'center'}}>The Word is: {props.id}</p>}
        </div>
    )
}

export default Pagetwo
