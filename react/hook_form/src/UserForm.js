import React, { useState } from  'react';
const UserForm = (props) => {
    const [fname, setfname] = useState("");
    const [lame, setlname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordc, setPasswordc] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname,lame, email, password,passwordc };
        console.log("Welcome", newUser);
    };
    
    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setfname(e.target.value) } />
                </div>
                <div>
                    <label>Last name: </label> 
                    <input type="text" onChange={ (e) => setlname(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Password confirm: </label>
                    <input type="text" onChange={ (e) => setPasswordc(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <label>First Name: </label> 
                <p>{fname}</p>
            </div>
            <div>
                <label>Last name: </label> 
                <p>{lame}</p>
            </div>
            <div>
                <label>Email Address: </label> 
                <p>{email}</p>
            </div>
            <div>
                <label>Password: </label>
                <p>{password}</p>
            </div>
            <div>
                <label>Password confirm: </label>
                <p>{passwordc}</p>
            </div>
        </>
    );
};
export default UserForm