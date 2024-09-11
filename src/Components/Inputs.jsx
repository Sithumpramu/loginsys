import React from "react";

const Input = (props)=>{
    return(
        <div className="row mb-3">
            <label htmlFor={props.for} className="col-5">{props.label}</label>
            <input type={props.type} value={props.value} onChange={props.onChange} name={props.name} className="col"/>
        </div>
    )
}

export default Input