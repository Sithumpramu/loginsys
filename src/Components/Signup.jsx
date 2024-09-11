import React,{useState} from "react";
import Input from "./Inputs";
import { createUser, createUserDocFromAuth } from "../Utils/Firebase";

const Signup = () => {
    const [contact, setContact] = useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:''
    });

    const {name,email,password,confirmpassword} = contact;

    const handleChange = (event)=>{
        const {name,value} = event.target
        setContact((preValue)=>{
        return{
            ...preValue,
            [name]:value
        }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (password !== confirmpassword) {
            alert('Passwords do not match');
            return;
        }
    
        try {
            const { user } = await createUser(email, password);
            await createUserDocFromAuth(user);
            alert('Account created successfully');
            window.location.href = '/Login';
        } catch (e) {
            alert('Error occurred while creating the user:' + e.message);
        }
    };


    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="border border-4 border-primary p-5">
                <h2 className="mb-5 text-primary">Create A DEV@Deakin Account</h2>
                <Input
                    for="name"
                    label="Name"
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                     />

                <Input
                    for="email"
                    label="Email"
                    type="email" 
                    name="email"
                    value={contact.email}
                    onChange={handleChange}/>

                <Input
                    for="password"
                    label="Password"
                    type="password"
                    value={contact.password}
                    name="password"
                    onChange={handleChange} />

                <Input
                    for="ConfirmPass"
                    label="Confirm Password"
                    type="password" 
                    name="confirmpassword"
                    value={contact.confirmpassword}
                    onChange={handleChange}/>
                <div className="d-flex justify-content-center">
                <button className="mt-3 btn btn-primary row w-75" onClick={handleSubmit}>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;
