import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Navbar = (props) => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("User is logged in:", currentUser);
                setUser(currentUser);
            } else {
                console.log("No user is logged in");
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    // Used above method instead of this because it take some time to apper(until Firebase has finished initializing the authentication state)
    // useEffect(() => {
    //     Setuser(auth.currentUser)
    // })

    const onLogout = ()=>{
        auth.signOut()
    }

    return (
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
            <div style={{ position: "absolute", top: "70px" }} className="ms-4 fs-5">
                {user ? <p>Welcome, {user.email}</p> : <p>Please log in</p>}
                {user ? <button onClick={onLogout}>Logout</button> : <p></p>}
            </div>
            
        </div>
    );
}

export default Navbar;


