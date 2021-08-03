import React, {useState} from 'react'

const Input = (props) => {
    const [htask , setHtask] = useState("");
    const [status, setStatus] = useState(false);
    const addHtask= (e) => {
        props.addHtasks({htask, status});
        e.preventDefault();
    }
    
    const handleHtask = (e) => {
        setHtask(e.target.value);
    }
    return (
        <div>
            <form onSubmit={addHtask}>
                <input type="text" onChange={handleHtask}/>
                <input type="hidden" value = {false}/>
                <input type="submit" value="Add Task"/>
            </form>
        </div>
    )
}

export default Input
