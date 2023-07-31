import React, { useState } from "react";
import { Logo } from "./icons/logo";
import icon from "./icons/logo2.png";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [Name, setName] = useState('');

    
    async function submit(e){
        e.preventDefault();

        try{

            let data={Name,email,password};
            // console.warn(data);
              fetch("http://localhost:8000/register", {
                method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(data)
              })
              .then((resp)=>{
                // console.warn("resp",resp);;
                resp.json().then((result)=>{

                    if(result.email==="A user has already registerd with this email")
                      alert(result.email);
                    else
                      alert("user login successfully")  
                  console.warn("result",result)
                })
              })
            

        }
        catch(e){
            console.log(e);

        }

    }

    return (
        <div className="auth-form-container">
            {/* <Logo></Logo> */}
            <div ><img src={icon}
                height={100} width={100}
                style={{ marginTop: "-66px" }} />
                <h2>Register</h2></div>
            <form action="POST" className="register-form" >
                <label htmlFor="Name">Full Name</label>
                <input value={Name} name="Name" onChange={(e) => setName(e.target.value)} id="Name" placeholder="full Name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit"   onClick={submit}>REGISTER</button>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}
