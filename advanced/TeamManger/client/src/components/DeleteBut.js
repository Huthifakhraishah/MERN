import React from 'react'
import axios from 'axios';
const DeleteBut = (props) => {
const onClickDestroy = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/api/player/${props.playerId}`)
    .then(res => {
        if(window.confirm(`Are you sure you want to delete this Player`)){
            props.successCallback();
        }
    })
}
return (
    <button onClick={onClickDestroy} >Delete</button>
)
}

export default DeleteBut
