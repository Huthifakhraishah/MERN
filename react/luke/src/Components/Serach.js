import React,{ useState } from 'react'

import { navigate } from '@reach/router';
const Serach = props => {
    const [formState, setFormState] = useState({
        category: "people",
        id: ""
    });
    const onChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = e => {
        e.preventDefault();
        navigate('/' + formState.category + '/' + formState.id);
    }
    return (
        <div>
            <h1>Luke API Walker</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Search For:</label>
                    <select name="category" onChange={onChange}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="starships">Spaceships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="films">Films</option>
                    </select>
                </div>
                <div className="box">
                    <label>ID:</label>
                    <input type="number" name="id" onChange={onChange}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        )
}

export default Serach
