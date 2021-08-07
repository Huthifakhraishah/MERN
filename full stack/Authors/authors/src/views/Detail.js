import React, { useEffect, useState } from 'react';
import {navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';
const Details = (props) => {
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
            .then(res => setAuthor({
                ...res.data
            }))
    }, [props.id])

    return (
        <div>
            <h1>{author.name}</h1>
            <button onClick={(e) => navigate(`/`)}>Back</button>
            <button onClick={(e) => navigate(`/${author._id}/edit`)}>Edit</button>
            <DeleteButton authorId={author._id} successCallback={() => navigate("/")} />
        </div>
    )
}

export default Details