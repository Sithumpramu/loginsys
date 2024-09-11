import React from "react";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


const Navbar = (props)=>{
    return(
        <div className="d-flex justify-content-between align-items-center bg-secondary">
         <h2 className="ms-4">{props.title}</h2>
         <div className="input-group w-50">
            <span className="input-group-text" id="basic-addon1">
                <FaSearch />
            </span>
            <input 
                type={props.type} 
                placeholder={props.place} 
                className="form-control"
            />
        </div>
         <div className="me-4">
         <Link to={""} className="btn btn-secondary">{props.name1}</Link>
         <Link to={"/Login"} className="btn btn-primary ms-5">{props.name2}</Link>
         </div>
        </div>
    )

}

export default Navbar