import React, { useState } from  'react';
const UserForm = (props) => {
    const [fname, setfname] = useState("");
    const [lame, setlname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordc, setPasswordc] = useState("");  
    const [ftitleError, setfTitleError] = useState(""); 
    const [ltitleError, setlTitleError] = useState(""); 
    const [emailError, setEmailError] = useState(""); 
    const [passwordError, setPasswordError] = useState(""); 
    const [title, setTitle] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname,lame, email, password,passwordc,ftitleError,ltitleError,emailError,passwordError,title };
        console.log("Welcome", newUser);
    };
    const handlefTitle = (e) => {
        setfname(e.target.value);
        if(e.target.value.length < 2) {
            setfTitleError("name should input");
        } else if(e.target.value.length < 3) {
            setfTitleError("name must be 3 characters or longer!");
        }
    };
    const handlelTitle = (e) => {
        setlname(e.target.value);
        if(e.target.value.length < 2) {
            setlTitleError("name should input");
        } else if(e.target.value.length < 3) {
            setlTitleError("name must be 3 characters or longer!");
        }
    };
    const handlelEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2) {
            setEmailError("email should input");
        } else if(e.target.value.length < 3) {
            setEmailError("email must be 3 characters or longer!");
        }
    };
    const handlPassword = (e) => {
        setTitle(e.target.value);
        if(e.target.value.length < 2) {
            setPasswordError("password should input");
        } else if(e.target.value.length < 8 ) {
            setPasswordError("password must be 8 characters or longer!");
        }
    };
    
    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handlefTitle} />
                    {
                    ftitleError ?
                    <p style={{color:'red'}}>{ ftitleError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Last name: </label> 
                    <input type="text" onChange={ handlelTitle } />
                    {
                    ltitleError ?
                    <p style={{color:'red'}}>{ ltitleError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ handlelEmail } />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ handlPassword } />
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Password confirm: </label>
                    <input type="text" onChange={ handlPassword } /> 
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </>
    );
};
export default UserForm