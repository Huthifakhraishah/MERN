import React, {useState, useEffect} from 'react';
import Input from './Input';
const Htask = (props) => {
    const [htasks, setHtasks] = useState([]);
    const addHtasks = (htask) => {
        setHtasks([...htasks, htask]);
        }
    const removeHtask = (index) => {
        setTasks(htasks.slice(0,index).concat(htasks.slice(index+1)));
    }

    const changeStatus= (item , index) => {
        let arr = htasks;
        if(item.status){
            arr[index].status = false;
            setHtasks([...arr]);
            var element = document.getElementById(""+index);
            element.className = "abc";
        }
        else {
            arr[index].status = true;
            setHtasks([...arr]);
            var element = document.getElementById(""+index);
            element.className = "ddd";
        }
    }
    
    return (
        <div>
            <Input addHtasks = {addHtasks}/>
            {
                htasks.map((htask, index) => {
                    let x = ""+index;
                    return <div key={index}>
                        <p id={x}>{htask.htask}</p>
                            <label>
                                <input type="checkbox" checked={htask.status} onChange={() =>{changeStatus(htask, index)}}/> Is it Done?
                            </label>
                            <button onClick={()=>{removeHtask(index)}}> Delete</button>
                        </div>
                })
            }
        </div>
    )
}

export default Htask
