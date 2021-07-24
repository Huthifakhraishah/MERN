import React from 'react';
const Color = (props) => {
    let s =Array.from(props.sec);
    return(
        <>
            <div style={{display:'flex'}}>
                {s.map(
                    ( items ,index )=>{
                        let arr=[];
                    for(let i=1;i <= items.number;i++){
                        arr.push(<div className="box"  style={{backgroundColor:items.color,width:"100px",height:"100px"}}>
                        </div>)
                    }
                    return arr;
                })}
                </div>
        </>
    )
}
export default Color