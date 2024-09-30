// import React, { useState } from "react";
// import Input from "./Inputs";
// import { Link } from 'react-router-dom';
// import { loginUser } from "../Utils/Firebase";

// const Login = () => {

//     const [contact, setContact] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setContact((preValue) => ({
//             ...preValue,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             await loginUser(contact.email, contact.password);
//             alert('Login successful');
//             window.location.href = '/Home';
//         } catch (e) {
//             console.error('Login failed:', e.message);
//             alert('Login failed: Invalid email or password');
//         }
//     };

//     return (
//         <div className="container d-flex justify-content-center align-items-center vh-100">
//             <div className="border border-4 border-primary p-5">
//                 <div className="d-flex justify-content-between">
//                     <h2 className="mb-5 text-primary">Login</h2>
//                     <Link to={"/Signup"} className="btn btn-outline-info h-50 mt-1">Signup</Link>
//                 </div>
//                 <Input
//                     for="email"
//                     label="Email"
//                     type="email"
//                     value={contact.email}
//                     name="email"
//                     onChange={handleChange}
//                 />
//                 <Input
//                     for="password"
//                     label="Password"
//                     type="password"
//                     value={contact.password}
//                     name="password"
//                     onChange={handleChange}
//                 />
//                 <div className="d-flex justify-content-center">
//                     <button className="mt-3 btn btn-primary row w-75" onClick={handleSubmit}>Login</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from "react";
import Input from "./Inputs";
import { Link } from 'react-router-dom';
import { loginUser } from "../Utils/Firebase";

const Login = ({ onLogin }) => {
    const [contact, setContact] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((preValue) => ({
            ...preValue,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // If the onLogin prop is passed, call it with email and password (useful for testing)
            if (onLogin) {
                onLogin(contact.email, contact.password);
            } else {
                // This is for actual app functionality if onLogin is not passed (production scenario)
                await loginUser(contact.email, contact.password);
                alert('Login successful');
                window.location.href = '/Home';
            }
        } catch (e) {
            console.error('Login failed:', e.message);
            alert('Login failed: Invalid email or password');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="border border-4 border-primary p-5">
                <div className="d-flex justify-content-between">
                    <h2 className="mb-5 text-primary">Login</h2>
                    <Link to={"/Signup"} className="btn btn-outline-info h-50 mt-1">Signup</Link>
                </div>
                <Input
                    for="email"
                    label="Email"
                    type="email"
                    value={contact.email}
                    name="email"
                    onChange={handleChange}
                />
                <Input
                    for="password"
                    label="Password"
                    type="password"
                    value={contact.password}
                    name="password"
                    onChange={handleChange}
                />
                <div className="d-flex justify-content-center">
                    <button className="mt-3 btn btn-primary row w-75" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
