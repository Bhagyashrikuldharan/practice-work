import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });

    const navigate = useNavigate();

    
    const validation = () => {
        const newErrors = { email: "", password: "" };

        if (!email) {
            newErrors.email = "Please enter Email!";
        }
        if (!password) {
            newErrors.password = "Please enter Password!";
        }

        setErrors(newErrors);
        return !newErrors.email && !newErrors.password  && navigate("/register")
    };

    const handleSubmit =(e) => {
        e.preventDefault()
        validation()
        if(errors.email && errors.password ){
            navigate("/register")
        }
        
    }

   
    return(
   
            <div className="loginbox">
        <form onSubmit={handleSubmit}>
        <div><label>Email Id :</label></div>
            <div>
                <input type="text" value={email}  placeholder="Enter Email id" onChange={e => {setEmail(e.target.value); setErrors({...errors, email:""})}}/>
                {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
            </div>
            <div><label>Password :</label></div>
            <div>
                <input type="password" value={password}  placeholder="Enter Passwork" onChange={e=> setPassword(e.target.value)}/>
                {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
            </div>
            <button >Submit here</button>
        </form>
            
       
        </div>
    )
};
export default LoginPage;