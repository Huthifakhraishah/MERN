import React from 'react';
const Message = props => {
    const msg = props.message.msg;
    const msgSender = props.message.user;
    return(
        <div>
            <h1>{msgSender}</h1>
            <p>{msg}</p>
        </div>
    );
}

export default Message;