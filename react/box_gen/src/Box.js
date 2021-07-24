import React, { useState } from  'react';
import Color from './Color';
const Box = (props) => {
    const [color, setColor] = useState("");
    const createColor = (e) => {
        e.preventDefault();
        setColor("");
        const newUser = { color};
        console.log("Welcome", newUser);
    };
    const handlColor = (e) => {
        setColor(e.target.value);
    };
    return(
        <>
            <form onSubmit={ createColor }>
                <div>
                    <label>color: </label> 
                    <input type="text" onChange={ handlColor} />
                </div>
                <input type="submit" value="submit" />
            </form>
        </>
    );
};
export default Box