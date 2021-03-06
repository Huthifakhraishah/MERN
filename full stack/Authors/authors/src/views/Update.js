import React, {useState, useEffect} from 'react';
import AuthorForm from '../components/AuthorForm';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
const Update = (props) => {
    const {id} = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);

    console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(response => {
            setAuthor(response.data)
            setLoaded(true)
        })
    },[id]);

    const editAuthor = (updatedAuthor) => {
        axios.put(`http://localhost:8000/api/authors/${id}`, updatedAuthor)
        .then(res => {
            console.log(res);
            navigate("/");
        })
    }

    return(
        <div>
            <Link to="/">Home</Link>
            <div>
                <h4>Edit this Author</h4>
                {loaded && <AuthorForm onSubmitProp={editAuthor} initialName={author.name}/>}
            </div>
        </div>
    )
}

export default Update

