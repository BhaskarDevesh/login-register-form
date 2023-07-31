
import React, { useState } from "react";
import { Logo } from "./icons/logo";
import icon from "./icons/logo2.png";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
       let data={email,password};
        fetch("http://localhost:8000/SignPageSchema",{
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
          }) .then((resp)=>{
            // console.warn("resp",resp);;
            resp.json().then((result)=>{

                if(result.msg==="User Not found")
                  alert(result.msg);
                else
                  alert("user login successfully")  
              console.warn("result",result)
            })
          })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })

    }

    return (
        <div className="auth-form-container">
            {/* <Logo></Logo> */}
            <div ><img src={icon}
                height={100} width={100}
                style={{ marginTop: "-30px" }} />
                <h2>Login</h2></div>
            <form className="login-form"  action="get">
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={handleSubmit}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}